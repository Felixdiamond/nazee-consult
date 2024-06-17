import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
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
              <a href="#" className="footer-link">
                About
              </a>
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
              123 Main Street
              <br />
              City, State 12345
              <br />
              Email: Nazeeconsult@gmail.com
              <br />
              Phone: (123) 456-7890
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
