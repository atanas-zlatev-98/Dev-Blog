import { apiSlice } from "./apiSlice";

const USER_URL = '/api/auth';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/login`,
                method:'POST',
                body:data,
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USER_URL}/logout`,
                method:"POST"
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/register`,
                method:'POST',
                body:data,
            })
        }),
        creatorFind:builder.mutation({
            query:(author)=>({
                url:`${USER_URL}/${author}`,
                method:'GET',
                // body:creatorId
            })
        }),
        followAuthor:builder.mutation({
            query:(data)=>({
                url:'/api/author/follow',
                method: 'POST',
                body:data,
            })
        }),
        unfollowAuthor:builder.mutation({
            query:(data)=>({
                url:'/api/author/unfollow',
                method: 'POST',
                body:data,
            })
        })
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useCreatorFindMutation,useFollowAuthorMutation,useUnfollowAuthorMutation} = usersApiSlice;