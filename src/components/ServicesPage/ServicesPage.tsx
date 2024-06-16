import { Diploma } from "../Diploma/Diploma";
import { DocumentationTemplate } from "../DocTemplates/DocTemplate";
import Footer from "../Footer/Footer";
import { CertProgram } from "../GCP/CertProgram";
import { MainServices } from "../MainServices/MainServices";
import { NavBar } from "../NavBar/NavBar";
import "./ServicesPage.css";

export const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <br />
      <MainServices />
      <Diploma />
      <DocumentationTemplate />
      <CertProgram />
      <Footer />
    </>
  );
};

export default ServicesPage;
