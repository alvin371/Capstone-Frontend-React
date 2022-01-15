import React from "react";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const HomePage = ({auth,setAuth}) => {
  return (
    <div className=" bg-scroll bg-cover bg-no-repeat bg-inherit	h-screen" style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")` 
    }} >
      <Navbar auth={auth} setAuth={setAuth}/>
      <div className="absolute xl:w-2/5 lg:w-2/5 md:w-4/5 sm:w-4/5 xl:top-1/4 lg:top-1/4 sm:top-1/3 ml-10 xl:space-y-6 lg:space-y-6 mr-3">
        <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-white font-bold ">
          SET SOME GOALS, THEN DEMOLISH THEM
        </div>
        <div className="mb-2 xl:text-4xl lg:text-2xl sm:text-xl text-white font-semibold ">
          Landing page of beast gym
        </div>
        <div className=" my-2 xl:text-xl lg:text-lg sm:text-sm text-white xl:font-medium lg:font-medium sm:font-normal ">
          It's time you changed your perception of Gold's Gym. We've spent over
          50 years defining fitness and now we're reinventing it. With personal
          fitness profiles, both traditional and digital personal training
          options and diverse group exercise class offerings all delivered in a
          supportive
        </div>
        <Button
          variant="contained"
          size="large"
          className=" mt-2 font-semibold bg-gradient-to-r from-red-dark to-red"
        >
          Get Started
        </Button>
        <Stack spacing={2} direction="row" className="justify-start">
          <IconButton color="primary" aria-label="delete" >
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add an alarm">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <FacebookIcon />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
