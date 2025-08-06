import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { onlyLettersAllowed } from "../pages/posts/create-post/regex.js";
import { useCreatePostMutation } from "../../redux/slices/postsApiSlice.js";

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
  tags: "",
  published: false,
};

export const useCreatePost = () => {

  const [formValues, setFormValues] = useState(initialValues);
  const [createPost] = useCreatePostMutation();

  const navigate = useNavigate();
 
  const changeHandler = (e) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { title, content, imageUrl, tags } = formValues;

    if (!title || !content || !imageUrl || !tags) {
      return toast.error("All Fields are required!");
    }

    const postTags = tags.trim().split(" ");
    const isValidTags = postTags.every((tag) => onlyLettersAllowed.test(tag));

    if (!isValidTags) {
      return toast.error(
        "Tags must not contain special characters/numbers or spaces!"
      );
    }

    if (postTags.length > 5) {
      return toast.error("You can only use up to 5 tags.");
    }

    try {

      const post = await createPost({ ...formValues, tags: postTags }).unwrap();
      
      if (post) {
        toast.success("Post created successfully!");
        navigate(`/posts/${post._id}`);
      }

    } catch (err) {
      toast.error(err.message || "Failed to create post");
    }

  };

  return { formValues, changeHandler, submitHandler };
  
};
