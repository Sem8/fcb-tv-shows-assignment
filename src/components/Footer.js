import React from "react";
import { withRouter } from "react-router";

import footer from "./sylefiles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="row">
        <h1>Contact us</h1>

        <div className="column">
          <h5>
            <span>Address</span> | Mailing
          </h5>
          <p>Primary Address Line</p>
          <p>12345 Postal Code</p>
        </div>

        <div className="column">
          <h5>
            <span>Phone</span> | Ring Ring!
          </h5>
          <p>HEADLINE</p>
          <p>+1 123 456 789</p>
        </div>

        <div className="column">
          <h5>
            <span>E-Mail</span> | Swoosh!
          </h5>
          <p>email@email.com</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Footer);
