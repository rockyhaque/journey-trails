import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import connectDB from "@/lib/connectDB";
import Users from "@/models/Users";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
        await connectDB();
        const currentUser = await Users.findOne({ email });
        if (!currentUser) {
          throw new Error("User not found");
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APPID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "tourist";
        token.email = user.email;
      } else {
        await connectDB();
        const currentUser = await Users.findOne({ email: token.email });
        if (currentUser) {
          token.role = currentUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.email = token.email;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "facebook") {
        const { email } = user;
        try {
          await connectDB();
          const userExists = await Users.findOne({ email });
          if (!userExists) {
            await Users.create({
              email,
              role: "tourist",
              provider: account.provider,
              createdAt: new Date(),
            });
          }
          return true;
        } catch (err) {
          console.log("Error during sign-in:", err);
          return false;
        }
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
