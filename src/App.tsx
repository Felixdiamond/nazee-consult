import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { ServicesPage } from "./components/ServicesPage/ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <ChakraProvider>
              <ServicesPage />
            </ChakraProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
