import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useCreatePostMutation } from "../../../../redux/slices/postsApiSlice";
import "./CreatePost.style.scss";
import { onlyLettersAllowed } from "./regex.js";

const initialValues = {
  title: "",
  content: "",
  imageUrl: "",
  tags: "",
  published:false,
};

const CreatePost = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const [createNewPost] = useCreatePostMutation();

  const changeHandler = async (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formValues.imageUrl) {
      return toast.error("Post Image is required!");
    }
    if (!formValues.title) {
      return toast.error("Post Title is required!");
    }
    if (!formValues.tags) {
      return toast.error("Post Tags are required!");
    }
    if (!formValues.content) {
      return toast.error("Post Content is required!");
    }

    const tags = formValues.tags.trim().split(" ");

    const matches = tags.every(tag => onlyLettersAllowed.test(tag))

    if(!matches){
      return toast.error('Tags must not contain special characters/numbers or empty spaces, and not exceed 5!')
    }

    if(tags.length > 5){
      return toast.error('Must not have more than 5 tags!')
    }

    try {
      const result = await createNewPost({ ...formValues, tags });
      // console.log(result)
      if (result) {
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="main-create">
      <div className="form-container">
        <h1>Create Post.</h1>
        <form className="create-form" onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Header Image"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={changeHandler}
            />{" "}
            {/* TODO add from computer */}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Post Title"
              name="title"
              value={formValues.title}
              onChange={changeHandler}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tags"
              name="tags"
              value={formValues.tags}
              onChange={changeHandler}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              className="text-area-content"
              type="text"
              rows={10}
              placeholder="Content"
              name="content"
              value={formValues.content}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div className="btn-container">
            <button type="submit">Create Post</button>
            {/* <button type="submit">Save as Draft</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
