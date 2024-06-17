import { Link } from "react-router-dom";
import "./Services.css";
import { ChevronRight } from "lucide-react";


const services = [
  { id: "01", title: "Advisory Call", subtitle: "(30 MINS)", icon: "🎧" },
  { id: "02", title: "Diploma in", subtitle: "Project Management", icon: "📜" },
  {
    id: "03",
    title: "Project Management",
    subtitle: "Community Hub",
    icon: "👥",
  },
  { id: "04", title: "Templates &", subtitle: "Worksheets", icon: "📝" },
  {
    id: "05",
    title: "Global Certification",
    subtitle: "Exam Prep (2 Weeks)",
    icon: "🌍",
  },
];

export function Services() {
  return (
    <div>
      <div className="services-container">
        <h1 className="services-title">
          Our Services<span className="title-dot">.</span>
        </h1>
        <p className="services-subtitle">
          We are committed to providing our students with exceptional service
          while offering our employees the best training.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <span className="service-number">{service.id}</span>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-subtitle">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex">
          <Link to="/services">Our services</Link>
          <ChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
}
