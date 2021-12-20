import React from "react";
import { Link } from "react-router-dom";
import MenuDropdown from "../../smallComponent/classDropdown";
import NewsDropdown from "../../smallComponent/newsDropdown";
import Logo from "../../asset/Group1603.png";
const Navbar = () => {
  return (
    <nav className="navbar relative justify-between items-center mx-auto  flex flex-row bg-black text-white h-24 font-">
      <div class="basis-1/4">
        <img src={Logo} alt="Logo" className="w-auto h-20 p-3 mr-4"></img>
      </div>
      <div class="basis-1/2 justify-self-center ">
        {" "}
        <div className="pr-4 md:block hidden">
          <Link
            to="/"
            className="text-base font-medium p-4 hover:text-gray-dark"
          >
            Home
          </Link>
          <Link
            to="/Membership"
            className="text-base font-medium p-4 hover:text-gray-dark"
          >
            Membership
          </Link>
          <MenuDropdown />
          <NewsDropdown/>
        </div>
      </div>
      <div class="basis-1/4">
        <div className="hidden mr-3  md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link to="/sign-in"
            className="whitespace-nowrap text-base font-medium text-white hover:text-gray-dark "
          >
            Sign in
          </Link>
          <Link to="/sign-up"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-red hover:bg-red-dark"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
