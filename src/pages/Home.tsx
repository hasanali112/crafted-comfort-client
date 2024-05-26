import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";
import OurBestProduct from "@/components/Home/OurBestProduct";
import TopProduct from "@/components/Home/TopProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProduct />
      <OurBestProduct />
      <Category />
    </div>
  );
};

export default Home;
