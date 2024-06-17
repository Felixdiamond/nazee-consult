import { Diploma } from "../Diploma/Diploma";
import { DocumentationTemplate } from "../DocTemplates/DocTemplate";
import Footer from "../Footer/Footer";
import { CertProgram } from "../GCP/CertProgram";
import { MainServices } from "../MainServices/MainServices";
import { NavBar } from "../NavBar/NavBar";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import { ServiceSupportBtn } from "../SupportBtn2/ServiceSupportBtn";
import "./ServicesPage.css";

export const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <br />
      <ServiceSupportBtn />
      <MainServices />
      <Diploma />
      <DocumentationTemplate />
      <CertProgram />
      <ServiceTestimonial />
      <Footer />
    </>
  );
};

export default ServicesPage;
