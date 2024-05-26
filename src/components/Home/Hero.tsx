import banner from "@/assets/banner.png";
import banner1 from "@/assets/banner3.png";
import banner2 from "@/assets/banner4.png";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <div className="bg-[#ffffff] pt-10 pb-10">
      <Container className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <img src={banner} alt="banner" className="rounded-lg" />
        </div>
        <div className="col-span-4 space-y-3">
          <img src={banner2} alt="banner2" className="rounded-lg h-[49%]" />
          <img src={banner1} alt="banner1" className="rounded-lg h-[48%]" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
