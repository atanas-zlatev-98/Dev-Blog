import { apiSlice } from "./apiSlice";

const TAGS_URL = '/api/tags';

export const tagsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getSingleTag:builder.query({
            query:(tag)=>`${TAGS_URL}/${tag}`,
            invalidatesTags:['Tags']
        })
    })
})

export const {useGetSingleTagQuery} = tagsApiSlice