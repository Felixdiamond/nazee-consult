import { Diploma } from "../Diploma/Diploma";
import { DocumentationTemplate } from "../DocTemplates/DocTemplate";
import Footer from "../Footer/Footer";
import { CertProgram } from "../GCP/CertProgram";
import { MainServices } from "../MainServices/MainServices";
import { NavBar } from "../NavBar/NavBar";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import { SupportBtn } from "../SupportBtn/SupportBtn";
import "./ServicesPage.css";

export const ServicesPage = () => {
  return (
    <>
      <div className="inter">
      <NavBar />
      <br />
      <SupportBtn />
      <MainServices />
      <Diploma />
      <DocumentationTemplate />
      <CertProgram />
      <ServiceTestimonial />
      <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
