import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "../axios-instance";

// import SummarySeasons from './SummarySeasons';
import PopupSearch from "./PopupSearch";
import SummarySeasons from "./SummarySeasons";

const AutoCompleteSearch = props => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(0);
  const [selectedShowSummary, setSelectedShowSummary] = useState("");

  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [showResult, setShowResult] = useState(false);

  let getSuggestions = () => {
    // console.log('text: ', text);
    axios
      .get(`search/shows?q=${text}`)
      .then(res => {
        // console.log("fuzzy search shows", res);
        setSuggestions(res.data);
        // console.log('suggestions: ', suggestions);
        // console.log('iso Date: ', new Date(suggestions[0].show.premiered));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  // useEffect(() => {
  //   axios
  //     .get(`search/shows?q=${text}`)
  //     .then(res => {
  //       console.log("fuzzy search shows", res);
  //       setSuggestions(res.data);
  //       console.log('suggestions: ', suggestions);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  //   getSuggestions();
  // }, []);

  let suggestionSelected = (value, id, summary) => {
    setText(value);
    setSuggestions([]);
    // console.log('text after: ', text);
    setSelectedShowId(id);
    setSelectedShowSummary(summary);
    // console.log('selected id: ', id);
    // console.log('selected summary: ', summary);

    // props.history.replace("/summaryseasons");
  };

  let renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(eachSuggestion => (
          <li
            key={eachSuggestion.show.id}
            onClick={() =>
              suggestionSelected(
                eachSuggestion.show.name,
                eachSuggestion.show.id,
                eachSuggestion.show.summary.slice(3, eachSuggestion.show.summary.length - 4)
              )
            }
          >
            {eachSuggestion.show.name}
            <span>
              Premiered on{" "}
              {new Date(eachSuggestion.show.premiered).toDateString().slice(4)}
            </span>
            <span>
              Rating:{" "}
              {eachSuggestion.show.rating.average == null
                ? "Unknown"
                : eachSuggestion.show.rating.average}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="search">
        <div className="title">Search TV show</div>
        <div className="content">
          <input
            type="text"
            placeholder="Please enter TV show title"
            value={text}
            onChange={e => setText(e.target.value)}
            onInput={getSuggestions}
          />
          {renderSuggestions()}
          {selectedShowId && selectedShowSummary ? (
            <SummarySeasons
              selectedShowId={selectedShowId}
              selectedShowSummary={selectedShowSummary}
              selectedShowName={text}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default withRouter(AutoCompleteSearch);
