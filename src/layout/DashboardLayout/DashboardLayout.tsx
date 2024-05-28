import Sidebar from "@/components/DashboardComponent/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-6 lg:grid-cols-12">
        <Sidebar />
        <div className="lg:col-span-10 col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
