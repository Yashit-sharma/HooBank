import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Billing from "./Components/Billing";
import Deals from "./Components/Deals";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
export default function App(){
  
  return(
    <>
    <Navbar />
    <Hero />
    <About />
    <Billing />
    <Deals />
    <Reviews />
    <Footer />
    </>
  );
}