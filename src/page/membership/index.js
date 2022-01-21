import React from "react";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Premium from "../../component/asset/premiumMembership.png";
import Regular from "../../component/asset/regularMembership.png";
import Header from "../../component/asset/headerMembership.png";
import Card from "../../component/smallComponent/cardMember";
import Footer from "../../component/smallComponent/footer";

const products = [
  {
    id: 1,
    name: "Regular",
    href: "#",
    img: { Regular },
    alt: "Membership",
    price: "$ 50",
    abstract:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
  },
  {
    id: 2,
    name: "Premium",
    href: "#",
    img: { Premium },
    alt: "Membership",
    price: "$ 50",
    abstract:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
  },
];

const membership = () => {
  return (
 
   
    
    <div>
      
      <div className="space-y-20">
      <div
        className=" bg-cover bg-no-repeat bg-inherit	h-screen pb-20"
        style={{
          backgroundImage:`url("https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
      <Navbar />
      </div>
        <div class=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
          “I strongly believe that through dedication and perseverance, one can overcome adversity to achieve success. ”
        </div>
        <div class="flex mx-auto">
          <h1 class="uppercase mt-10 mb-2 relative inline-block font-bold text-4xl corner mx-auto text-center text-gray-dark">
          Membership
          </h1>
        </div>
        <div className="m-6 space-x-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 sm:space-x-0 xl:justify-center">
          {products.map((product) => (
            <Card product={product} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default membership;
