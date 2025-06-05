
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskifyApi = createApi({
  reducerPath: 'taskifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => `tasks`,
    }),
  }),
})

export const { useGetTasksQuery } = taskifyApi