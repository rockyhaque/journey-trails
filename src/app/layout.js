import "./globals.css";
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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
