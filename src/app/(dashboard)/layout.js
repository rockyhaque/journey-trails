import Sidebar from "@/components/dashboard/SideBar/SideBar";
import "../globals.css";

export const metadata = {
  title: "JourneyTrails | Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="lg:w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 min-h-screen overflow-auto">{children}</div>
    </div>
  );
}
