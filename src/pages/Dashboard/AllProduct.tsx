import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilLine, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableModal from "./TableModal";
import TopNav from "@/components/DashboardComponent/TopNav";
import Swal from "sweetalert2";

export type TProps = {
  title: string;
  image: string;
  category: string;
  price: string;
  _id: string;
  productId: string;
  description: string;
};

const AllProduct = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("https://funiture-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);

  const handleDelete = (_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://funiture-server.vercel.app/delete-product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div>
      <TopNav />
      <div className="p-2 lg:w-[90%] mx-auto border bg-white rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Serial No</TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Action Button</TableHead>
              <TableHead className="text-right">Create Post</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: TProps) => (
              <TableRow>
                <TableCell className="font-medium">{item.productId}</TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell className="text-right lg:space-x-4 flex justify-end items-center">
                  <TableModal item={item} />
                  <button onClick={() => handleDelete(item._id)}>
                    <Trash2 />
                  </button>
                </TableCell>
                <TableCell className="text-right space-x-4">
                  <Link to="/dashboard/create-product">
                    <button>
                      <PencilLine />
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllProduct;
