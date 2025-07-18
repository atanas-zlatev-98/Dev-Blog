import { apiSlice } from "./apiSlice";

const POST_URL = '/api/posts';

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createPost:builder.mutation({
            query:(data)=>({
                url:`${POST_URL}/create-post`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['Post']
        })
    })
})

export const {useCreatePostMutation} = postsApiSlice;