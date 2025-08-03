import React from "react";
import "./Author.style.scss";
import { NavLink } from "react-router";
import moment from "moment";
const Author = ({ ...author }) => {

  const formattedDate = moment(author.createdAt)
    .utc()
    .format("DD/MMMM/YYYY")
    .split("/")
    .join(" ");

  return (
    <div className="author-container">
      <div className="header-line"></div>
      <NavLink to={`/creator/${author.username}`}>
        <div className="author-data">
          <img src={author.imageUrl} alt={author.username}></img>
          <p>{author.username}</p>
          
        </div>
      </NavLink>
      <div className="author-mini-data">
        <p>#followers: TODO</p>
          <p>#posts: {author.posts?.length}</p>
      </div>
      <div className="author-follow">
        <NavLink className="follow" to={``}>
          <p>Follow</p>
        </NavLink>
      </div>
      <div className="author-summary">
        <p>Summary: TODO</p>
      </div>

      <div className="author-join">
        <p>JOINED</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default Author;
