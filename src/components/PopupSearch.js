import React from "react";
import { withRouter } from "react-router";

const PopupSearch = props => {
  const { isOpen, suggestions } = props;

  if (!isOpen) return null;
  return (
    <>
      <div className="popup">
        {suggestions &&
          suggestions.map((item, idx) => {
            return (
              <div className="item" key={idx}>
                <span>{item.show.name}</span>{" "}<span>{item.show.premiered}</span>{" "}
                <span>{item.show.rating}</span>
              </div>
            );
          })}
        {!suggestions && <div className="warning">Nothing Found!</div>}
      </div>
      <div className="footer">Type Keyword to search for food</div>
    </>
  );
};

export default withRouter(PopupSearch);
