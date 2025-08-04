import { useEffect, useState } from "react";
import { useGetSinglePostMutation } from "../../redux/slices/postsApiSlice";
import { toast } from "react-toastify";

export const useSinglePost = (postId) => {
  const [singlePost, setSinglePost] = useState({});
  const [getSinglePost] = useGetSinglePostMutation();

  useEffect(() => {
    const findPost = async () => {
      try {
        const post = await getSinglePost(postId).unwrap();
        setSinglePost(post);
      } catch (err) {
        toast.error(err.message || "Failed to load post!");
      }
    };

    if (postId) {
      findPost();
    }
  }, [postId]);

  const handleComments = (postData) => {
    setSinglePost((oldState) => ({
      ...oldState,
      ...postData,
      comments: [...(postData.comments || oldState.comments || [])],
    }));
  };

  return { singlePost, handleComments };
};
