import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "../axios-instance";

import autoCompleteSearch from './sylefiles/autoCompleteSearch.scss';

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
      <ul className='autoCompleteTextUl'>
        {suggestions.map(eachSuggestion => (
          <li
            key={eachSuggestion.show.id}
            className='autoCompleteTextLi'
            onClick={() =>
              suggestionSelected(
                eachSuggestion.show.name,
                eachSuggestion.show.id,
                eachSuggestion.show.summary.slice(3, eachSuggestion.show.summary.length - 4)
              )
            }
          >
            <p className='autoCompleteTextName'>{eachSuggestion.show.name}</p>
            {/* <span className='autoCompleteTextDate'> */}
            <p className='autoCompleteTextDate'>
              Premiered on{" "}
              {new Date(eachSuggestion.show.premiered).toDateString().slice(4)}
              </p>
            {/* </span> */}
            {/* <span className='autoCompleteTextRating'> */}
              <p className='autoCompleteTextRating'>
              Rating :{" "}
              {eachSuggestion.show.rating.average == null
                ? "Unknown"
                : eachSuggestion.show.rating.average}
                </p>
            {/* </span> */}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="search">
        <h5 className="title">Search TV show</h5>
        <div className="content">
          <input
            type="text"
            placeholder="Please enter TV show title"
            value={text}
            onChange={e => setText(e.target.value)}
            onInput={getSuggestions}
            className='autoCompleteInput'
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
