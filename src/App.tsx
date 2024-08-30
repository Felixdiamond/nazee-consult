import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const HomePage = lazy(() => import("@/components/HomePage/HomePage"));
const ServicesPage = lazy(
  () => import("@/components/ServicesPage/ServicesPage")
);

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
