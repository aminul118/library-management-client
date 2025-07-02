import Loader from "@/components/ui/Loader";
import { useGetAllBooksQuery } from "@/redux/api/bookApi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FcCollect } from "react-icons/fc";
import { Button } from "@/components/ui/button";

interface ApiResponse<T> {
  data: T;
}
interface IBook {
  _id: string;
  title: string;
  author: string;
  genre?: string;
  isbn?: string;
  copies?: number;
  available?: boolean;
}

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined) as {
    data: ApiResponse<IBook[]>;
    isLoading: boolean;
    isError: boolean;
  };

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-red-500">Failed to load books.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">SI</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Genre</th>
              <th className="border border-gray-300 px-4 py-2">ISBN</th>
              <th className="border border-gray-300 px-4 py-2">Copies</th>
              <th className="border border-gray-300 px-4 py-2">Available</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.genre ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.isbn ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.copies ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {book.available ? (
                    <IoMdCheckmarkCircleOutline className="text-green-500 text-lg mx-auto" />
                  ) : (
                    <FaCircleXmark className="text-red-500 text-lg mx-auto" />
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Button size="icon" className="bg-green-800 text-white">
                      <AiTwotoneEdit />
                    </Button>
                    <Button size="icon" variant="destructive">
                      <MdDelete />
                    </Button>
                    <Button size="icon" className="bg-gray-100">
                      <FcCollect />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
