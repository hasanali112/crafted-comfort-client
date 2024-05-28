/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import google from "@/assets/google.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import { UserCredential } from "firebase/auth";

type Inputs = {
  name: string;
  photo: string;
  userName: string;
  email: string;
  password: string;
};

const Registration = () => {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProviders");
  }

  const { createUser, updateUserProfile } = authContext;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    const userName = data.userName;
    const photo = data.photo;
    createUser(email, password)
      .then((result: UserCredential) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(userName, photo)
          .then()
          .catch((error) => {
            console.log(error);
          });
        fetch("http://localhost:5000/create-user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
    navigate("/login");
  };

  return (
    <div className="h-[113vh]">
      <Container>
        <Link to="/" className="flex items-center gap-1 pt-6">
          <span className="text-3xl font-bold">
            Crafted <span className="text-indigo-600">Comfort</span>
          </span>
        </Link>
        <div className="lg:w-[60%] mx-auto  h-[500px]  p-5">
          <div className="flex flex-col lg:ml-40">
            <h1 className="text-left text-4xl font-bold">Registration Here</h1>
            <p className="text-xl mt-3 mb-5">
              Please enter you details for registration.{" "}
            </p>
            <div>
              <button className="w-[70%] h-14 rounded-lg border bg-white  text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
                <img src={google} alt="" className="w-10" />
                Login with Google
              </button>
            </div>
            <p className="lg:ml-32 mb-3 mt-4">or Registration with Email</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[70%]">
                <div className="grid grid-cols-12 gap-4">
                  <div className="flex flex-col col-span-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("name")}
                      className="border w-full mb-3 h-12 rounded-lg pl-4 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col col-span-6">
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      placeholder="User Name"
                      {...register("userName", {
                        required: true,
                        maxLength: 8,
                        pattern: /^[A-Za-z0-9]+$/i,
                      })}
                      className="border w-full mb-3 h-12 rounded-lg pl-4 focus:outline-none"
                    />
                  </div>
                </div>
                <label htmlFor="photo" className="block">
                  Photo Url
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  {...register("photo")}
                  className="border w-full mb-3 h-12 rounded-lg pl-4 focus:outline-none"
                />
                <label htmlFor="Email" className="block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="border w-full mb-3 h-12 rounded-lg pl-4 focus:outline-none"
                />
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="border w-full mb-3 h-12 rounded-lg pl-4 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-[70%] h-14 rounded-lg bg-violet-600 text-white mt-3 text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 mb-10">
              Already have an acount!{" "}
              <Link to="/login" className="text-violet-500">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
