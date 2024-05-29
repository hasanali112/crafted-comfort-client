import { Star } from "lucide-react";
import chair from "@/assets/chair.webp";

const BestProductCard = () => {
  return (
    <div className="hover:bg-white hover:shadow-md hover:-translate-y-1 duration-500">
      <div className="bg-[#eaebec] relative">
        <img src={chair} alt="" className="w-[330px] h-[360px]" />
        <span className="bg-black rounded-md px-2 py-1 text-white absolute top-3 left-2">
          -13%
        </span>
      </div>
      <div className="space-y-3 mt-4">
        <h1>Tv Cabinet Trolly Simple Length</h1>
        <div className="flex ">
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
        </div>
        <p className="ml-2 font-semibold">$120</p>
      </div>
    </div>
  );
};

export default BestProductCard;
