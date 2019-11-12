/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

import Billicarole from "assets/img/profile/Billicarole.jpeg";
import Booth from "assets/img/profile/Booth.jpg";
import Brandon from "assets/img/profile/Brandon.jpeg";
import Donahoo from "assets/img/profile/Donahoo.jpg";
import Neil from "assets/img/profile/Neil.png";
import Mario from "assets/img/profile/Mario.jpeg";
import Meghan from "assets/img/profile/Meghan.jpg";
import Miranda from "assets/img/profile/Miranda.jpeg";
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
                  alt="Mario Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Mario}
                />
                <h4 className="title">Mario Lopez</h4>
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
                  alt="Brandon Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Brandon}
                />
                <h4 className="title">Brandon Mork</h4>
                <p className="category text-info">Vice President</p>
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
                  alt="Billicarole Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Billicarole}
                />
                <h4 className="title">Billicarole Evans</h4>
                <p className="category text-info">Treasurer</p>
                <p>Mechanical Engineering Senior</p>
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
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={Meghan}
                />
                <h4 className="title">Megan Bibb</h4>
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
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={Neil}
                />
                <h4 className="title">Neil Wilcoxen</h4>
                <p className="category text-info">Secretary</p>
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
                  alt="Miranda Profile"
                  className="rounded-circle img-fluid img-raised"
                  src={Miranda}
                />
                <h4 className="title">Miranda Montroy</h4>
                <p className="category text-info">External Engagement Coordinator</p>
                <p>Management Information Systems Sophomore</p>
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
                <p className="category text-info">Marketing Chair</p>
                <p>Computer Science Freshman</p>
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
