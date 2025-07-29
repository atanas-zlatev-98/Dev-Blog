import React, { useEffect, useState } from "react";
import "./AllPostsListItem.style.scss";
import { NavLink } from "react-router";
import moment from 'moment';

const initialState = {
  username: "",
  profilePicture: "",
};

const AllPostsListItem = ({_id,title,author,createdAt,tags,comments}) => {
  const [postAuthor, setPostAuthor] = useState(initialState);

  const formattedDate = moment(createdAt).utc().format('DD/MMMM');

  return (
    <NavLink to={`/posts/${_id}`} className="mini-post-container">
      <div className="post">
        <div className="author-data">
          <div className="author">
            <img className="author-img" src="https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/130/2024/10/terminator_dark_fate___2019_new_movie_trailer_by_epicheroes_dd7w5hm-fullview-444x444.jpg"></img>
            <div>
              <p>Author</p>
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
              <p>#{tag}</p>
            ))}
          </div>
          <div className="post-reactions">
            <div>{/* TODO REACTIONS */}</div>
            <div>Comments {comments.length}</div>
            <div>Save Post</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default AllPostsListItem;
