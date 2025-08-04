import { useEffect, useState } from "react";
import { useCreatorFindMutation } from "../../../../../../redux/slices/userApiSlice";
import "./SinglePostCommentsListItem.style.scss";
import { NavLink } from "react-router";
import moment from "moment";
export const SinglePostCommentsListItem = ({
  authorId,
  comment,
  createdAt,
}) => {
  const [author, setAuthor] = useState({});

  const [findCreator] = useCreatorFindMutation();

  const formattedDate = moment(createdAt)
    .utc()
    .format("DD/MMMM")
    .split("/")
    .join(" ");

  useEffect(() => {
    const findAuthor = async () => {
      try {
        const creator = await findCreator({ creatorId: authorId }).unwrap();
        setAuthor(creator);
      } catch (err) {}
    };
    findAuthor();
  }, []);

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
