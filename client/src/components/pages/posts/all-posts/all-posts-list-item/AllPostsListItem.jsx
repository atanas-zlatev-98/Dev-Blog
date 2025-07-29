import React, { useEffect, useState } from "react";
import "./AllPostsListItem.style.scss";
import { NavLink } from "react-router";
import moment from "moment";
import { useCreatorFindMutation } from "../../../../../redux/slices/userApiSlice";

const AllPostsListItem = ({_id,title,author,createdAt,tags,comments,reactions}) => {

  const [postAuthor, setPostAuthor] = useState({});
  const [creatorFind, { isLoading }] = useCreatorFindMutation();

  const formattedDate = moment(createdAt).utc().format("DD/MMMM");

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

  if(isLoading || !postAuthor){
    return <p>Loading...</p>
  }

  return (
    <NavLink to={`/posts/${_id}`} className="mini-post-container">
      <div className="post">
        <div className="author-data">
          <div className="author">
            <img
              className="author-img"
              src={postAuthor.imageUrl}
            ></img>
            <div>
              <p>{postAuthor.username}</p>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
        <div className="post-data">
          <div className="post-title">
            <h2>{title}</h2>
          </div>
          <div className="post-tags">
            {tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
          <div className="post-reactions">
            <div>Reactions: {reactions.length}</div>
            <div>Comments {comments.length}</div>
            <div>Save Post</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default AllPostsListItem;
