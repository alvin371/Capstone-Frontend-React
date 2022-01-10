import React from "react";
import Navbar from "../../../component/pageComponent/Navbar/Navbar";
import Header from "../../../component/asset/HeaderOnline.png";
import Footer1 from "../../../component/smallComponent/footer";
import Search from "../../../component/smallComponent/search"

const BookOnline = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="space-y-10">
        <img
          src={Header}
          alt="mid header"
          className="w-full py-2 opacity-60 "
        />
        <div class=" text-gray text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
          WHAT CLASS
          <div>
              <Search/>
          </div>
        </div>
        <Footer1 />
      </div>
    </div>
  );
};

export default BookOnline;
