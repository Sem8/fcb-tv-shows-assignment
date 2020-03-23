import React from "react";
import { withRouter } from 'react-router';
import AutoCompleteSearch from "./AutoCompleteSearch";

const HomePage = () => {
  return (
    <>
      <div className="homeHeader">Home | SEARCH TV SHOW</div>

      <div className="homeSideBar">
        <p>TV</p>
        <p>SH</p>
        <p>OW</p>
      </div>
      <div className="container">
        <AutoCompleteSearch />
      </div>
    </>
  );
};

export default withRouter(HomePage);
