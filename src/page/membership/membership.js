import React from "react";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Premium from "../../component/asset/premiumMembership.png";
import Regular from "../../component/asset/regularMembership.png";
import Header from "../../component/asset/headerMembership.png";
import Card from "../../component/smallComponent/cardMember";
import Footer from "../../component/smallComponent/footer"

const products = [
  {
    id: 1,
    name: "Regular",
    href: "#",
    img: {Regular},
    alt: "Membership",
    price: "$ 50",
    abstract:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
  },
  {
    id: 2,
    name: "Premium",
    href: "#",
    img: {Premium},
    alt: "Membership",
    price: "$ 50",
    abstract:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
  },
];

const membership = () => {
  return (
      <>
    <Navbar />
    <div className="space-y-20">
      
      <img
        src={Header}
        alt="header"
        className="w-full py-10 opacity-70 xl:h-auto md:h-auto sm:h-96"
      />
      <div class=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
        “Work Hard try hard pay hard and be something”
      </div>

      <h1 className="text-gray font-bold text-center text-4xl mt-6 mb-8">
        Membership
      </h1>
      <div className="m-6 space-x-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 sm:space-x-0 xl:justify-center">
        {products.map((product) =>(
            <Card product={product}/>
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default membership;
