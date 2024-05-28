/* eslint-disable react-hooks/exhaustive-deps */
import avatar from "@/assets/avatar.png";
import { AuthContext } from "@/providers/AuthProviders";
import { useContext, useEffect, useState } from "react";

type Tdata = {
  _id: string;
  name: string;
  userName: string;
  photo: string;
  email: string;
};

const AddProductSide = () => {
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
    <div className="bg-white h-[400px] w-full rounded-lg col-span-12 lg:col-span-3">
      <div className="flex flex-col justify-center items-center">
        <img
          src={userGet ? userGet.photo : avatar}
          alt=""
          className="w-[30%] rounded-full pt-5"
        />
        <div>
          <h1 className="font-semibold">{userGet?.name}</h1>
          <p className="text-center">{userGet?.userName}</p>
        </div>
      </div>
      <div className=" px-2 pt-5">
        <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
          Eamil: {userGet?.email}
        </h1>
        <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
          Totol Add: 0
        </h1>
        <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
          Totol Contribution: 0
        </h1>
      </div>
    </div>
  );
};

export default AddProductSide;
