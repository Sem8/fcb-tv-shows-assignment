import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import axios from "../axios-instance";

import Episodes from "./Episodes";

import summaryseasons from "./sylefiles/summaryseasons.scss";

const SummarySeasons = props => {
  const { selectedShowId, selectedShowSummary, selectedShowName } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [inputValue, setInputValue] = useState("Select season");
  const [seasonId, setSeasonId] = useState("");
  const [seasonIsSelected, setSeasonIsSelected] = useState(false);

  useEffect(() => {
    axios.get(`shows/${selectedShowId}/seasons`).then(res => {
      console.log("res seasons: ", res);
      setSeasons(res.data);
    });
  }, []);

  let handleChange = e => {
    setInputValue(e.target.value);
  };

  let seasonSelected = (inputVal, id) => {
    setInputValue(inputVal);
    setSeasonId(id);
    setSeasonIsSelected(true);
    console.log("season is selected: ", seasonIsSelected);
  };

  return (
    <>
      <div className="selectedShow">
        <div className="selectedShowName">{selectedShowName}</div>
        <div className="selectedShowSummary">{selectedShowSummary}</div>
      </div>

      <p className="seasonsText">Seasons</p>

      <select
        multiple={true}
        value={[inputValue, seasonId]}
        onChange={handleChange}
        onChange={() => seasonSelected(inputValue, seasonId)}
        className="seasonSelectMenu"
      >
        <option className="seasonOption1" value="Select season">
          Select season
        </option>

        {seasons &&
          seasons.map(eachSeason => {
            return (
              <>
                <option
                  key={eachSeason.id}
                  className="seasonOption"
                  value={eachSeason.number}
                  onClick={() =>
                    seasonSelected(eachSeason.number, eachSeason.id)
                  }
                >
                  Season {eachSeason.number}
                </option>
              </>
            );
          })}
      </select>

      {seasonIsSelected ? <Episodes seasonId={seasonId} /> : null}
    </>
  );
};

export default withRouter(SummarySeasons);
