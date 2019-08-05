/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function AboutSection() {
  return (
    <div className="section section-about-us">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <div>
              <img
                alt="..."
                className="img-fluid"
                style={{ maxWidth: "10vw" }}
                src={require("assets/img/C4C_Logo.png")}
              />
            </div>
            <h2 className="title">Who are we?</h2>
            <p>
              <b>
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDC lead scentist, puts the
                potentially record low maximum sea ice extent this year down to
                low ice extent in the Pacific and a late drop in ice extent in
                the Barents Sea.
              </b>
            </p>
          </Col>
        </Row>
        <div className="separator separator-primary" />
        <div className="section-story-overview">
          <Row>
            <Col md="6">
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/login.jpg") + ")"
                }}
              >
                <p className="blockquote blockquote-info">
                  <b>
                    "Over the span of the satellite record, Arctic sea ice has
                    been declining significantly, while sea ice in the
                    Antarctichas increased very slightly" <br />
                    <br />
                    <small>-NOAA</small>
                  </b>
                </p>
              </div>
              <div
                className="image-container"
                style={{
                  backgroundImage: "url(" + require("assets/img/bg3.jpg") + ")"
                }}
              />
            </Col>
            <Col md="5">
              <div
                className="image-container image-right"
                style={{
                  backgroundImage: "url(" + require("assets/img/bg1.jpg") + ")"
                }}
              />
              <h3>
                So what does the new record for the lowest level of winter ice
                actually mean
              </h3>
              <p>
                <b>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </b>
              </p>
              <p>
                <b>
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </b>
              </p>
              <p>
                <b>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </b>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
