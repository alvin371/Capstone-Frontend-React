import React from "react";
import Images from "../../component/asset/Testimony.png";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Typography from "@mui/material/Typography";
import User1 from "../../component/asset/testimony1.jpg";
const TestimonyBest = () => {
  return (
    <div className="relative">
      <div className="bg-red w-24 h-24 lg:w-20 lg:h-20 sm:w-12 sm:h-12 rounded-full relative top-12 left-10 opacity-80 sm:top-10">
        <ThumbsUpDownIcon className="text-white h-16 w-16 lg:w-12 lg:h-12 sm:w-8 sm:h-8  absolute xl:top-4 lg:top-4 xl:left-4 lg:left-4 sm:left-2 sm:top-2" />
      </div>
      <img src={Images} alt="header" className="w-full" />
      <div className="w-4/5  top-1/3  absolute justify-between  flex flex-row">
          <div className="lg:m-10 xl:m-10 sm:m-8">
        <Typography className="text-gray  w-4/5  font-semibold left-12 xl:text-2xl lg:text-2xl sm:text-sm">
          “ It's good to try using this website, very helpfull, and keep my
          train better ”
          <Typography className="text-white absolute w-2/5 font-bold xl:mt-10 xl:mb-5 lg:mt-5 lg:mb-5  xl:text-3xl lg:text-3xl sm:text-lg sm:m-2">
            Jake Mc.
          </Typography>
        </Typography>
        </div>
        <img src={User1} alt="header" className="xl:w-72 xl:h-64 lg:w-60 lg:h-52 sm:w-32 sm:h-24 sm:mt-5 rounded-full " />
      </div>
    </div>
  );
};

export default TestimonyBest;
