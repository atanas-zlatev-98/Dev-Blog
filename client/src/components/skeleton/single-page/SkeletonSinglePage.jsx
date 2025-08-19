import React from "react";
import "../Skeleton.style.scss";

const SkeletonSinglePage = () => {
  return (
    <div className="single-post-container">
      <div className="single-post-reactions"></div>
      <div className="single-post-content">
        <div className="post-header">
          <div className="author skeleton-author skeleton"></div>
        </div>
        <div className="post-content">
          <div className="skeleton-title skeleton"></div>
          <div className="skeleton-big-image skeleton"></div>
          <div className="tags-and-reactions">
            <div className="tags">
              <div className="skeleton-tags skeleton"></div>
              <div className="skeleton-tags skeleton"></div>
              <div className="skeleton-tags skeleton"></div>
            </div>
            <div className="reactions"></div>
          </div>
          <div className="content">
            <div className="text-for-skeleton">
              <div className="skeleton-content skeleton"></div>
              <div className="skeleton-content skeleton"></div>
              <div className="skeleton-content skeleton"></div>
              <div className="skeleton-content skeleton"></div>
              <div className="skeleton-content skeleton"></div>
              <div className="skeleton-content-bottom skeleton"></div>
            </div>
          </div>

          <div className="post-comments">
            <div className="comments skeleton-comments skeleton"></div>
            <div className="comments skeleton-comments-list skeleton"></div>
            <div className="comments skeleton-comments-list skeleton"></div>
            
          </div>
        </div>
      </div>

      <div className="single-post-author">
        <div className="author-info">
          <div className="author-container">
            <div className="header-line-skeleton"></div>
            <div className="author-data">
              <div className="skeleton-round-img skeleton"></div>
              {/* <div className="skeleton-title skeleton"></div> */}
            </div>
            <div className="author-mini-data">
              <div className="skeleton-tags skeleton"></div>
              <div className="skeleton-tags skeleton"></div>
            </div>
            <div className="author-follow">
              <div className="skeleton-follow skeleton"></div>
            </div>
            <div className="author-summary">
              <div className="skeleton-summary skeleton"></div>
            </div>
          </div>
        </div>

        <div className="author-posts">
          <div className="sk-author">
            <div className="skeleton-title skeleton"></div>
          </div>
          <div className="posts-for-skeleton">
            <div className="skeleton-more-posts skeleton"></div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSinglePage;
