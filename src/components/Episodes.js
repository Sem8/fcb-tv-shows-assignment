import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import axios from "../axios-instance";
import EpisodeToolTip from "./EpisodeToolTip";

import episodes from "./sylefiles/episodes.scss";

const Episodes = props => {
  const { seasonId } = props;
  //   console.log('seasonId type : ', typeof seasonId);
  //   let seasonIdNum = seasonId.toString();
  const [episodes, setEpisodes] = useState([]);

  const [episodeImg, setEpisodeImg] = useState("");
  const [episodeName, setEpisodeName] = useState("");
  const [episodeSummary, setEpisodeSummary] = useState("");
  const [circleColor, setCircleColor] = useState("#E94F37");
  // const [inputCircle, setInputCircle] = useState('');

  // useEffect(() => {
  //   axios.get(`seasons/${seasonId}/episodes`).then(res => {
  //     console.log("res seasons: ", res);
  //     setEpisodes(res.data);
  //   });
  // }, []);

  let config = {
    headers: { "Access-Control-Allow-Origin": "*" }
  };

  let getEpisodes = () => {
    axios
      .get(`seasons/${seasonId}/episodes`)
      .then(res => {
        // console.log("fuzzy search shows", res);
        setEpisodes(res.data);
        // console.log('episodes: ', episodes)
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // let renderEpisodeTooltip = () => {
  //   if (episodeImg && episodeName && episodeSummary) {
  //     console.log("episode name: ", episodeName);
  //     // return <EpisodeToolTip />;
  //     return (
  //       <>
  //         <div className="episode-tooltip">
  //           <img src={episodeImg} className="episode-tooltip-img" />
  //           <p className="episode-tooltip-name">{episodeName}</p>
  //           <p className="episode-tooltip-summary">{episodeSummary}</p>
  //         </div>
  //       </>
  //     );
  //   }
  // };

  let episodeSelected = (e, epImg, epName, epSummary) => {
    setEpisodeImg(epImg);
    setEpisodeName(epName);
    setEpisodeSummary(epSummary);
    e.target.style.backgroundColor = "#000000";
    if (!epImg) {
      setEpisodeImg(
        "https://via.placeholder.com/728x90.png?text=Episode+Image/+Image+not+available"
      );
    }
  };

  let inputStyle = {
    backgroundColor: "#E94F37"
  };

  return (
    <>
      {/* <div>List of episodes</div> */}
      {getEpisodes()}
      <div className="listOfEpisodes">
        {episodes &&
          episodes.map(eachEpisode => {
            return (
              <>
                <div className="episodes" key={eachEpisode.id}>
                  <div
                    className="episodeNumber"
                    onClick={e =>
                      episodeSelected(
                        e,
                        eachEpisode.image.medium,
                        eachEpisode.name,
                        eachEpisode.summary.slice(
                          3,
                          eachEpisode.summary.length - 4
                        )
                      )
                    }
                  >
                    {/* {episodeImg && episodeName && episodeSummary ? (
                    <EpisodeToolTip
                      image={episodeImg}
                      name={episodeName}
                      summary={episodeSummary}
                    />
                  ) : null} */}
                    <Tippy
                      theme="light-border"
                      trigger="click"
                      content={
                        <EpisodeToolTip
                          image={episodeImg}
                          name={episodeName}
                          summary={episodeSummary}
                        />
                      }
                    >
                      <div className="outerEpisodeCircle">
                        <div
                          className="episodeCircle"
                          style={{ backgroundColor: { circleColor } }}
                        ></div>
                      </div>
                    </Tippy>
                    <p className="episodeNumLabel">
                      Episode {eachEpisode.number}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default withRouter(Episodes);
