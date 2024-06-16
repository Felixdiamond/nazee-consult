import { Mountain, Menu, X } from "lucide-react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="nav-container p-4 py-6 flex items-center justify-between bg-white shadow-md">
        <div className="logo-div flex items-center justify-center gap-3 text-black">
          <Mountain size={20} />
          <span>Nazee Consult</span>
        </div>
        {isMobile ? (
          <button onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        ) : (
          <div className="nav-links flex gap-4 pr-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <a href="#">About</a>
            <a href="https://forms.gle/7EihcEP6FV3X5JQSA">Contact</a>
          </div>
        )}
      </div>
      {isMobile && (
        <div
          className={`mobile-nav-overlay ${isMenuOpen ? "open" : "closing"}`}
          onClick={closeMenu}
        >
          <div
            className={`mobile-nav ${isMenuOpen ? "slide-in" : "slide-out"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeMenu}>
              <X size={24} />
            </button>
            <div className="nav-links flex flex-col gap-4 p-4">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
              <a href="#" onClick={closeMenu}>
                About
              </a>
              <a href="https://forms.gle/7EihcEP6FV3X5JQSA" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
