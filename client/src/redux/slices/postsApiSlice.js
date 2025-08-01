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
        }),
        getAllPosts:builder.mutation({
            query:()=>({
                url:`${POST_URL}`,
                method:'GET',
            }),
            invalidatesTags:['Post']
        }),
        getSinglePost:builder.mutation({
            query:(postId)=>({
                url:`${POST_URL}/${postId}`,
                method:'GET',
            }),
            invalidatesTags:['Post']
        })
    })
})

export const {useCreatePostMutation,useGetAllPostsMutation,useGetSinglePostMutation} = postsApiSlice;