import Sidebar from "@/components/dashboard/SideBar/SideBar";
import "../globals.css";

export const metadata = {
  title: "JourneyTrails | Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="xl:w-1/5 lg:w-1/4">
        <Sidebar />
      </div>
      <div className="w-full lg:px-2 min-h-screen overflow-auto">{children}</div>
    </div>
  );
}
