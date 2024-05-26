import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeader =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  const noFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="bg-[#e5e8ec]">
      {noHeader || <Navbar />}
      <Outlet />
      {noFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
