import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/page-header-1-1.jpg";
import HeartImage from "../../assets/images/shapes/heart-2-1.png";

import cdmHandBanner from "../../assets/images/CDM-Hand-Banner.jpeg";

const CallToActionTwo = () => {
  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
        style={{ backgroundImage: `url(${cdmHandBanner})` }}
      ></div>
      <Container className="container pt-80 pb-80">
        <i className="azino-icon-charity call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title">
              <p>
                <img src={HeartImage} width="15" alt="" />
                Help Our People
              </p>
              <h3>
                Lend the <br /> helping hand <br /> get involved
              </h3>
            </div>
          </Col>
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <Link href="https://www.userroll.com/site/register/b215jol"> 
              {/* https://userroll.com/myanmarcdm */}
                <a className="scroll-to-target thm-btn">Donate Now</a>
              </Link>
              <br/>
              <h6 style={{marginTop: 10, color: "#FFF", letterSpacing: "0.04em", fontWeight: 'bold'}}>
                in partnership with <a href="http://bcdcaustralia.org.au/" target="_blank" style={{color: "rgb(252, 173, 48)"}}>BCDC</a>
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
