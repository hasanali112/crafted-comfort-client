import { useForm, SubmitHandler } from "react-hook-form";
import dash from "@/assets/dash.jpg";
import AddProductSide from "@/components/DashboardComponent/AddProductSide";
import TopNav from "@/components/DashboardComponent/TopNav";

type Inputs = {
  title: string;
  image: string;
  category: string;
  price: string;
  description: string;
};

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const productData = {
      title: data.title,
      image: data.image,
      category: data.category,
      price: data.price,
      decription: data.description,
    };
    fetch("https://crafted-comfort-server.vercel.app/create-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    reset();
  };
  return (
    <div className="h-screen">
      <TopNav />
      <div className="bg-gray-100">
        <div className="h-[200px]">
          <img src={dash} alt="" className="h-[150px] w-full object-cover" />
        </div>
        <div className="grid grid-cols-12 gap-4 ml-3 p-2 lg:ml-16 -translate-y-24">
          <AddProductSide />
          <div className="bg-white h-[400px] w-full rounded-lg col-span-12 lg:col-span-7">
            <div className="border-b h-[50px] "></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-col-12 gap-3 p-3">
                <div className="  col-span-12 p-2">
                  <label htmlFor="title" className="block text-lg">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("title")}
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12   lg:col-span-6 p-2">
                  <label htmlFor="image" className="block text-lg">
                    Image
                  </label>
                  <input
                    type="text"
                    {...register("image")}
                    id="image"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12   lg:col-span-6 p-2">
                  <label htmlFor="category" className="block text-lg">
                    Category
                  </label>
                  <input
                    type="text"
                    {...register("category")}
                    id="category"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12 lg:col-span-6 p-2">
                  <label htmlFor="price" className="block text-lg">
                    Price
                  </label>
                  <input
                    type="text"
                    {...register("price")}
                    id="price"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="   col-span-12 lg:col-span-6 p-2">
                  <label htmlFor="description" className="block text-lg">
                    Description
                  </label>
                  <input
                    type="text"
                    {...register("description")}
                    id="description"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="   col-span-12 lg:col-span-6 p-2">
                  <button
                    className="bg-purple-500 p-2 rounded-lg text-white text-xl font-base"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
