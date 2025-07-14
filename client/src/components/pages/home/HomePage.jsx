import React from "react";
import "./HomePage.style.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-side-bar"></div>
      <div className="center-content">
        <div className="headings">
          <ul>
            <li>Relevant</li>
            <li>Latest</li>
            <li>Top</li>
          </ul>
        </div>
        <div className="content"></div>
      </div>
      <div className="right-side-bar"></div>
    </div>
  );
};

export default HomePage;
