import { NextPage } from "next";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import IntroSection from "components/common/InstroSection";
import VideoSection from "components/common/VideoSection";
import ModuleMarketPlaces from "components/common/ModuleMarketPlaces";
import ProposalSection from "components/common/ProposalSection";
import RequestDemo from "components/common/RequestDemo";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1920px] w-full">
        <Header />
        <IntroSection />
        <VideoSection />
        <ModuleMarketPlaces />
        <ProposalSection />
        <RequestDemo />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
