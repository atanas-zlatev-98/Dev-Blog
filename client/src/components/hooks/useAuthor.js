import { useEffect, useState } from "react"
import { useCreatorFindMutation } from "../../redux/slices/userApiSlice";
import { toast } from "react-toastify";


export const useAuthor = (authorName) =>{
    // console.log(authorName)
    const [author,setAuthor] = useState({});
    const [getAuthor,{isLoading}] = useCreatorFindMutation();

     const handleAuthor = (authorData) => {
        setAuthor((oldState) => ({
      ...oldState,
      ...authorData,
    }));
  };

    useEffect(()=>{
        const findAuthor = async()=>{
            try{
                const response = await getAuthor(authorName).unwrap();
                setAuthor(response);
            }catch(err){
                toast.error(err.message || 'Failed to load author data!');
            }
        }
        if(authorName){
            findAuthor();
        }
    },[authorName]);
    
    return {author,isLoading,handleAuthor};
}