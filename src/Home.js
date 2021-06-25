import "./style/MyStyle.css";
import React, { useState, useEffect } from "react";
import HomeVid from "./assets/home.gif";
import HomeVid2 from "./assets/home2.gif";
import {Link} from 'react-router-dom';
const Home = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(false);
    }, 7000);
  }, []);
  return (
    <div>
      <div className={isDisplay ? "show" : "hide"}>
        <img src={HomeVid} className={"homeimage"} alt=''></img>
      </div>

      <div className={isDisplay ? "hide" : "show"}>
        <img src={HomeVid2} className={"homeimage"} alt=''></img>
      </div>
      <Link to="/events">
      	<div className={isDisplay ?'homepage-button-appear':'homepage-button' }>
      	  <h1 style={{fontSize:'1rem',}}>Dig In</h1>
      	</div>
      </Link>
    </div>
  );
};

export default Home;
