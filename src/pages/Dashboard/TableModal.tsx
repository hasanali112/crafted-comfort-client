import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquarePen } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TProps } from "./AllProduct";
import Swal from "sweetalert2";

type Inputs = {
  title: string;
  image: string;
  category: string;
  price: string;
  description: string;
};

const TableModal = ({ item }: { item: TProps }) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const productData = {
      title: data.title,
      image: data.image,
      category: data.category,
      price: data.price,
      decription: data.description,
    };
    fetch(`https://funiture-server.vercel.app/product/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Updated!",
          text: "You product updated successfully!",
          icon: "success",
        });
      });
    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <SquarePen className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit prduct</DialogTitle>
            <DialogDescription>
              Make changes to your product here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-5 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  {...register("title")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <Input
                  id="image"
                  {...register("image")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  {...register("category")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  {...register("price")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  {...register("description")}
                  className="col-span-3"
                />
              </div>
              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button type="submit">Save changes</Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableModal;
