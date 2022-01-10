import React from "react";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Footer from "../../component/smallComponent/footer";
import FitnessLogo from "../../component/asset/Header.png";
import Stycky from "../../component/smallComponent/sticky";
import WhyUs from "../../component/smallComponent/whyUs";
import About from "../../component/smallComponent/about"
import CaraouselHome from "../../component/smallComponent/carouselHome"

const HomePage = () => {
  return (
    <div className="bg-black h-full space-y-20">
      <Navbar />
      <img
        src={FitnessLogo}
        alt="head"
        className="mx-auto w-2/5 opacity-70 mb-10 sm:w-1/2"
      />
      <div className="fixed top-1/4 mr-4 right-0 opacity-50">
        <Stycky />
      </div>
      <h1 className="relative text-gray font-bold text-center text-4xl mb-8">
        WHY US
      </h1>
      <WhyUs/>
      <h1 className="relative text-gray font-bold text-center text-4xl mb-8">
        ABOUT US
      </h1>
      <About/>
      <CaraouselHome/>
      <Footer />
    </div>
  );
};

export default HomePage;
