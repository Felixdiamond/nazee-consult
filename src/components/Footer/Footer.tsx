import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  function scrollToAbout() {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Nazee Consult</h3>
            <p className="footer-description">
            Transform your ideas into reality with Nazee Consult's expert guidance.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <span className="cursor-pointer footer-link" onClick={scrollToAbout}>
                About
              </span>
              <Link to="/services" className="footer-link">
                Services
              </Link>
              <a href="https://forms.gle/7EihcEP6FV3X5JQSA" className="footer-link">
                Contact
              </a>
            </nav>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-icon" />
              </a>
              <a href="https://www.instagram.com/nazee_consult" className="footer-social-link">
                <Instagram className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-contact">
              20 Editi street
              <br />
              Ikeja, Lagos
              <br />
              Email: Nazeeconsult@gmail.com
              <br />
              Phone: +234 803 723 2625
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Nazee Consult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
