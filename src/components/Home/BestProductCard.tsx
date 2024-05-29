import { Star } from "lucide-react";
import { TProps } from "@/pages/Dashboard/AllProduct";

const BestProductCard = ({ product }: { product: TProps }) => {
  return (
    <div className="hover:bg-white hover:shadow-md hover:-translate-y-1 duration-500">
      <div className="bg-[#eaebec] relative">
        <img src={product.image} alt="" className="w-[330px] h-[360px]" />
        <span className="bg-black rounded-md px-2 py-1 text-white absolute top-3 left-2">
          -13%
        </span>
      </div>
      <div className="space-y-3 mt-4">
        <h1>{product.title}</h1>
        <div className="flex ">
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
          <Star className="text-[#339999] fill-[#339999] h-4" />
        </div>
        <p className="ml-2 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default BestProductCard;
