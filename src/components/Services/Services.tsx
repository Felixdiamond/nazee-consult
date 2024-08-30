import { Link } from "react-router-dom";
import "./Services.css";
import { ChevronRight } from "lucide-react";
import { FaRegHandshake, FaCertificate, FaTasks, FaFileAlt, FaUserFriends } from "react-icons/fa";

const services = [
  { id: "01", title: "Advisory Call", subtitle: "(30 MINS)", icon: <FaRegHandshake /> },
  { id: "02", title: "Diploma in", subtitle: "Project Management", icon: <FaCertificate /> },
  { id: "03", title: "Project Management", subtitle: "Community Hub", icon: <FaUserFriends /> },
  { id: "04", title: "Templates &", subtitle: "Worksheets", icon: <FaFileAlt /> },
  { id: "05", title: "Global Certification", subtitle: "Exam Prep (2 Weeks)", icon: <FaTasks /> },
];

export function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">
        Our Services<span className="title-dot">.</span>
      </h1>
      <p className="services-subtitle">
        We are committed to providing our students with exceptional service while offering our employees the best training.
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
      <div className="flex items-center justify-center">
        <button className="service-button">
          <Link to="/services">See more about our services</Link>
          <ChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
}
