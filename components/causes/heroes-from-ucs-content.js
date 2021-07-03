import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/causes/cause-d-1-1.jpg";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";
import organizer1 from "../../assets/images/causes/organizer-1-1.jpg";
import donor1 from "../../assets/images/causes/donor-1-1.jpg";
import donor2 from "../../assets/images/causes/donor-1-2.jpg";
import IMG_6792 from "../../assets/images/IMG_6792.jpeg";
import { Link } from 'next/link';

const HeroesFromUcsContent = () => {
  return (
    <section className="cause-details blog-details  pt-20 pb-40">
      <Container>
        <Row >
          <Col md={12} className="block-title">
            <p>
            For Singapore Donors, due to regulatory requirements, you cannot use “Pay with PayPal” option. Please use “Pay with Stripe”. Sorry for the inconvenience.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content">
                <h3>Just for UCS Heroes?</h3>
                <p>
                While you are supporting <b>over 4000 heroes</b> participating in <b>Civil Disobedience Movement (CDM)</b> from various ministries, schools, universities, and government sectors, we know you want your contributions to reach directly to your teachers, co-workers, and friends from University of Computer Science who bravely and courageously sacrifice their lives and their future for democracy, and justices.
                </p>
                <h3 style={{marginTop: 25, marginBottom: 25}}>If not now, when?</h3>
                <p>
                <b>Now</b> is the time and opportunity to show that you are fighting with them for the <b>liberation, justices and democracy</b> by making the financial contributions to support UCS CDM participants. UCS Heroes are the pillars of the government, future of the technology, and the gardeners of the next generations. We want to ensure all good causes and efforts are for the democratic government and justices, not for the dictatorship and their supporters.
                <br/><span style={{color: 'red', fontWeight: 'bold'}}>Now is the time to support our UCS CDM Heroes!</span>
                </p>
                <h3 style={{marginTop: 25, marginBottom: 25}}>Do you know?</h3>
                <p>
                UCS FS group is supporting over <b>300</b> CDM participants from 29 Computer Science Universities throughout the country. Many of them lost their jobs, and they are in hiding. Not knowing how much longer this fight will go on but UCS CDM participants are absolutely relentless in their fight for democracy and justice. People are impacted by the mounting financial burden of not being able to earn wages from working. There is an incredible strength of the solidarity of our people, and we urge all our UCS alumni and supporters worldwide to join us in this historic fight.
                </p>
                <h3 style={{marginTop: 25, marginBottom: 25, color: 'red'}}>Make a difference!</h3>
                <p>Fight with us for a brighter future for you, your family, your next generations and people of Myanmar (Burma) with our dear teachers, colleagues and friends!  
                <br/>Click <a href="https://www.userroll.com/site/register/h216kem">here</a> to donate. Funds raised by your generosity from this campaign will be distributed to only the CDM participants from University of Computer Science in terms of food, shelter, and allotted monthly amounts.
                <br/><span style={{color: 'red', fontWeight: 'bold'}}>You can make a difference!</span></p>
                <p style={{fontSize: 16}}>In association with <a href="http://bcdcaustralia.org.au/" target="_link">Burmese Community Development Collaboration (BCDC)</a>, the funds will be collecting through existing BCDC platform, and you will receive the payment confirmation email from BCDC.</p>
                <div className="cause-card__bottom">
                <a href="https://www.userroll.com/site/register/h216kem" className="thm-btn dynamic-radius">
                    Donate Now
                </a>
                </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="cause-details__sidebar">
              <div className="cause-details__organizer">
                <img src={IMG_6792} alt="" style={{width: 75}} />
                <p>Created 02 June, 2021</p>
                <h3>
                  Organizer: <strong>UCS FS</strong>
                </h3>
              </div>
              {/* <div className="cause-details__donations">
                <h4 className="cause-details__donations-title">Donations</h4>
                <ul className="list-unstyled cause-details__donations-list">
                  <li>
                    <img src={donor1} alt="" />
                    <p>$20</p>
                    <img src={donor2} alt="" />
                    <p>$20</p>
                    <h3>
                      David Marks <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                  <li>
                    <img src={donor1} className="anonymus" alt="" />
                    <p>$20</p>
                    <h3>
                      Anonymus <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroesFromUcsContent;
