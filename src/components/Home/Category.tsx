import Container from "../Container/Container";
import sofa from "@/assets/sofa1.png";
import book from "@/assets/book.png";
import table from "@/assets/table.png";

const Category = () => {
  return (
    <div className="mt-[128px]">
      <Container className="grid grid-cols-3 gap-3">
        <div className="w-[440px] h-[440px] bg-white">
          <h1 className="text-center text-xl mt-10">Sofas</h1>
          <p className="text-center text-xl mt-2 font-semibold">
            Combine luxurious comfort
          </p>
          <div>
            <img src={sofa} alt="" className="h-[300px] w-[60%] mx-auto" />
          </div>
        </div>
        <div className="w-[440px] h-[440px] bg-white">
          <h1 className="text-center text-xl mt-10">Bedside tables</h1>
          <p className="text-center text-xl mt-2 font-semibold">
            Crafted from eco-friendly materials
          </p>
          <div>
            <img src={table} alt="" className="h-[300px] w-[60%] mx-auto" />
          </div>
        </div>
        <div className="w-[440px] h-[440px] bg-white">
          <h1 className="text-center text-xl mt-10">Bookcases & Shelving</h1>
          <p className="text-center text-xl mt-2 font-semibold">
            Perfect with stylish design
          </p>
          <div>
            <img src={book} alt="" className="h-[300px] w-[60%] mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
