import React from "react";
// import { noScrollbarsClassName } from 'react-remove-scroll-bar';
import HomeLoader from "./assets/loader.gif";
const Loader = () => {
  return (
    <div className="min-h-screen">
      <img src={HomeLoader} className="h-screen" alt=""></img>
    </div>
  );
};

export default Loader;
