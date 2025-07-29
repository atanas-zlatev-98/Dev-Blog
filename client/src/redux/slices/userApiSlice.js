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
            query:(creatorId)=>({
                url:`${USER_URL}/creator`,
                method:'POST',
                body:creatorId
            })
        })
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useCreatorFindMutation} = usersApiSlice;