import { NavBar } from "../NavBar/NavBar";
import { HeroSection } from "../Hero/Hero";
import { Description } from "../Description/Desc";
import { BookInfo } from "../BookInfo/BookInfo";
import { Services } from "../Services/Services";
import { Hub } from "../PMH/Hub";
import { Team } from "../Team/Team";
import { Metrics } from "../Metrics/Metrics";
import { PMBtn } from "../PMBtn/PMBtn";
import { Testimonials } from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import "./HomePage.scss";
import { Suspense, lazy } from "react";
import { Skeleton } from "@chakra-ui/react";

const SupportBtn = lazy(() =>
  import("../SupportBtn/SupportBtn").then((module) => ({
    default: module.SupportBtn,
  }))
);

const SupportBtnSkeleton = () => (
  <Skeleton
    position="fixed"
    bottom="20px"
    right="20px"
    borderRadius="md"
    width={{ base: "48px", md: "auto" }}
    height={{ base: "48px", md: "auto" }}
    minWidth={{ md: "100px" }}
    minHeight={{ md: "40px" }}
    zIndex={999}
  />
);

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<SupportBtnSkeleton />}>
        <SupportBtn />
      </Suspense>
      <HeroSection />
      <Description />
      <BookInfo />
      <Services />
      <Hub />
      <div className="team-header">
        <h1>Meet the Team.</h1>
      </div>
      <Team />
      <Metrics />
      <PMBtn />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
