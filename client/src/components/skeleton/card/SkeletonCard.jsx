// import Skeleton from "../skeleton";
import "../Skeleton.style.scss";

const SkeletonCard = () => {
  return (
   <div className="mini-post-container">
      <div className="post">
        <div className="author-data">
            <img className="author-img skeleton"></img>
            <div className="author-name">
              <h4 className="skeleton skeleton-text__body"></h4>
              <p className="skeleton skeleton-text__body"></p>
            </div>
          
        </div>
        <div className="post-data">
          <div className="post-title skeleton-text skeleton">

          </div>
          <div className="post-tags skeleton-text skeleton">
           
          </div>
          <div className="post-reactions">
            <div className="reactions skeleton-footer skeleton">
              <div className="reacts">
                <div className="comments">
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkeletonCard;
