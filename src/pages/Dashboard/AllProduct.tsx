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

type TProps = {
  title: string;
  image: string;
  category: string;
  price: string;
  _id: string;
};

const AllProduct = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("https://crafted-comfort-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);

  return (
    <div>
      <div className="p-2 lg:w-[90%] mx-auto border bg-white rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
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
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell className="text-right lg:space-x-4 flex justify-end items-center">
                  <TableModal />
                  <button>
                    <Trash2 />
                  </button>
                </TableCell>
                <TableCell className="text-right space-x-4">
                  <Link to="/dashboard/create-donation">
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
