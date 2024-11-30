import Sidebar from "@/components/shared/Sidebar/Sidebar";
import "../globals.css";

export const metadata = {
  title: "JourneyTrails | Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="h-screen md:flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">{children}</div>
      </body>
    </html>
  );
}
