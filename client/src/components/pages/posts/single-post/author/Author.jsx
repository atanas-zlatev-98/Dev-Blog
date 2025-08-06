import "./Author.style.scss";
import { NavLink } from "react-router";
import { useFollowAuthorMutation, useUnfollowAuthorMutation } from "../../../../../redux/slices/userApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";

const Author = ({author,onFollowChange}) => {

  const formattedDate = moment(author.createdAt).utc().format("DD/MMMM/YYYY").split("/").join(" ");

  const [followAuthor] = useFollowAuthorMutation();
  const [unfollowAuthor] = useUnfollowAuthorMutation();

  const {userInfo} = useSelector((state)=> state.auth);
  
    const follow = async () =>{
        try{
            const response = await followAuthor({authorId:author._id,userId:userInfo._id}).unwrap();
            onFollowChange(response);
        }catch(err){
          toast.error(err.message);
        }
    }

    const unfollow = async ()=>{
      try{
        const response = await unfollowAuthor({authorId:author._id,userId:userInfo._id}).unwrap();
        onFollowChange(response);
      }catch(err){
        toast.err(err.message);
      }
    }


  return (
    <div className="author-container">
      <div className="header-line"></div>
      <NavLink to={`/creator/${author.username}`}>
        <div className="author-data">
          <img src={author.imageUrl} alt='author image'/>
          <p>{author.username}</p>
          
        </div>
      </NavLink>
      <div className="author-mini-data">
        <p>#followers: {author.followers?.length}</p>
          <p>#posts: {author.posts?.length}</p>
      </div>
      <div className="author-follow">
        {author.followers?.includes(userInfo._id) ? (<NavLink className="follow" onClick={unfollow}>
          <p>Unfollow</p>
        </NavLink>) : (<NavLink className="follow" onClick={follow}>
          <p>Follow</p>
        </NavLink>) }
        
      </div>
      <div className="author-summary">
        <p>{author.summary}</p>
      </div>

      <div className="author-join">
        <p>JOINED</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default Author;
