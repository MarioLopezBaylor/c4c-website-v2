/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

import Booth from "assets/img/profile/Booth.jpg";
import Brandon from "assets/img/profile/Brandon.jpeg";
import Donahoo from "assets/img/profile/Donahoo.jpg";
import Neil from "assets/img/profile/Neil.png";
import Mario from "assets/img/profile/Mario.jpeg";
import Meghan from "assets/img/profile/MeghanOfficerSm.jpg";
import Miranda from "assets/img/profile/MirandaOfficerPic.jpg";
import Zachary from "assets/img/profile/ZacharyOfficerSm.jpg";
import DefaultAvatar from "assets/img/default-avatar.png";

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
                  alt="Meghan Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Meghan}
                />
                <h4 className="title">Meghan Bibb</h4>
                <p className="category text-info">President</p>
                <p>Computer Science Senior</p>
                <p>Baylor University</p>
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
                  alt="Brooklynn Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={DefaultAvatar}
                />
                <h4 className="title">Brooklynn Stone</h4>
                <p className="category text-info">Vice President</p>
                <p>Computer Science Junior</p>
                <p>Baylor University</p>
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
                  alt="Citlally Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={DefaultAvatar}
                />
                <h4 className="title">Citlally Ruiz</h4>
                <p className="category text-info">Treasurer</p>
                <p>Computer Science Sophomore</p>
                <p>Baylor University</p>
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
                  alt="Ashley"
                  className="rounded-circle img-fluid img-raised"
                  src={DefaultAvatar}
                />
                <h4 className="title">Ashley Lu Couch</h4>
                <p className="category text-info">Head of Philanthropy</p>
                <p>Computer Science Junior</p>
                <p>Baylor University</p>
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
                  alt="Andrew"
                  className="rounded-circle img-fluid img-raised"
                  src={DefaultAvatar}
                />
                <h4 className="title">Andrew Ammentorp</h4>
                <p className="category text-info">Secretary</p>
                <p>Computer Science Junior</p>
                <p>Baylor University</p>
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
                  alt="Miranda Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Miranda}
                />
                <h4 className="title">Miranda Montroy</h4>
                <p className="category text-info">External Engagement Coordinator</p>
                <p>Management Information Systems Junior</p>
                <p>Baylor University</p>
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
                  alt="Zachary Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Zachary}
                />
                <h4 className="title">Zachary Scherer</h4>
                <p className="category text-info">Wacode Committee Chair</p>
                <p>Computer Science Sophomore</p>
                <p>Baylor University</p>
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
                  alt="Donahoo Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Donahoo}
                />
                <h4 className="title">Jeff Donahoo</h4>
                <p className="category text-info">Advisor, Co-Founder</p>
                <p>Professor of Computer Science</p>
                <p>Baylor University</p>
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
                  alt="Booth Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Booth}
                />
                <h4 className="title">Bill Booth</h4>
                <p className="category text-info">Advisor, Co-Founder</p>
                <p>Senior Lecturer of Computer Science</p>
                <p>Baylor University</p>
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
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
