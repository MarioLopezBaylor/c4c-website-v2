/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/helping.jpg") + ")"
          }}
          ref={pageHeader}
        />
        <div className="content-center">
          <Container>
            <h2 className="title">
              Running a non-profit is hard. Technology should not get in the way of your goals.
            </h2>
            <div className="text-center">
              <h4 className="title">Computing for Compassion is an IT consulting organization aimed at helping non-profits focus on their mission.</h4>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
