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

      <div className="block-title">
      <p>
        <img src={blockTitleHeart} width="15" alt="" />
        For Singapore Donors, due to regulatory requirements, you cannot use “Pay with PayPal” option. Please use “Pay with Stripe”. Sorry for the inconvenience.
      </p>
      </div>

      <section className="cause-details blog-details  pt-20 pb-20">
      <Container>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Background:</h3>
            <p>
            On February 1st 2021, a military coup violently took over the democratically elected government of Myanmar, detained all of its leaders and denied the voices of over 40 million Myanmar people. In just 3 months, over <span style={{color: 'red', fontWeight: 'bold'}}>750 people have been killed</span> including peaceful protestors and dozens of children, and over 3000 people have been arbitrarily detained and charged with crimes they did not commit. Myanmar is on the brink of a failed state, economy is in a freefall, and civil wars have broken out all throughout the country.
            <br/>
            <span style={{fontSize: 14}}>
            ဖေဖော်ဝါရီလ (၁)ရက်နေ့တွင် သန်း(၅၀)ကျော် မြန်မာနိုင်ငံသူ နိုင်ငံသားများက ဒီမိုကရေစီနည်းလမ်းကျနစွာ ရွေးချယ်တင်မြှောက်ခဲ့တဲ့ အစိုးရကို စစ်အာဏာရှင်အကြမ်းဖက်သမားများက အဓမ္မအာဏာသိမ်းယူပြီး နိုင်ငံဥသျှောင် ဒေါ်အောင်ဆန်းစုကြည်နှင့်တကွ ပြည်သူ့ခေါင်းဆောင်များကို ဖမ်းဆီထားခဲ့ပါသည်။ ငြိမ်းချမ်းစွာ စစ်အာရှင်ဖြုတ်ချရေးအတွက် ဆန္ဒထုတ်ဖော်ပြသသူများထဲမှ ကလေးသူငယ်ပါမကျန် လက်နက်မဲ့လူပေါင်း(၇၅၀)ကျော်ကို ရက်စက်စွာ သတ်ဖြတ်ခဲ့ပြီး၊ အပြစ်မဲ့ ပြည်သူပေါင်း(၃၀၀၀)ကျော်ကို မတရားညှင်းပန်းနှိပ်စက်ဖမ်းဆီးခဲ့ပါသည်။ လင်းရောင်ခြည် ရလုလုဖြစ်ခဲ့သော မြန်မာ့နိုင်ငံရေး၊ စီးပွားရေး ကဏ္ဍပေါင်းစုံမှာ ချောက်ကမ်းပါးထဲကျလုကျခင် ဖြစ်ခဲ့ရပေပြီ။
            </span>
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>What CDM is:</h3>
            <p>Civilian employees including healthcare professionals, teachers, engineers, railway workers and civil servants of all various sectors have been participating in a nationwide labour strike by the name of <b>Civil Disobedience Movement (CDM)</b>. These workers have been hanging by a thread without any type of income since the coup took place and bravely refused to return to work in a defiance against the regime even though their lives have been threatened. Families have been evicted from their homes for participating in CDM, and many have lost their loved ones who were breadwinners.
            <br/>
            <span style={{fontSize: 14}}>
            အကြမ်းမဖက်ပြည်သူအာဏာဖီဆန်မှု (Civil Disobedience Movement) စစ်အာဏာရှင်အုပ်ချုပ်မှု့ကို မထောက်ပံ့၊ မနာခံနိုင်မှုကို သန္ဓေတည်ကာ ပြည်သူ့ဝန်ထမ်းများဖြစ်ကြသော ကျန်းမာရေး၊ ပညာရေး၊ လမ်းတံတား၊ မီးရထား၊ ဆက်သွယ်ရေးနှင့် ဌာန သီးသီးမှ ဝန်ထမ်းများက အကြမ်းမဖက်ပြည်သူ့အာဏာဖီဆန်မှု လှုပ်ရှားမှု့ (Civil Disobedience Movement) စတင်ခဲ့ကြပါသည်။ ယနေ့တွင် ယင်းလှုပ်ရှားမှုတွင်ပါဝင်နေသာ ဝန်ထမ်းများ၏ ဘဝပေါင်းများစွာမှာ အာဏာရှင်များရဲ့ ခြိမ်းခြောက်မှု၊ ဖမ်းဆီးမှု၊ အိမ်ယာမဲ့မှု့၊ လခဖြတ်တောက်ခံရမှု့များနှင့် ရင်ဆိုင်နေရသော်လည်း၊ အခက်အခဲများစွာကြားမှ မလျှော့သောဇွဲဖြင့် တိုက်ပွဲဝင်နေသော သူရဲကောင်းများဖြစ်ပါသည်။ စစ်အာဏာရှင်ကျဆုံးရေး လုပ်ရှားမှုတွင် အကြမ်းမဖက် အာဏာဖီဆန်မှု့မှာ လွန်စွာထိရောက်နေပြီး၊ လက်ရှိစစ်ကောင်စီကို အကျပ်ရိုက်နေစေသော စစ်အာဏာရှင်ကို လက်မခံမှုကို ပြတ်သားစွာ ပြသနိုင်သော လှုပ်ရှားမှုဖြစ်ပါသည်။
            </span>
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Why support:</h3>
            <p>Not knowing how much longer this fight will take but <b>Civil Disobedience Movement</b> participants are absolutely relentless in their fight for democracy and justice. People are impacted by the mounting financial burden of not being able to earn wages from working. Their bravery and sacrifice are praised globally and have recently been nominated for the Nobel Peace Prize for next year. There is incredible strength of the solidarity of the Myanmar people and we urge all our citizens worldwide to join us in this historic fight. We ask for your much-needed support to assist these courageous people of Myanmar participating in CDM in an <b>effort to restore democracy</b>.
            <br/>
            <span style={{fontSize: 14}}>
            “ထောက်ပံ့ခြင်းဖြင့် တိုက်ပွဲဝင်ပါ”<br/>
            မြန်မာနိုင်ငံ၏ အနာဂတ်၊ နောင်လာနောင်သား မျိုးဆက်များ၏ အနာဂတ်တို့ အတွက် ရဲရင့်ပြတ်သားစွာ ကိုယ်ကျိုးစွန့် တိုက်ပွဲဝင်နေသော ပြည်သူ့ဝန်ထမ်းများအား ဝန်းရံပေးရမည်မှာ စစ်အာဏာရှင်ကို ဆန့်ကျင်သော မြန်မာနိုင်ငံသားတိုင်း၏ တာဝန်ဖြစ်သည်။ အကြမ်းမဖက် ပြည်သူ့ အာဏာဖီဆန်မှုတွင် ပါဝင်နေသော မြန်မာ့သူရဲကောင်းတို့ကို မြန်မာနိုင်ငံသားများသာမက ကမ္ဘာကပါ အသိအမှတ်ပြုပြီး နိုဘယ်ငြိမ်းချမ်းရေးဆုအတွက် ရွေးချယ်ရန် စာရင်းတင်သွင်းခံခဲ့ရပါသည်။ ဒီမိုကရေစီရရှိရေး၊ စစ်အာဏာရှင်လက်အောက်မှ လွတ်မြှောက်ရေး၊ တိုင်းပြည်ပြန်လည်ထူထောင်ရေးတို့တွင် အဓိက မဏ္ဍိုင်ဖြစ်သော ရဲရဲတောက်စွန့်စွားတိုက်ပွဲဝင်နေသည့် သူရဲကောင်းများ၏ စားဝတ်နေရေး၊ ဘဝလုံခြုံရေး၊ စစ်အာဏာရှင် ကျဆုံးသည် အထိဆက်လက်တိုက်ပွဲ၀င်နိုင်ရေးတို့အတွက် တပိုင်တနိုင် ငွေအားဖြင့် ထောက်ပံ့လှူဒါန်းခြင်းဖြင့် UCS FS နဲ့ အတူ တိုက်ပွဲဝင်ပါ။
            </span>
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <h3>Why Donate:</h3>
            <p><span style={{color: 'red', fontWeight: 'bold'}}>We can’t effort to go back to the dictatorship after living under them for almost 60 years!</span> <br />Please help us by donating to our fundraiser organized by UCS FS through the link below. The funds raised by your generosity from this campaign will be distributed to participants of CDM in terms of food, shelter, and allotted amounts.<br/>
            The people of Myanmar desperately need your help and any amount helps!
            <br/>
            <span style={{fontSize: 14}}>
            “ပြိုင်တူတွန်းလျှင် ရွှေ့နိုင်ပါသည်”<br/>
            စစ်အာဏာရှင်ကျဆုံးရေး …. ဒို့အရေး - ဒို့အရေး<br/>
            ဒီမိုကရေစီ ရရှိရေး ………… ဒို့အရေး - ဒို့အရေး<br/>
            ဒီမိုကရေစီ ရရှိရေး ………… ဒို့အရေး - ဒို့အရေး<br/>
            ကောက်ခံရရှိငွေများအား အကြမ်းမဖက်အာဏာ ဖီဆန်မှု့လှုပ်ရှားမှုတွင် ပါဝင်တိုက်ပွဲဝင်နေသော ဝန်ထမ်းနှင့် မိသားစုများအတွက် အစားအစာ၊ အိမ်ယာနှင့် ထောက်ပံ့ငွေပေးခြင်းဖြင့် ကူညီသွားမည် ဖြစ်ပါသည်။<br/>
            “ငွေအင်အား ပါဝင်ထောက်ပံ့ခြင်းဖြင့် သင်လည်း တိုက်ပွဲဝင်ပါ”
            </span>
            </p>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col md={12}>
            <p>
            With cordial support from Burmese Community Development Collaboration (BCDC), the funds will be collected through the existing BCDC platform, and you will receive the payment confirmation email from BCDC.
            <br/>
            <span style={{fontSize: 14}}>
            လှူဒါန်းငွေများကို ဩစတြေးလျနိုင်ငံ မြန်မာဖွံ့ဖြိုးရေးပူးပေါင်းဆောင်ရွက်မှု အသင်း (Burmese Community Development Collaboration - BCDC) မှ တဆင့် ကောက်ခံမှာ ဖြစ်ပြီး BCDC မှ လက်ခံ ရရှိကြောင်း ဖြတ်ပိုင်းကို email ဖြင့် ပေးပို့မှာ ဖြစ်ပါသည်။
            </span>
            </p>
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
