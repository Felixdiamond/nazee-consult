import { NavBar } from "../NavBar/NavBar";
import { HeroSection } from "../Hero/Hero";
import { Description } from "../Description/Desc";
import { BookInfo } from "../BookInfo/BookInfo";
import { Services } from "../Services/Services";
import { Hub } from "../PMH/Hub";
import { Team } from "../Team/Team";
import { Metrics } from "@/components/Metrics/Metrics";
import { PMBtn } from "../PMBtn/PMBtn";
import { Testimonials } from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useBreakpointValue } from "@chakra-ui/react";
import { Explanation } from "../Explanation/Explanation";
import { MobileTeam } from "../Team/MobileTeam";
import { SupportBtn } from "../SupportBtn/SupportBtn";

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <NavBar />
      <SupportBtn />
      <HeroSection />
      <Explanation />
      <Description />
      <BookInfo />
      <Services />
      <Hub />
      <div className="team-header"></div>
      {isMobile ? <MobileTeam /> : <Team />}
      <Metrics />
      <PMBtn />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
