import React from "react";
import { SinglePostCommentsListItem } from "../SinglePostCommentsListItem/SinglePostCommentsListItem";
import "./SinglePostCommentsList.style.scss";

const SinglePostCommentsList = ({ comments }) => {
  return (
    <div className="comments">
      {comments?.map((comment) => (
        <SinglePostCommentsListItem
          key={comment._id}
          {...comment}
        ></SinglePostCommentsListItem>
      ))}
    </div>
  );
};

export default SinglePostCommentsList;
