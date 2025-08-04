import { NavLink } from "react-router";
import './AuthorPostsListItem.style.scss';
import { useSinglePost } from "../../../../../../hooks/useSinglePost";

const AuthorPostsListItem = ({ postId }) => {
  
  const {singlePost} = useSinglePost(postId);
 
  return (
    <NavLink className='mini-post' to={`/posts/${singlePost._id}`}>
      <h4>{singlePost.title}</h4>
      <div className="tags">
        {singlePost.tags?.map(tag => <p key={tag}>#{tag}</p>)}
      </div>
    </NavLink>
  );
};

export default AuthorPostsListItem;
