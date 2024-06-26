import { useState, useEffect } from "react";
import "./Desc.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Star, Target, Globe, Book } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Description() {
  const [activeSection, setActiveSection] = useState("values");
  type ColorKey = "#FFA726" | "#42A5F5" | "#66BB6A" | "#AB47BC";

  const colorMap: Record<ColorKey, string> = {
    "#FFA726": "bg-[#7F00FF]",
    "#42A5F5": "bg-[#7F00FF]",
    "#66BB6A": "bg-[#7F00FF]",
    "#AB47BC": "bg-[#7F00FF]",
  };

  const values: Array<{
    icon: typeof Star | typeof Target | typeof Globe | typeof Book;
    text: string;
    color: ColorKey;
  }> = [
    { icon: Target, text: "Innovation", color: "#42A5F5" },
    { icon: Star, text: "Excellence", color: "#FFA726" },
    { icon: Globe, text: "Global Collaboration", color: "#66BB6A" },
    { icon: Book, text: "Continuous development", color: "#AB47BC" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="desc-container">
      <span id="about" className="pb-6">
      </span>
      <div className="desc-hero" data-aos="fade-up">
        <h1 className="desc-title">Empowering Project Managers Globally</h1>
        <p className="desc-tagline">
          At Nazee Consult, we transform project managers into change
          architects.
        </p>
      </div>
      <div className="desc-nav" data-aos="fade-up">
        {["values", "mission", "vision"].map((section) => (
          <button
            key={section}
            className={`desc-nav-btn ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="desc-content">
        <div
          className={`desc-section ${
            activeSection === "values" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Core Values</h2>
          <ul className="desc-values-list">
            {values.map(({ icon: Icon, text, color }, index) => (
              <li key={index}>
                <CardContainer className="h-full w-full">
                  <CardBody className="flex flex-col items-center justify-center h-full">
                    <CardItem
                      translateZ={40}
                      className={`icon-container mb-6 ${colorMap[color]}`}
                    >
                      <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </CardItem>
                    <CardItem
                      translateZ={60}
                      as="h3"
                      className="text-xl font-bold text-gray-800 mb-3 text-center pb-2"
                    >
                      {text}
                    </CardItem>
                    {/* <CardItem
                      translateZ={20}
                      as="p"
                      className="text-sm text-gray-600 text-center"
                    >
                      Shaping the future of project management.
                    </CardItem> */}
                  </CardBody>
                </CardContainer>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`desc-section ${
            activeSection === "mission" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Mission</h2>
          <p className="desc-text">
            Our mission is to provide comprehensive, accessible, and practical
            education and support to aspiring and existing project managers
            worldwide, equipping them with the skills, knowledge, and confidence
            necessary to succeed in their roles and drive successful project
            outcomes in any industry or context.
          </p>
        </div>
        <div
          className={`desc-section ${
            activeSection === "vision" ? "active" : ""
          }`}
        >
          <h2 className="desc-subtitle">Our Vision</h2>
          <p className="desc-text">
            At the forefront of project management education, our vision is to
            ignite passion, foster creativity, and cultivate a culture of
            continuous improvement, where every project manager has the
            confidence and capability to navigate complexities and achieve.
          </p>
        </div>
      </div>
    </section>
  );
}
