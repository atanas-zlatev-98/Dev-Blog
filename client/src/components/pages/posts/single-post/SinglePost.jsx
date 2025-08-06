import "./SinglePost.style.scss";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import { FaRegBookmark } from "react-icons/fa6";
import Author from "./author/Author";
import AuthorPostsList from "./author/authorPostsList/AuthorPostsList";
import PostComments from "./comments/PostComments";
import moment from "moment";
import SinglePostCommentsList from "./comments/SinglePostCommentsList/SinglePostCommentsList";
import { useSinglePost } from "../../../hooks/useSinglePost";
import { useAuthor } from "../../../hooks/useAuthor";

const SinglePost = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const { postId } = useParams();

  const { singlePost, handleComments } = useSinglePost(postId);
  const { author,handleAuthor} = useAuthor(singlePost.author);

  const formattedDate = moment(singlePost.createdAt).utc().format("DD/MMMM").split("/").join(" ");

  return (
    <div className="single-post-container">
      <div className="single-post-reactions"></div>
      <div className="single-post-content">
        <div className="post-header">
          <NavLink to={`/creator/${author.username}`}>
            <div className="author">
              <div className="author-img">
                <img src={author.imageUrl} alt={author.username} />
              </div>
              <div className="author-data">
                <h4>{author.username}</h4>
                <p>Posted on: {formattedDate}</p>
                {/* <p>{formattedDate}</p> */}
              </div>
            </div>
          </NavLink>

          <div className="save">
            <FaRegBookmark />
          </div>
        </div>
        <div className="post-content">
          <h1>{singlePost.title}</h1>
          <img src={singlePost.imageUrl} alt={singlePost.title} />
          <div className="tags-and-reactions">
            <div className="tags">
              {singlePost.tags?.map((tag) => (
                <NavLink to={`/tags/${tag}`} key={tag}>
                  #{tag}
                </NavLink>
              ))}
            </div>
            <div className="reactions">
              <p>Reactions: {singlePost.reactions?.length}</p>
            </div>
          </div>
          <div className="content">
            <p>{singlePost.content}</p>
          </div>

          <div className="post-comments">
            <PostComments
              userInfo={userInfo}
              postId={postId}
              singlePost={singlePost}
              onCommentAdded={handleComments}
            />
            <div className="comments">
              {singlePost.comments?.length <= 0 ? (
                <p className="no-comments">No Comments</p>
              ) : (
                <SinglePostCommentsList comments={singlePost?.comments} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="single-post-author">
        <div className="author-info">
          <Author author={author} onFollowChange={handleAuthor}/>
        </div>

        <div className="author-posts">
          <h3>
            More from{" "}
            <NavLink to={`/creator/${author.username}`}>
              {author.username}
            </NavLink>
          </h3>
          <AuthorPostsList author={author}></AuthorPostsList>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
