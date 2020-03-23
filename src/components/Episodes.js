import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import axios from "../axios-instance";

import episodes from './sylefiles/episodes.scss';

const Episodes = props => {
  const { seasonId } = props;
  //   console.log('seasonId type : ', typeof seasonId);
  //   let seasonIdNum = seasonId.toString();
  const [episodes, setEpisodes] = useState([]);

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

  let renderEpisodeTooltip = () => {
    
  }

  return (
    <>
      <div>List of episodes</div>
      {getEpisodes()}
      <div className='listOfEpisodes'>
      {episodes &&
        episodes.map(eachEpisode => {
          return (
            <>
              <div className="episodes" key={eachEpisode.id}>
                <div className="episode-tooltip">
                  <img
                    src={eachEpisode.image.medium}
                    className="episode-tooltip-img"
                  />
                  <p className="episode-tooltip-name">{eachEpisode.name}</p>
                  <p className="episode-tooltip-summary">
                    {eachEpisode.summary}
                  </p>
                </div>
                <div className="episodeNumber">
                  <div className='episodeCircle'></div>
                  Episode {eachEpisode.number}
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
