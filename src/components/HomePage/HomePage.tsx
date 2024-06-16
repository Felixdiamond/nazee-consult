import { NavBar } from "../NavBar/NavBar";
import { SupportBtn } from "../SupportBtn/SupportBtn";
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

export function HomePage() {
  return (
    <>
      <NavBar />
      <SupportBtn />
      <HeroSection />
      <Description />
      <BookInfo />
      <Services />
      <Hub />
      <div className="team-header">
        <h1>
          Meet the Team.
        </h1>
      </div>
      <Team />
      <Metrics />
      <PMBtn />
      <Testimonials />
      <Footer />
    </>
  );
}