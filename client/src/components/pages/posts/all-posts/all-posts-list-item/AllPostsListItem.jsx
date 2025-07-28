import React, { useEffect, useState } from "react";
import "./AllPostsListItem.style.scss";
import { NavLink } from "react-router";

const AllPostsListItem = ({ _id,title, content, imageUrl }) => {
  return (
    <NavLink to={`/posts/${_id}`} className="mini-post-container">
      <div >
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </NavLink>
  );
};

export default AllPostsListItem;
