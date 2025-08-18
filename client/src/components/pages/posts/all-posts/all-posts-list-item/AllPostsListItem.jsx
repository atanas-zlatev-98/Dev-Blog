import "./AllPostsListItem.style.scss";
import { NavLink } from "react-router";
import { FaRegComment, FaRegBookmark } from "react-icons/fa6";
import { useAuthor } from "../../../../hooks/useAuthor";
import moment from "moment";

const AllPostsListItem = ({_id,title,author:authorName,createdAt,tags,comments,reactions}) => {
  const {author,isLoading} = useAuthor(authorName.username);

  const formattedDate = moment(createdAt).utc().format("DD/MMMM").split("/").join(" ");


  // if (isLoading || !author) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="mini-post-container">
      <div className="post">
        <div className="author-data">
          <NavLink to={`/creator/${author.username}`} className="author">
            <img className="author-img" src={author.imageUrl} alt={author.username}></img>
            <div className="author-name">
              <h4>{author.username}</h4>
              <p>{formattedDate}</p>
            </div>
          </NavLink>
        </div>
        <div className="post-data">
          <div className="post-title">
            <NavLink to={`/posts/${_id}`}><h2>{title}</h2></NavLink>
          </div>
          <div className="post-tags">
            {tags.map((tag) => (
              <NavLink to={`/tags/${tag}`} key={tag}>#{tag}</NavLink>
            ))}
          </div>
          <div className="post-reactions">
            <div className="reactions">
              <div className="reacts">
                <NavLink to={`/posts/${_id}`}>Reactions: {reactions.length}</NavLink></div>
              {comments.length <= 0 ? (
                <div className="comments">
                  <NavLink to={`/posts/${_id}`}><FaRegComment />Add Comment</NavLink>
                </div>
              ) : (
                <div className="comments">
                 <NavLink to={`/posts/${_id}`}> <FaRegComment /> {comments.length} Comments</NavLink>
                </div>
              )}
            </div>
            <div className="save">
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPostsListItem;
