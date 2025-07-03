import MainLayout from "@/layouts/MainLayout";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "books",
        Component: AllBooks,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
    ],
  },
]);

export default router;
