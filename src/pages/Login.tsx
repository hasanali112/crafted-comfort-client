import Container from "@/components/Container/Container";
import { Link } from "react-router-dom";
import google from "@/assets/google.png";

const Login = () => {
  return (
    <div className="h-screen">
      <Container>
        <Link to="/" className="flex items-center gap-1 pt-6">
          <span className="text-3xl font-bold">
            Crafted <span className="text-indigo-600">Comfort</span>
          </span>
        </Link>
        <div className="lg:w-[70%] mx-auto   h-[500px] mt-20 p-5">
          <div className="flex flex-col lg:ml-40">
            <h1 className="text-left text-4xl font-bold">Login</h1>
            <p className="text-xl mt-3 mb-5">
              Welcome back! Please enter you details.{" "}
            </p>
            <div>
              <button className="w-[70%] h-14 rounded-lg border bg-white text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
                <img src={google} alt="" className="w-10" />
                Login with Google
              </button>
            </div>
            <p className="lg:ml-32 mb-3 mt-4">or Login with Email</p>
            <div>
              <label htmlFor="Email" className="block">
                Email
              </label>
              <input
                type="text"
                className="border w-[70%] mb-3 h-12 rounded-lg"
              />
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="text"
                className="border w-[70%] mb-3 h-12 rounded-lg"
              />
            </div>
            <button className="w-[70%] h-14 rounded-lg bg-violet-600 text-white mt-3 text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
              Login
            </button>
            <p className="mt-3 mb-10">
              No registration yet?{" "}
              <Link to="/register" className="text-violet-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;