import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetSinglePostMutation } from "../../../../../../../redux/slices/postsApiSlice";
import { NavLink } from "react-router";
import './AuthorPostsListItem.style.scss';

const AuthorPostsListItem = ({ postId }) => {
  
  const [getPost, setGetPost] = useState({});
  const [getSinglePost] = useGetSinglePostMutation();

  useEffect(() => {
    const findPost = async () => {
      try {
        const postResponse = await getSinglePost(postId).unwrap();
        setGetPost(postResponse);
      } catch (err) {
        toast.error(err.message);
      }
    };

    findPost();
  }, []);
  return (
    <NavLink className='mini-post' to={`/posts/${getPost._id}`}>
      <h4>{getPost.title}</h4>
      <div className="tags">
        {getPost.tags?.map(tag => <p key={tag}>#{tag}</p>)}
      </div>
    </NavLink>
  );
};

export default AuthorPostsListItem;
