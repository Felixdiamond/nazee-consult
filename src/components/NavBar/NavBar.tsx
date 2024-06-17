import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  IconButton,
} from "@chakra-ui/react";
import "./NavBar.css";
import logo from "../../assets/20231229_213655_0002.png";

export function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) onClose();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  function closeAndScroll() {
    onClose();
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="nav-container p-4 py-6 flex items-center justify-between bg-white shadow-md">
        <div className="logo-div flex items-center justify-center gap-3 text-black">
          <img src={logo} alt="logo" className="logo-pic" />
          <span>Nazee Consult</span>
        </div>
        {isMobile ? (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            ref={btnRef}
            onClick={onOpen}
            variant="ghost"
          />
        ) : (
          <div className="nav-links flex gap-4 pr-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <span onClick={closeAndScroll} className="cursor-pointer">
              About
            </span>
            <a href="https://forms.gle/7EihcEP6FV3X5JQSA">Contact</a>
          </div>
        )}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={logo} alt="logo" className="logo-picc" />
          </DrawerHeader>

          <DrawerBody>
            <div className="nav-links flex flex-col gap-4 p-4">
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="/services" onClick={onClose}>
                Services
              </Link>
              <span onClick={closeAndScroll} className="cursor-pointer">
                About
              </span>
              <a href="https://forms.gle/7EihcEP6FV3X5JQSA" onClick={onClose}>
                Contact
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
