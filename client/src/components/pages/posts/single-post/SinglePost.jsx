import React, { useEffect, useState } from "react";
import "./SinglePost.style.scss";
import { useParams } from "react-router";
import { useGetSinglePostMutation } from "../../../../redux/slices/postsApiSlice";
import { useCreatorFindMutation } from "../../../../redux/slices/userApiSlice";
import { toast } from "react-toastify";

const SinglePost = () => {
  const [singlePost,setSinglePost]=useState({});
  const [postAuthor,setPostAuthor]=useState({});

  const { postId } = useParams();
  const [getSinglePost] = useGetSinglePostMutation();
  const [creatorFind] = useCreatorFindMutation();

  useEffect(()=>{
    const findPost = async()=>{
        try{
            const post = await getSinglePost(postId).unwrap();
            setSinglePost(post);

            if(post?.author){
                const author = await creatorFind({creatorId: post.author}).unwrap();
                setPostAuthor(author);
            }
        }catch(err){
            toast.error(err.message);
        }
    }

    findPost();
  },[postId]);

  return (
    <div className="single-post-container">
        <div className="single-post-reactions"></div>
        <div className="single-post-content">
            {singlePost.title},{postAuthor.username}
        </div>
        <div className="single-post-author"></div>
    </div>  
  )
};

export default SinglePost;
