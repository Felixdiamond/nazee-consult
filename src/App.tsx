import "./App.css";
import { BookInfo } from "./components/BookInfo/BookInfo";
import { Description } from "./components/Description/Desc";
import { Explanation } from "./components/Explanation/Explanation";
import Footer from "./components/Footer/Footer";
import { HeroSection } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Hub } from "./components/PMH/Hub";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Explanation />
      <Description /> 
      <BookInfo />
      <Services />
      <Hub />
      <Footer />
    </>
  );
}

export default App;
