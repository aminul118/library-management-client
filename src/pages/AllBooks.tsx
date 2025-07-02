import { useGetAllBooksQuery } from "@/redux/api/bookApi";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  console.log({ data, isLoading, isError });
  return <div></div>;
};

export default AllBooks;
