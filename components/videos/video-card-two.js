import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/resources/video-1-1.png";
import logoUCS from "../../assets/images/UCS-Financial-Support-Icon.jpeg";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={logoUCS} alt="" style={{width: 250, height: 250}}/>
                {/* <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </span> */}
              </div>
            </Col>
            <Col lg={4}>
              <h3>Financial Support <br/>University of Computer Studies</h3>
            </Col>
            <Col lg={5}>
              <p>
              UCS FS ဆိုတာ "နွေဦးတော်လှန်ရေး" အတွက် နိုင်ငံတကာမှ UCS ညီအကို မောင်နှမများ ချိတ်ဆက်ပြီး ဆောင်ရွက်နေတဲ့ funding group ဖြစ်ပါတယ်။
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
