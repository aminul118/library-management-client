import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library.aminuldev.site/api" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
