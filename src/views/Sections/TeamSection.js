/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function TeamSection() {
  return (
    <div className="section section-team text-center">
      <Container>
        <h2 className="title">Meet the team</h2>
        <div className="team">
          <Row>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Mario Lopez</h4>
                <p className="category text-info">President</p>
                <p>
                  Computer Science Senior
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-instagram" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Brandon Mork</h4>
                <p className="category text-info">Vice President</p>
                <p>
                  Computer Science Senior
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-linkedin" />
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Billicarole Evans</h4>
                <p className="category text-info">Treasurer</p>
                <p>
                  Mechanical Engineering Senior
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-google-plus" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-youtube" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Megan Bibb</h4>
                <p className="category text-info">Head of Philanthropy</p>
                <p>
                  Computer Science Junior
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-instagram" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Neil Wilcoxen</h4>
                <p className="category text-info">Secretary</p>
                <p>
                  Computer Science Senior
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-linkedin" />
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                />
                <h4 className="title">Miranda Montroy</h4>
                <p className="category text-info">External Engagement Chair</p>
                <p>
                  Management Information Systems Sophomore
                </p>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-google-plus" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-youtube" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
