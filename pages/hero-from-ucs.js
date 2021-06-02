import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import HeroFromUcsContent from "../components/causes/hero-from-ucs-content";
import Footer from "../components/footer";
import CallToActionThree from "../components/call-to-action/call-to-action-three";

const CauseDetails = () => {
  return (
    <Layout pageTitle="Financial Support || UCS">
      {/* <HeaderOne /> */}
      {/* <StickyHeader /> */}
      {/* <PageHeader title="Hero from UCS" crumbTitle="Hero from UCS" /> */}
      <CallToActionThree />
      <HeroFromUcsContent />
      <Footer />
    </Layout>
  );
};

export default CauseDetails;
