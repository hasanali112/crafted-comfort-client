import Container from "../Container/Container";
import { Button } from "../ui/button";

const TopProduct = () => {
  return (
    <div className="bg-[#ffffff] pt-10 pb-10 mt-10">
      <Container>
        <h1 className="text-4xl font-semibold text-center">
          FEATURED PRODUCTS
        </h1>
        <p className="text-center mt-2">
          Our products are crafted for universal appeal and are environmentally
          conscious.
        </p>
        <div className="grid grid-cols-12 gap-4 mt-6">
          <div className="col-span-4 relative inline-block overflow-hidden group">
            <img
              src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?w=996&t=st=1716727302~exp=1716727902~hmac=f5edc54a812a48e67c2659c3085c07820d9a392a60530e060f10273b807e3e68"
              alt=""
              className="rounded-lg object-top h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-5 w-full">
              <Button className="bg-white text-black w-[35%] rounded-xl group-hover:bg-rose-600 group-hover:text-white">
                Sofas
              </Button>
            </div>
          </div>
          <div className="col-span-4 relative overflow-hidden group">
            <img
              src="https://img.freepik.com/free-psd/3d-rendering-night-table-still-life-background_23-2150734363.jpg?w=996&t=st=1716726447~exp=1716727047~hmac=3321f8b7ad50984fe635f31733d97d713d2349e6162114d5f0396bbbf0e6770d"
              alt=""
              className="rounded-lg h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-5 w-full">
              <Button className="bg-white text-black w-[35%] rounded-xl group-hover:bg-rose-600 group-hover:text-white">
                Lamp
              </Button>
            </div>
          </div>
          <div className="col-span-4 relative overflow-hidden group">
            <img
              src="https://img.freepik.com/free-psd/3d-rendering-night-table-still-life-background_23-2150734365.jpg?w=996&t=st=1716726464~exp=1716727064~hmac=6136fbb973e8c11d7f7071342b4d0ea81f0a67d41bd09a779826ab2a9887918a"
              alt=""
              className="rounded-lg h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="w-full absolute bottom-2 left-5">
              <Button className="bg-white text-black w-[35%] rounded-xl group-hover:bg-rose-600 group-hover:text-white">
                Decoration
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopProduct;
