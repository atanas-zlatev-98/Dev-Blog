import React, { useEffect, useState } from "react";
import "./SinglePost.style.scss";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import { useGetSinglePostMutation } from "../../../../redux/slices/postsApiSlice";
import { useCreatorFindMutation } from "../../../../redux/slices/userApiSlice";
import { toast } from "react-toastify";
import { FaRegBookmark } from "react-icons/fa6";
import Author from "./author/Author";
import AuthorPostsList from "./author/authorPostsList/AuthorPostsList";
import PostComments from "./comments/PostComments";
import moment from "moment";
import SinglePostCommentsList from "./comments/SinglePostCommentsList/SinglePostCommentsList";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const { userInfo } = useSelector((state) => state.auth);

  const { postId } = useParams();
  const [getSinglePost] = useGetSinglePostMutation();
  const [creatorFind] = useCreatorFindMutation();

  const handleComments = (newPostData) => {
    setSinglePost((oldState) => ({
      ...oldState,
        ...newPostData,
    comments: [
      ...(newPostData.comments || oldState.comments || [])
    ]
    }));
  };

  useEffect(() => {
    const findPost = async () => {
      try {
        const post = await getSinglePost(postId).unwrap();
        setSinglePost(post);

        if (post?.author) {
          const author = await creatorFind({ creatorId: post.author }).unwrap();
          setPostAuthor(author);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };

    findPost();
  }, [postId]);

  const formattedDate = moment(singlePost.createdAt)
    .utc()
    .format("DD/MMMM")
    .split("/")
    .join(" ");

  return (
    <div className="single-post-container">
      <div className="single-post-reactions"></div>
      <div className="single-post-content">
        <div className="post-header">
          <NavLink to={`/creator/${postAuthor.username}`}>
            <div className="author">
              <div className="author-img">
                <img src={postAuthor.imageUrl} alt={postAuthor.username}></img>
              </div>
              <div className="author-data">
                <h4>{postAuthor.username}</h4>
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
          <img src={singlePost.imageUrl} alt={singlePost.title}></img>
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
              {singlePost.comments?.length <=0 ? <p className="no-comments">No Comments</p> : <SinglePostCommentsList comments={singlePost?.comments}/>}
            </div>
          </div>
        </div>
      </div>
      <div className="single-post-author">
        <div className="author-info">
          <Author {...postAuthor} />
        </div>

        <div className="author-posts">
          <h3>
            More from{" "}
            <NavLink to={`/creator/${postAuthor.username}`}>
              {postAuthor.username}
            </NavLink>
          </h3>
          <AuthorPostsList creator={postAuthor}></AuthorPostsList>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
