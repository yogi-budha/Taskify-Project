
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskifyApi = createApi({
  reducerPath: 'taskifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => `tasks`,
      providesTags:['tasks']
    }),
    getOneTask: build.query({
      query: () => `task`,
      providesTags:['task']
    }),
    createTask: build.mutation({
      query: (data) =>({
         url: `tasks`,
        method: 'post',
        body: data
      }),
      invalidatesTags: ["tasks"]
    }),
    deleteTask: build.mutation({
      query: (id) =>({
         url: `task/${id}`,
        method: 'delete'
      }),
      invalidatesTags: ["tasks"]
    }),
    updateTask: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `task/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ["tasks"],
    }),
  }),
  
})

export const { useGetTasksQuery,useCreateTaskMutation,useDeleteTaskMutation,useUpdateTaskMutation,useGetOneTaskQuery } = taskifyApi