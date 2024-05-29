import Container from "@/components/Container/Container";
import BestProductCard from "@/components/Home/BestProductCard";
import { useEffect, useState } from "react";
import { TProps } from "./Dashboard/AllProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://funiture-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container className="bg-white pt-10 px-10">
        <div className="grid grid-cols-4 gap-4">
          {products?.map((product: TProps) => (
            <BestProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
