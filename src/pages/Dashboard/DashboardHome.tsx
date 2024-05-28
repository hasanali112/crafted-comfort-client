/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import TopNav from "@/components/DashboardComponent/TopNav";
import dash from "@/assets/dash.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProviders";

type Tdata = {
  _id: string;
  name: string;
  userName: string;
  photo: string;
  email: string;
};

const DashboardHome = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProviders");
  }

  const { user } = authContext;
  const [userGet, setUserGet] = useState<Tdata | null>(null);

  useEffect(() => {
    fetch(`https://crafted-comfort-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserGet(data));
  }, []);

  return (
    <div className="bg-[#e5e8ec] h-screen">
      <TopNav />
      <div className="h-[200px]">
        <img src={dash} alt="" className="h-[150px] w-full object-cover" />
      </div>
      <div className="w-[50%] mx-auto -translate-y-32">
        <div className="bg-white h-[550px] w-full rounded-lg col-span-12 lg:col-span-3">
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={userGet?.photo}
              alt=""
              className="w-[200px] rounded-full"
            />
            <div>
              <h1>{userGet?.name}</h1>
              <p className="text-center">{userGet?.userName}</p>
            </div>
          </div>
          <div className=" p-5">
            <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
              Email: {userGet?.email}
            </h1>
            <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
              Totol Add: 0
            </h1>
            <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
              Totol Contribution: 0
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
