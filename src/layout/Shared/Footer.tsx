import Container from "@/components/Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] mt-10">
      <div className="lg:h-[340px] pt-10">
        <Container>
          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 col-span-12">
              <h1 className="text-2xl font-bold text-center lg:text-left">
                COMPANY
              </h1>
              <ul className="flex lg:flex-col flex-row justify-center lg:justify-start gap-5 lg:gap-0 lg:space-y-3 mt-2">
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/flash-sale">
                  <li>Trending Products</li>
                </Link>
                <Link to="">
                  <li>Brands</li>
                </Link>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <h1 className="text-2xl font-bold text-center lg:text-left lg:mt-0 mt-10 mb-2">
                Help Center
              </h1>
              <ul className="flex lg:flex-col flex-row justify-center lg:justify-start gap-5 lg:gap-0 lg:space-y-3 mt-2">
                <li>Faq</li>
                <li>Support Center</li>
                <li>Customer Care</li>
                <Link to="">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12 hidden lg:block">
              <h1 className="text-2xl text-center lg:text-left font-bold mt-10 lg:mt-0 mb-2">
                Terms & Condition
              </h1>
              <ul className="space-y-3 mt-2">
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>Store Locator</li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12 space-y-5">
              <h1 className="text-2xl text-center lg:text-left font-bold mt-10 lg:mt-0 mb-2">
                Newsletter
              </h1>
              <p className="my-3 lg:text-left text-center">
                Sign up for get latest news and update
              </p>
              <div className="flex  items-center justify-center lg:justify-start">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[250px] h-[40px]   border border-gray-300 p-2"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-indigo-500 p-2 h-[40px] text-white"
                />
              </div>
              <p className="inline-flex items-center ml-28 lg:ml-0 gap-4 mt-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                support@techgear.com
              </p>
            </div>
          </div>
        </Container>
        <hr className="my-3" />
        <p className="text-center pb-4">
          &copy; Copyright 2024 Crafted Comfort
        </p>
      </div>
    </footer>
  );
};

export default Footer;
