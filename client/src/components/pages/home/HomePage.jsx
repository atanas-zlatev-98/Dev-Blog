import React, { useState } from "react";
import "./HomePage.style.scss";
import AllPostsList from "../posts/all-posts/all-posts-list/AllPostsList";

const HomePage = () => {
  const [activeLink,setActiveLink] = useState('Relevant');

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
        <div className="content">
          {activeLink == 'Relevant' ? <AllPostsList/> : null}
        </div>
      </div>
      <div className="right-side-bar"></div>
    </div>
  );
};

export default HomePage;
