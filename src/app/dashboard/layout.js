
import { Roboto } from "next/font/google";
import AuthProvider from "@/services/AuthProvider";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "JourneyTrails | Dashboard",
};

export default function DashboardRootLayout({ children }) {
  return (
    <div className={`${roboto.className}`}>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
