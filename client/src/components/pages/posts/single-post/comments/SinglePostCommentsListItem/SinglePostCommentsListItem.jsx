import "./SinglePostCommentsListItem.style.scss";
import { NavLink } from "react-router";
import { useAuthor } from "../../../../../hooks/useAuthor";
import moment from "moment";

export const SinglePostCommentsListItem = ({authorId,comment,createdAt}) => {

  const {author} = useAuthor(authorId);
  const formattedDate = moment(createdAt).utc().format("DD/MMMM").split("/").join(" ");

  return (
    <div className="comments-container">
      <div className="author">
        <NavLink to={`/creator/${author.username}`}>
          <img src={author.imageUrl} alt={author.username}/>
        </NavLink>
      </div>
      <div className="comment-content">
        <div className="comment-header">
          <NavLink to={`/creator/${author.username}`}>
            {author.username}
          </NavLink>
          <p>commented on {formattedDate}</p>
        </div>
        <div className="comment">{comment}</div>
      </div>
    </div>
  );
};
