import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import SignUp from "../components/SignUp/SignUp";
import Downloads from "../components/Downloads/Downloads";

function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <SignUp {...homeObjThree} />
      <Downloads />
      <Footer />
    </>
  );
}

export default Home;
