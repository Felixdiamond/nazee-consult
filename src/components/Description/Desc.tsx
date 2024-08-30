import { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { TbTargetArrow } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import './Desc.css';

export function Description() {
  const [activeSection, setActiveSection] = useState("values");

  const values = [
    { icon: TbTargetArrow, text: "Innovation", description: "Pushing boundaries and embracing new ideas" },
    { icon: CiStar, text: "Excellence", description: "Striving for the highest quality in all we do" },
    { icon: FaGlobeAfrica, text: "Global Collaboration", description: "Fostering partnerships across borders" },
    { icon: FaGears, text: "Continuous Development", description: "Never stopping in our quest for knowledge" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="desc-container">
      <span id="about" className="pb-6"></span>
      <div className="desc-hero" data-aos="fade-up">
        <h1 className="desc-title">Empowering Project Managers Globally</h1>
        <p className="desc-tagline">
          At Nazee Consult, we transform project managers into change architects.
        </p>
      </div>
      <div className="desc-nav" data-aos="fade-up">
        {["values", "mission", "vision"].map((section) => (
          <button
            key={section}
            className={`desc-nav-btn ${activeSection === section ? "active" : ""}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="desc-content">
        <div className={`desc-section ${activeSection === "values" ? "active" : ""}`}>
          <h2 className="desc-subtitle">Our Core Values</h2>
          <ul className="desc-values-list">
            {values.map(({ icon: Icon, text, description }, index) => (
              <li key={index}>
                <CardContainer className="value-card">
                  <CardBody className="value-card-body">
                    <CardItem translateZ="20" className="value-icon-container">
                      <Icon className="value-icon" strokeWidth={2} />
                    </CardItem>
                    <CardItem translateZ="40" as="h3" className="value-title">
                      {text}
                    </CardItem>
                    <CardItem translateZ="60" as="p" className="value-description">
                      {description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </li>
            ))}
          </ul>
        </div>
        <div className={`desc-section ${activeSection === "mission" ? "active" : ""}`}>
          <h2 className="desc-subtitle">Our Mission</h2>
          <p className="desc-text">
            Our mission is to provide <span className="txt-lows">comprehensive, accessible, and practical</span> education and support to aspiring and existing project managers worldwide, equipping them with the skills, knowledge, and confidence necessary to succeed in their roles and drive successful project outcomes in any industry or context.
          </p>
        </div>
        <div className={`desc-section ${activeSection === "vision" ? "active" : ""}`}>
          <h2 className="desc-subtitle">Our Vision</h2>
          <p className="desc-text">
            At the forefront of project management education, our vision is to <span className="txt-lows">ignite passion, foster creativity, and cultivate a culture of continuous improvement,</span> where every project manager has the confidence and capability to navigate complexities and achieve greatness.
          </p>
        </div>
      </div>
    </section>
  );
}