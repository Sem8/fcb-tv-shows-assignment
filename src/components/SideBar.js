import React from "react";
import sidebar from "./sylefiles/sidebar.scss";

const SideBar = () => {
  return (
    <>
      <div className="homeSideBar">
        <div className="sidebarCircle"></div>
        <div className="sidebarText">
          <h1>TV</h1>
          <h1>SH</h1>
          <h1>OW</h1>
        </div>

        <div className="orangeBar"></div>
      </div>
    </>
  );
};

export default SideBar;
