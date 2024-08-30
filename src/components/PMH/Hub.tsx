import "./Hub.css";
import pmhImage from "../../assets/pmh.jpg";
import { FaBook, FaUserTie, FaHandshake } from "react-icons/fa";

export function Hub() {
  return (
    <div className="hub-container">
      <div className="hub-image-container">
        <img src={pmhImage} alt="Project Management Hub" className="hub-image" />
      </div>
      <div className="hub-content">
        <h1 className="hub-title">
          Project Management Hub<span className="title-dot">.</span>
        </h1>
        <p className="hub-description">
          Project Managers are world changers. They make up an integral part of any successful venture or endeavor. Statistics show that without project managers, 70% of projects will fail. Project management is a very rewarding career.
        </p>
        <ul className="hub-features">
          <li>
            <FaBook className="hub-icon" /> In-depth resources
          </li>
          <li>
            <FaUserTie className="hub-icon" /> Expert insights
          </li>
          <li>
            <FaHandshake className="hub-icon" /> Supportive network
          </li>
        </ul>
        <p className="hub-description">
          Whether you're just starting out or looking to sharpen your skills, Project Management Hub is your go-to destination. Join us today and <span className="highlight">connect, learn, and grow</span> with like-minded professionals.
        </p>
        <a href="https://wa.link/bvgsid" target="_blank" rel="noopener noreferrer" className="hub-button">
          Join The Hub
        </a>
      </div>
    </div>
  );
}
