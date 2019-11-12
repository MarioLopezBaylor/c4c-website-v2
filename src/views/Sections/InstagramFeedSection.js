import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import InstaGrid from "components/InstaGrid";

function InstagramFeedSection() {
  return (
    <>
      <div className="section section-tabs">
        <div className="ml-auto mr-auto text-center">
          <h2 className="title">What have we been up to?</h2>
        </div>
        <Container>
          <InstaGrid account="baylorc4c" numberOfMediaElements={9} />
        </Container>
      </div>
    </>
  );
}

export default InstagramFeedSection;
