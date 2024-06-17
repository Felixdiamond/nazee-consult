import { useEffect, useState, useRef } from "react";
import { LineChart, Users } from "lucide-react";
import "./Explanation.css";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import AOS from "aos";
import "aos/dist/aos.css";

export function Explanation() {
  const [isProgressFull, setIsProgressFull] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [headingSeen, setHeadingSeen] = useState(false);
  const explanationRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setIsProgressFull(true);
    }, 2500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHeadingSeen(true); // Set headingSeen to true when the section is in view
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (explanationRef.current) {
      observer.observe(explanationRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (explanationRef.current) {
        observer.unobserve(explanationRef.current);
      }
    };
  }, []);

  const progressBarStyle = {
    width: isInView && isProgressFull ? "70%" : "0%",
    backgroundColor: isInView && isProgressFull ? "#e67e22" : "#bdc3c7",
    height: "8px",
    borderRadius: "4px",
    transition:
      isInView && isProgressFull
        ? "width 2s ease-out, background-color 2s ease-out"
        : "none",
  };

  const percentageStyle = {
    animation: isInView ? "updatePercentage 2s ease-out 0.5s forwards" : "none",
  };

  return (
    <article className="explanation" ref={explanationRef} data-aos="fade-up">
      <section className="explanation__section" data-aos="fade-right">
        <h2 className="explanation__heading">
          <LineChart className="explanation__icon" size={25} />
          {(isInView || headingSeen) && (
            <TextGenerateEffect words="What is Project Management?" />
          )}
        </h2>
        <p className="explanation__paragraph">
          Project management is the art and science of transforming ideas into
          reality. It's a roadmap that guides projects from start to finish,
          ensuring they stay on track, on time, and within budget.
        </p>
        <p className="explanation__paragraph">
          Without it, even simple tasks can become chaotic and inefficient.
        </p>
      </section>

      <section className="explanation__section" data-aos="fade-left">
        <h2 className="explanation__heading">
          <Users className="explanation__icon" size={25} />
          {(isInView || headingSeen) && (
            <TextGenerateEffect words="Who are Project Managers?" />
          )}
        </h2>
        <p className="explanation__paragraph">
          They are the driving force behind successful projects, guiding teams
          from inception to completion with their unique blend of skills.
        </p>
        <div className="explanation__highlight-container">
          <p className="explanation__highlight">
            Over{" "}
            <span className="text-orange-600">
              <span
                className="explanation__percentage"
                style={percentageStyle}
              ></span>
            </span>{" "}
            of projects fail without them.
          </p>
          <div className="explanation__progress">
            <div style={progressBarStyle}></div>
          </div>
        </div>
      </section>
    </article>
  );
}
