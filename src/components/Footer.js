/*eslint-disable*/

/**
 * @TODO
 * Extract strings from this page into a resource file
 */

import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              {/* <li>
                <a href="#" target="_blank">
                  Legal
                </a>
              </li> */}
              <li>
                <a href="https://www.wacode.org/" target="_blank">
                  Wacode
                </a>
              </li>
              <li>
                <a href="https://www.ecs.baylor.edu/index.php?id=960857" target="_blank">
                  Baylor CS
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},{" "}
            <a href="#" target="_blank">
              Computing for Compassion
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
