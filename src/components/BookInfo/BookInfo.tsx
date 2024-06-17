import "./BookInfo.css";
import book from "../../assets/book.png";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "../ui/button";
import { Highlight } from "../ui/hero-highlight";
import { ShoppingCart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function BookInfo() {
  useEffect(() => {
    AOS.init({
      duration: 600, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="book-info flex flex-col items-center justify-center">
      <h1 className="book-info__heading" data-aos="fade-up" data-aos-duration="400">
        Our Best Selling Book
      </h1>
      <div className="book-info__content" data-aos="fade-up" data-aos-duration="500">
        <div className="book-info__card" data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
          <CardContainer className="cc">
            <CardBody className="bg-transparent">
              <CardItem translateZ={30}>
                <h1 className="book-info__title">
                  The{" "}
                  <span className="text-white">
                    <Highlight>Skillful</Highlight>
                  </span>{" "}
                  Project Manager
                </h1>
              </CardItem>
              <CardItem translateZ={50}>
                <img src={book} alt="book" className="book-info__image" />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="book-info__description" data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
          <p className="book-info__text">
            We are committed to providing our students with exceptional
            education resources while also delivering world class project
            management service
          </p>
          <p className="book-info__text">
            This comprehensive guide offers an in-depth exploration of 30
            essential skills that will elevate your project management practices
            to new heights. Whether you're an aspiring project manager, a
            seasoned professional looking to sharpen your skills, or a leader
            aiming to drive your team's success, this book is your ultimate
            resource.
          </p>
          <p className="book-info__text">
            "The Skillful Project Manager" is more than just a book—it's a
            roadmap to becoming an outstanding project manager sharpening your
            essential skills with real-life scenarios on how they apply.
          </p>
          <p className="book-info__tagline">
            Your journey to becoming a top-tier project manager starts here.
          </p>
          <div className="book-info__button-container">
            <Button className="book-info__button flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              <a
                href="https://coachneffect.selar.co/675858"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}