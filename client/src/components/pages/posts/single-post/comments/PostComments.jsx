import {useState } from "react";
import { useCommentPostMutation } from "../../../../../redux/slices/postsApiSlice";

const initialState = {
  author: "",
  comment: "",
};

const PostComments = ({ userInfo, postId, singlePost, onCommentAdded }) => {

  const [userComment, setUserComment] = useState(initialState);
  const [commentPost] = useCommentPostMutation();

  const changeHandler = async (e) => {
    setUserComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      author: userInfo.username,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const result = await commentPost({postId,userComment: {author: userComment.author,comment: userComment.comment}}).unwrap();
      
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
        <img className="current-user" src={userInfo.profilePictureUrl} alt={userInfo.username}/>
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
