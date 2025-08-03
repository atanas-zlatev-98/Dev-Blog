import React, { useEffect, useState } from "react";
import { useCommentPostMutation } from "../../../../../redux/slices/postsApiSlice";
import { useNavigate } from "react-router";

const initialState = {
  authorId: "",
  comment: "",
};

const PostComments = ({ userInfo, postId, singlePost, onCommentAdded }) => {

  const [userComment, setUserComment] = useState(initialState);
  const [commentPost] = useCommentPostMutation();

  const changeHandler = async (e) => {
    setUserComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      authorId: userInfo._id,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const result = await commentPost({
        postId,
        userComment: {
          authorId: userComment.authorId,
          comment: userComment.comment,
        },
      }).unwrap();
      onCommentAdded(result);
      setUserComment(initialState);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h2>Comments: {`(${singlePost.comments?.length})`}</h2>
      {userInfo ? (<div className="comment">
        <img className="current-user" src={userInfo.profilePictureUrl}></img>
        <form onSubmit={submitHandler}>
          <textarea
            name="comment"
            value={userComment.comment}
            onChange={changeHandler}
            placeholder="Comment..."
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>) :(<p>Please login to post comments!</p>)}
    
    </>
  );
};

export default PostComments;
