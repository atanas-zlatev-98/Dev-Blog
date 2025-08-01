import React, { useEffect, useState } from "react";
import "./AllPostsListItem.style.scss";
import { NavLink } from "react-router";
import moment from "moment";
import { useCreatorFindMutation } from "../../../../../redux/slices/userApiSlice";
import { FaRegComment, FaRegBookmark } from "react-icons/fa6";

const AllPostsListItem = ({_id,title,author,createdAt,tags,comments,reactions}) => {
  
  const [postAuthor, setPostAuthor] = useState({});
  const [creatorFind, { isLoading }] = useCreatorFindMutation();

  const formattedDate = moment(createdAt).utc().format("DD/MMMM").split("/").join(" ");

  useEffect(() => {
    const findAuthor = async () => {
      try {
        const user = await creatorFind({ creatorId: author }).unwrap();
        setPostAuthor(user);
      } catch (err) {
        console.log(err.message);
      }
    };
    findAuthor();
  }, [author]);

  if (isLoading || !postAuthor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mini-post-container">
      <div className="post">
        <div className="author-data">
          <NavLink to={`/creator/${postAuthor.username}`} className="author">
            <img className="author-img" src={postAuthor.imageUrl}></img>
            <div className="author-name">
              <h4>{postAuthor.username}</h4>
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
