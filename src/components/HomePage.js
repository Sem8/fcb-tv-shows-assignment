import React from "react";
import { withRouter } from "react-router";
import AutoCompleteSearch from "./AutoCompleteSearch";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <>
      <header style={headerStyle}>
        <div className="homeHeader">
          Home | <span style={spanStyle}>SEARCH TV SHOW</span>
        </div>
      </header>

      <div style={bodyComponentStyle}>
        <div className="container">
          <AutoCompleteSearch />
        </div>

        <SideBar />
      </div>
    </>
  );
};

const headerStyle = {
  background: "#DCDCDC",
  color: "#696969",
  padding: "2rem",
  width: "100%",
  fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
  fontWeight: "bold",
  fontSize: "1.4rem"
};

const spanStyle = {
  color: "#A9A9A9",
  fontWeight: "normal"
};

const bodyComponentStyle = {
  display: "flex",
  justifyContent: "space-between"
};

export default withRouter(HomePage);
