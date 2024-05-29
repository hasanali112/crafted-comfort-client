import { useEffect, useState } from "react";
import Container from "../Container/Container";
import BestProductCard from "./BestProductCard";
import { TProps } from "@/pages/Dashboard/AllProduct";

const OurBestProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://funiture-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-[#ffffff] pt-10 pb-10 mt-16">
      <h1 className="text-4xl font-semibold text-center">Our Best Product</h1>
      <p className="text-center mt-2">
        Experience unparalleled performance, elegant design, and the peace of
        mind{" "}
      </p>
      <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
        {products?.slice(0, 8)?.map((product: TProps) => (
          <BestProductCard key={product._id} product={product} />
        ))}
      </Container>
    </div>
  );
};

export default OurBestProduct;
