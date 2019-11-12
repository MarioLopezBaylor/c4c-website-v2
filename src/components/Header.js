/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// reactstrap components
import { Container } from "reactstrap";

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
          /* Photo by John Schnobrich on Unsplash */
          style={{
            backgroundImage: "url(" + require("assets/img/helping.jpg") + ")"
          }}
          ref={pageHeader}
        />
        <div className="content-center">
          <Container>
            <h3 className="title">
              Running a non-profit organization is hard. Technology should not
              get in the way.
            </h3>
            <div className="text-center">
              <h5 className="title">
                We are computer science, engineering, and business students
                who are here to help.
              </h5>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
