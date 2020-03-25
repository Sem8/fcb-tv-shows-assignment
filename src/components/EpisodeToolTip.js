import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import axios from "../axios-instance";
import episodetooltip from "./sylefiles/episodetooltip.scss";

const EpisodeToolTip = props => {
  const { image, name, summary } = props;
  //   console.log("episode name inside tool tip: ", name);
  return (
    <>
      <div className="episode-tooltip">
        <img src={image} className="episode-tooltip-img" />

        <div className="tooltip-text">
          <p className="episode-tooltip-name">{name}</p>
          <p className="episode-tooltip-summary">{summary}</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(EpisodeToolTip);
