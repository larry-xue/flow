import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet></Outlet>
      </section>

      <BottomBar />
    </div>
  );
}

export default RootLayout;
