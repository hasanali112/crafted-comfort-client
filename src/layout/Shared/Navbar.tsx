import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingCartIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#ffffff]">
      {/*nav-1 */}
      <nav className="w-full max-w-[1420px] mx-auto px-[20px] p-2">
        <div className="flex justify-between">
          <h1 className="text-[#515d66]">You will get up to 20% discount</h1>
          <div className="flex gap-10">
            <h1 className="text-[#515d66]">English</h1>
            <h1 className="text-[#515d66]">USD</h1>
          </div>
        </div>
      </nav>
      <hr />
      {/* nav-2 */}
      <nav className="flex justify-between w-full max-w-[1420px] mx-auto px-[20px] py-5  items-center">
        <span className="lg:text-2xl xl:text-4xl font-semibold">
          Crafted <span className="text-indigo-600">Comfort</span>
        </span>
        <ul className="flex items-center">
          <div className="flex translate-x-[200px] space-x-16">
            <h1>All Categories</h1>
            <span>|</span>
          </div>
          <input
            type="search"
            name=""
            id=""
            placeholder="secrch for product"
            className="border border-[#d0d2d3] w-[650px] h-[40px] rounded-md px-[250px] focus:outline-none"
          />
          <Button className="-translate-x-[78px] bg-indigo-600 rounded-r-md rounded-l-none">
            Search
          </Button>
        </ul>
        <ul className="flex gap-10">
          <li className="inline-flex gap-2">
            <span>
              <User2Icon />
            </span>
            <Link to="/login"> login</Link>
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <ShoppingCartIcon />
          </li>
        </ul>
      </nav>
      <hr />
      {/* nav-3 */}
      <nav className="flex justify-between w-full max-w-[1420px] mx-auto px-[20px] py-3  items-center">
        <h1 className="inline-flex gap-2">
          <span>
            <Menu />
          </span>
          Browse All Categories
        </h1>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <h1>Sale 25% off your first order </h1>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
