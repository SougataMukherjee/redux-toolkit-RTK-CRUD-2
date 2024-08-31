import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Students } from "./students.models";
export const studentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getStudents: builder.query<Students[], void>({
      query: () => "/contacts",
      //   providesTags:['Student'],
    }),
    getStudent: builder.query<Students, string>({
      query: (id) => `/contacts/${id}`,
      //   providesTags:['Student'],
    }),
    addStudent: builder.mutation<void, Students>({
      query: (student) => ({
        url: "/contacts",
        method: "POST",
        body: student,
      }),
      //   invalidatesTags:['Student']
    }),
    updateStudent: builder.mutation<void, Students>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
      //   invalidatesTags:['Student']
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        body: id,
      }),
      //   invalidatesTags:['Student']
    }),
  }),
});
export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
