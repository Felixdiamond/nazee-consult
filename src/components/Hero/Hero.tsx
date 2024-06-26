import "./Hero.css";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BackgroundBeams } from "../ui/background-beams";
// import { Explanation } from "../Explanation/Explanation";
import { Link } from "react-router-dom";
// import { RefObject } from "react";

export function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // const expRef = React.useRef<HTMLDivElement>(null);

  // const scrollDown = (ref: RefObject<HTMLDivElement>) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            <span className="stroke-text">Unlock the Power of</span>
            <br />
            <span className="gradient-text">Project Management</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Transform your ideas into reality with Nazee Consult's expert
            guidance.
          </p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
            <button className="cta-button">
              <Link to={"/services"}>Our Services</Link>
              <ArrowRight size={18} className="arrow-icon" />
            </button>
            {/* <Link to="/services" className="learn-more">
              Our services
            </Link> */}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
