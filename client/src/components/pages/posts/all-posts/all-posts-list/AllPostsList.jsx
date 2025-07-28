import React, { useEffect, useState } from "react";
import { useGetAllPostsMutation } from "../../../../../redux/slices/postsApiSlice";
import { toast } from "react-toastify";
import AllPostsListItem from "../all-posts-list-item/AllPostsListItem";
import './AllPostsLists.style.scss';

const AllPostsList = () => {
  const [allPosts, setAllPosts] = useState([]);

  const [getAllPosts] = useGetAllPostsMutation();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await getAllPosts().unwrap();
        setAllPosts(response.posts);
      } catch (err) {
        toast.err(err.message);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="posts-container">
      {allPosts.map((post) => (
        <AllPostsListItem key={post._id} {...post} />
      ))}
    </div>
  );
};

export default AllPostsList;
