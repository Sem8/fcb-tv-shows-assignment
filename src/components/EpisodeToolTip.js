import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import axios from "../axios-instance";
import episodetooltip from "./sylefiles/episodetooltip.scss";

const EpisodeToolTip = props => {
  const { image, name, summary } = props;
  return (
    <>
      <div className="episode-tooltip">
        <img src={image} className="episode-tooltip-img" />

        <div className="tooltip-text">
          <div className="episode-tooltip-name">
            <p>{name}</p>
            <p>X</p>
          </div>
          <p className="episode-tooltip-summary">{summary}</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(EpisodeToolTip);
