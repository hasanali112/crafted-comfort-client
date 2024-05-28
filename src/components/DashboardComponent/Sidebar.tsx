import { FolderPlus, LayoutDashboard, StickyNote } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-[#111026] col-span-1  lg:col-span-2 h-screen sticky top-0 left-0 overflow-auto  text-white">
      <div className="p-1">
        <Link to="/" className="flex items-center gap-1 lg:ml-6">
          <span className="text-2xl font-bold truncate">
            Crafted <span className="text-cyan-400 truncate">Comfort</span>
          </span>
        </Link>
      </div>
      <hr className="opacity-30" />
      <nav className="flex flex-col gap-3 p-1 lg:p-5">
        <Link
          to="/dashboard"
          className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Dashboard</span>
        </Link>
        <Link
          to="/dashboard/product"
          className="lg:p-3 p-1 rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <StickyNote className="shrink-0" />
          <span className="truncate"> All Product</span>
        </Link>
        <Link
          to="/dashboard/create-product"
          className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <FolderPlus className="shrink-0" />
          <span className="truncate"> Add Product</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
