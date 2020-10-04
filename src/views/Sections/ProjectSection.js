import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/ITProjects.jpg"),
    altText: "IT Projects",
    caption: "Members of C4C hard at work to solve our community's problems."
  },
  {
    src: require("assets/img/IgniteCS.jpg"),
    altText: "igniteCS",
    caption:
      "C4C volunteers teaching local elementary school children Computer Science concepts."
  },
  {
    src: require("assets/img/Wacode.jpg"),
    altText: "Wacode",
    caption:
      "Wacode Hackathon participants hard at work to finish their projects."
  }
];

function ProjectSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [iconPills, setIconPills] = React.useState("1");

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="section section-tabs project-section">
        <div className="ml-auto mr-auto text-center">
          <h2 className="title">What do we do?</h2>
        </div>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="7">
              <div id="carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>{item.caption}</h5>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </Carousel>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                          setActiveIndex(0);
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        IT Projects
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                          setActiveIndex(1);
                        }}
                      >
                        <i className="now-ui-icons business_bulb-63"></i>
                        igniteCS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                          setActiveIndex(2);
                        }}
                      >
                        <i className="now-ui-icons sport_trophy"></i>
                        Wacode
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        <b>
                          Our volunteers to help your organization
                          thrive and troubleshoot the technology issues you are
                          facing. We have helped non-profits with various
                          projects including hardware replacement, network
                          troubleshooting, and data recovery.
                        </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        <b>
                          Our volunteers are eager to use the knowledge gathered
                          in the classrooms out in the real world. What better
                          way to do that then to share that knowledge with the
                          underserved children of our community. We hope to
                          ignite a passion for computer science in these young
                          children to lead the way as future technology
                          professionals.
                        </b>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        <b>
                          Wacode is our annual hackathon that is hosted in Waco,
                          TX. We partner with Baylor University and various
                          corporate sponsors to put together a 12-hour
                          competition where participants are able to build cool
                          websites, apps, and other coding projects to help
                          solve some of our community's problems. The event
                          features free food, free swag, workshops led by
                          industry professionals, internship and full-time job
                          opportunities.
                        </b>
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectSection;
