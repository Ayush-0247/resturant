import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Cities from "./components/Cities";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

import Menu from "./pages/Menu";
import About from "./pages/About";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <HowItWorks />
      <Cities />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
