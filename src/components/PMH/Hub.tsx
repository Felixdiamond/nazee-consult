import "./Hub.css";
import pmhImage from "../../assets/pmh.jpg";

export function Hub() {
  return (
    <div className="hub-container">
      <div className="hub-image-container">
        <img
          src={pmhImage}
          alt="Project Management Hub"
          className="hub-image"
        />
      </div>
      <div className="hub-content">
        <h1 className="hub-title">
          Project Management Hub<span className="title-dot">.</span>
        </h1>
        <p className="hub-description">
          Project Managers are world changers. They make up an integral part of
          any successful venture or endeavour. Statistics show that without
          project managers 70% of projects will fail. Project management is a
          very rewarding career.
        </p>
        <ul className="hub-features">
          <li>
            <span className="icon">📚</span> In-depth resources
          </li>
          <li>
            <span className="icon">👩‍💼</span> Expert insights
          </li>
          <li>
            <span className="icon">🤝</span> Supportive network
          </li>
        </ul>
        <p className="hub-description">
          Whether you're just starting out or looking to sharpen your skills,
          <span className="highlight"> Project Management Hub</span> is your
          go-to destination. Join us today and{" "}
          <span className="highlight">connect, learn, and grow</span> with
          like-minded professionals.
        </p>
        <a
          href="https://wa.link/bvgsid"
          target="_blank"
          rel="noopener noreferrer"
          className="hub-button"
        >
          Join The Hub
        </a>
      </div>
    </div>
  );
}
