import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
import AboutCounter from "../components/about/about-counter";
import CausesHome from "../components/causes/causes-home";
import DonationOptions from "../components/donation-options";
import TeamHome from "../components/team/team-home";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GalleryHome from "../components/gallery/gallery-home";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import BlogHome from "../components/blog/blog-home";
import CallToAction from "../components/call-to-action/call-to-action";
import GoogleMap from "../components/google-map";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import FeaturedCause from "../components/featured-cause";
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";

const HomeOne = () => {
  return (
    <Layout pageTitle="Financial Support || UCS">
      {/* <HeaderOne />
      <StickyHeader /> */}
      {/* <MainSlider /> */}
      {/* <br/> */}
      {/* <FeaturedCause /> */}
      <CallToActionTwo />

      <section className="cause-details blog-details  pt-20 pb-20">
      <Container>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Background:</h3>
            <p>
            On February 1st 2021, a military coup violently took over the democratically elected government of Myanmar, detained all of its leaders and denied the voices of over 40 million Myanmar people. In just 3 months, over <span style={{color: 'red', fontWeight: 'bold'}}>750 people have been killed</span> including peaceful protestors and dozens of children, and over 3000 people have been arbitrarily detained and charged with crimes they did not commit. Myanmar is on the brink of a failed state, economy is in a freefall, and civil wars have broken out all throughout the country.
            </p>
            <p>
            ဖေဖော်ဝါရီလ (၁)ရက်နေ့တွင် သန်း(၅၀)ကျော် မြန်မာနိုင်ငံသူ နိုင်ငံသားများက ဒီမိုကရေစီနည်းလမ်းကျန်စွာ ရွေးချယ်တင်မြှောက်ခဲ့တဲ့ အစိုးရကို စစ်အာဏာရှင်အကြမ်းဖက်သမားများက အဓမ္မအာဏာသိမ်းယူပြီး နိုင်ငံဦးရှောင် ဒေါ်အောင်ဆန်းစုကြည်နှင့်တကွ ပြည်သူ့ခေါင်းဆောင်များကို ဖမ်းဆီထားခဲ့ပါသည်။ ငြိမ်းချမ်းစွာ စစ်အာရှင်ဖြုတ်ချရေးအတွက် ဆန္ဒထုတ်ဖော်ပြသသူများထဲမှ ကလေးသူငယ်ပါမကျန် လက်နက်မဲ့လူပေါင်း(၇၅၀)ကျော်ကို ရက်စက်စွာ သတ်ဖြတ်ခဲ့ပြီး၊ အပြစ်မဲ့ ပြည်သူပေါင်း(၃၀၀၀)ကျော်ကို မတရားညှင်းပန်းနှိပ်စက်ဖမ်းဆီးခဲ့ပါသည်။ လင်းရောင်ခြည် ရလုလုဖြစ်ခဲ့သော မြန်မာ့နိုင်ငံရေး၊ စီးပွားရေး ကဏ္ဍပေါင်းစုံမှ ချောက်ကမ်းပါးထဲကျလုလုကျခင် ဖြစ်ခဲ့ရပေပြီ။
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>What CDM is:</h3>
            <p>Civilian employees including healthcare professionals, teachers, engineers, railway workers and civil servants of all various sectors have been participating in a nationwide labour strike by the name of <b>Civil Disobedience Movement (CDM)</b>. These workers have been hanging by a thread without any type of income since the coup took place and bravely refused to return to work in a defiance against the regime even though their lives have been threatened. Families have been evicted from their homes for participating in CDM, and many have lost their loved ones who were bread winners.</p>
            <p>
            အကြမ်းမဖက်ပြည်သူအာဏာဖီဆန်မှု( Civil Disobedience Movement) စစ်အာဏာရှင်အုပ်ချုပ်မှု့ကို မထောက်ပံ့၊ မနာခံနိုင်မှုကို သန္ဓေတည်ကာ ပြည်သူ့ဝန်ထမ်းများဖြစ်ကြသော ကျန်းမာရေး၊ ပညာရေး၊ လမ်းတံတား၊ မီးရထား၊ ဆက်သွယ်ရေးနှင့် ဌာန သီးသီးမှ ဝန်ထမ်းများက အကြမ်းမဖက်ပြည်သူ့အာဏာဖီဆန်မှု လှုပ်ရှားမှု့(Civil Disobedience Movement) စတင်ခဲ့ကြပါသည်။ ယနေ့တွင် ယင်းလှုပ်ရှားမှုတွင်ပါဝင်နေသာ ဝန်ထမ်းများ၏ ဘဝပေါင်းများစွာမှာ အာဏာရှင်များရဲ့ ခြိမ်းခြောက်မှု၊ ဖမ်းဆီးမှု၊ အိမ်ယာမဲ့မှု့၊ လခဖြတ်တောက်ခံရမှု့များနှင့် ရင်ဆိုင်နေရသော်လည်း၊ အခက်အခဲများစွာကြားမှ မလျှော့သောဇွဲဖြင့် တိုက်ပွဲဝင်နေသော သူရဲကောင်းများဖြစ်ပါသည်။ စစ်အာဏာရှင်ကျဆုံးရေး လုပ်ရှားမှုတွင် အကြမ်းမဖက် အာဏာဖီဆန်မှု့မှာ လွန်စွာထိရောက်နေပြီး၊ လက်ရှိစစ်ကောင်စီကို အကျပ်ရိုက်နေစေသော စစ်အာဏာရှင်ကို လက်မခံမှုကို ပြတ်သားစွာ ပြသနိုင်သော လှုပ်ရှားမှုဖြစ်ပါသည်။
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Why support:</h3>
            <p>Not knowing how much longer this fight will take but <b>Civil Disobedience Movement</b> participants are absolutely relentless in their fight for democracy and justice. People are impacted by the mounting financial burden of not being able to earn wages from working. Their bravery and sacrifice are praised globally and have recently been nominated for the Nobel Peace Prize for next year. There is incredible strength of the solidarity of the Myanmar people and we urge all our citizens worldwide to join us in this historic fight. We ask for your much-needed support to assist these courageous people of Myanmar participating in CDM in an <b>effort to restore democracy</b>.</p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Why Donate:</h3>
            <p><span style={{color: 'red', fontWeight: 'bold'}}>We can’t effort to go back to the dictatorship after living under them for almost 60 years!</span> <br />Please help us by donating to our fundraiser organized by UCS FS through the link below. The funds raised by your generosity from this campaign will be distributed to participants of CDM in terms of food, shelter, and allotted monthly amounts.<br/>
            The people of Myanmar desperately need your help and any amount helps!</p>
            <p>
              <Link href="https://www.userroll.com/site/register/t201jaf"> 
              {/* https://userroll.com/myanmarcdm */}
                <a className="scroll-to-target thm-btn">Donate Now</a>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      </section>

      <VideoCardTwo />
      <br/>      
      {/* <ServiceOne />      
      <AboutCounter />
      <CausesHome />
      <DonationOptions />
      <TeamHome />
      <GalleryTestimonials>
        <GalleryHome />
        <TestimonialsTwo />
      </GalleryTestimonials>
      <BlogHome />
      <CallToAction />
      <GoogleMap extraClass="home" />
      <BrandCarousel extraClass="client-carousel__has-top-shadow" /> */}

      

      <Footer />
    </Layout>
  );
};

export default HomeOne;
