import {useGetSingleTagQuery} from '../../redux/slices/tagsApiSlice';

export const useTag = (tag) => {

const {data} = useGetSingleTagQuery(tag)

  return { tags:data?.tag || null};
};
