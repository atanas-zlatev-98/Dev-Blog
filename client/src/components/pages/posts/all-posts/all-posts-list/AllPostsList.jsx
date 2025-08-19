import React, { useEffect, useState } from "react";
import { useGetAllPostsMutation } from "../../../../../redux/slices/postsApiSlice";
import { toast } from "react-toastify";
import AllPostsListItem from "../all-posts-list-item/AllPostsListItem";
import './AllPostsLists.style.scss';
import SkeletonCard from "../../../../skeleton/card/SkeletonCard";

const AllPostsList = () => {
  const [allPosts, setAllPosts] = useState([]);

  const [getAllPosts,{isLoading}] = useGetAllPostsMutation();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await getAllPosts().unwrap();
        setAllPosts(posts);
      } catch (err) {
        toast.err(err.message);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="posts-container">
      {isLoading ? ([...Array(5)].map((_,i)=><SkeletonCard key={i}/>)) :( allPosts.map((post) => (
        <AllPostsListItem key={post._id} {...post} />
      )))}
      
    </div>
  );
};

export default AllPostsList;
