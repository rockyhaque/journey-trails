'use client' // Add this line to mark the file as a client-side component

import { useEffect, useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

 const metadata = {
  title: "JourneyTrails | Home",
};

export default function RootLayout({ children }) {
  const [isLoginOrSignup, setIsLoginOrSignup] = useState(false);

  useEffect(() => {
    setIsLoginOrSignup(
      window.location.pathname.includes("login") || window.location.pathname.includes("signup")
    );
  }, []);

  return (
    <>
      {!isLoginOrSignup && <Navbar />}
      <main>{children}</main>
      {!isLoginOrSignup && <Footer />}
    </>
  );
}
