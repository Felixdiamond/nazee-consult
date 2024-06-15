import "./App.css";
import "./Team.scss";
import { BookInfo } from "./components/BookInfo/BookInfo";
import { Description } from "./components/Description/Desc";
import { Explanation } from "./components/Explanation/Explanation";
import Footer from "./components/Footer/Footer";
import { HeroSection } from "./components/Hero/Hero";
import { Metrics } from "./components/Metrics/Metrics";
import { NavBar } from "./components/NavBar/NavBar";
import { PMBtn } from "./components/PMBtn/PMBtn";
import { Hub } from "./components/PMH/Hub";
import { Services } from "./components/Services/Services";
import { SupportBtn } from "./components/SupportBtn/SupportBtn";
import { Team } from "./components/Team/Team";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Explanation />
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
      <SupportBtn />
      <Footer />
    </>
  );
}

export default App;
