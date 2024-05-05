import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSite from "../components/AboutSite";
import AboutUS from "../components/AboutUS";
import Sponsor from "../components/Sponsor";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <>
      <div className="w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('./cover-image.png')"
        }}>
          <div className="w-full h-full bg-black bg-opacity-40">

        <HeroSection />
          </div>
      </div>

      <AboutSite />
      <AboutUS />

      <div
        className="h-60 flex flex-col items-center justify-center
     bg-blue-50"
      >
        <Sponsor />
      </div>
      <div className="container mx-auto  my-5">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
