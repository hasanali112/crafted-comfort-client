import Container from "../Container/Container";
import BestProductCard from "./BestProductCard";

const OurBestProduct = () => {
  return (
    <div className="bg-[#ffffff] pt-10 pb-10 mt-16">
      <h1 className="text-4xl font-semibold text-center">Our Best Product</h1>
      <p className="text-center mt-2">
        Experience unparalleled performance, elegant design, and the peace of
        mind{" "}
      </p>
      <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
      </Container>
    </div>
  );
};

export default OurBestProduct;
