import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import springRevolutionMyanamr from "../assets/images/Spring-Revolution-Cover.jpg";
import ucsFsFbCover from "../assets/images/UCSFS-fb-cover.jpeg";
import logoUCS from "../assets/images/UCS-Financial-Support-Icon.jpeg";

const FeaturedCause = () => {
  return (
    <section className="featured-cause">
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4} className="imgWrap">
              <img src={logoUCS} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto">
                <h3>Urgent help needed now </h3>
                <p>
                  Thank You! We would like to express our deep gratitude towards your generous donations for supporting Myanmar's Spring Revolution.
                </p>
                <div className="cause-card__top">
                  <div className="cause-card__progress">
                    <span style={{ width: `50%` }} className=" cardProgress">
                      <b>
                        <i>50</i>%
                      </b>
                    </span>
                  </div>
                  <div className="cause-card__goals">
                    <p>
                      <strong>Raised:</strong> Kyats 35,000,000
                    </p>
                    <p>
                      <strong>Goal:</strong> Kyats 70,000,000
                    </p>
                  </div>
                </div>
                <div className="btn-wrap" style={{paddingTop: 20}}>
                <Link href="https://www.facebook.com/FinancialSupportUCS2021">
                  <a className="scroll-to-target thm-btn">Donate Now</a>
                </Link>
              </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
