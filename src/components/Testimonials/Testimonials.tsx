import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      quote:
        "I am genuinely impressed with my experience from start to finish. The process has been seamless, and now I am confident in my skills and on a clear path to becoming a professional project manager.",
      author: "Annastacia",
      role: "Project Manager",
    },
    {
      id: 2,
      image: testimonial2,
      quote:
        "Nazee Consult truly pays attention to the needs of their students. They break down project management in a way that anyone can understand. After completing the diploma program, I landed a role as a project manager!",
      author: "Bushra",
      role: "Project Manager",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <p className="testimonials-subtext">Real stories from our alumni</p>

      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-content">
              <blockquote>"{testimonial.quote}"</blockquote>
              <footer>
                <cite>{testimonial.author}</cite>
                <span>{testimonial.role}</span>
              </footer>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
