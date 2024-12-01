import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { connectDB } from "@/lib/connectDB";

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
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
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
          const db = await connectDB();
          const userCollection = db.collection("users");
          const userExists = await userCollection.findOne({ email });

          if (!userExists) {
            await userCollection.insertOne({ ...user, role: "tourist" });
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
