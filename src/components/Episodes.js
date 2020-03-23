import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import axios from "../axios-instance";

const Episodes = props => {
  const { seasonId } = props;
//   console.log('seasonId type : ', typeof seasonId);
//   let seasonIdNum = seasonId.toString();
  const [episodes, setEpisodes] = useState([]);

//   useEffect(() => {
//     axios.get(`seasons/${seasonId}/episodes`).then(res => {
//       console.log("res seasons: ", res);
//       setEpisodes(res.data);
//     });
//   }, []);

let getEpisodes = () => {
    axios
    .get(`seasons/${seasonId}/episodes`)
    .then(res => {
      // console.log("fuzzy search shows", res);
      setEpisodes(res.data);
      // console.log('suggestions: ', suggestions);
      // console.log('iso Date: ', new Date(suggestions[0].show.premiered));
    })
    .catch(err => {
      console.log(err.message);
    });
}

  return (
    <>
      <div>List of episodes</div>
      {getEpisodes()}

      {episodes &&
        episodes.map(eachEpisode => {
          return (
            <>
              <div>
                <div>
                  <img src={eachEpisode.image.medium} />
                  <p>{eachEpisode.name}</p>
                  <p>{eachEpisode.summary}</p>
                </div>
                Episode {eachEpisode.number}
              </div>
            </>
          );
        })}
    </>
  );
};

export default withRouter(Episodes);
