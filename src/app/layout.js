import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";
import { Roboto } from "next/font/google";
import AuthProvider from "@/services/AuthProvider";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "JourneyTrails | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
