import React from "react";
import { Link } from "react-router-dom";
import MenuDropdown from "../../smallComponent/classDropdown";
import NewsDropdown from "../../smallComponent/newsDropdown";
import DropdownContent from "../../smallComponent/dropdownNews";
import Dropdown from "../../smallComponent/dropdown";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
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
            to="/membership"
            className="text-base font-medium p-4 hover:text-gray-dark"
          >
            Membership
          </Link>
          <MenuDropdown />
          <NewsDropdown />
        </div>
      </div>
      <div class="basis-1/4">
        <div className="hidden mr-3 mt-4 md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link
            to="/sign-in"
            className="whitespace-nowrap text-base font-medium text-white hover:text-gray-dark "
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-red hover:bg-red-dark"
          >
            Sign up
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left ">
          <div>
            <Menu.Button className="mr-5 cursor-pointer  md:hidden items-center justify-end md:flex-1 lg:w-0 hover:bg-gray-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 cur"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="mr-2 p-1 absolute z-10 right-0 w-60 mt-2 origin-top-right md:hidden bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-3 ">
                <nav class="grid gap-y-8">
                  <Link
                    to="/"
                    class="-my-3 p-3 flex items-center rounded-md hover:bg-gray"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-dark">
                      Home
                    </span>
                  </Link>

                  <Link
                    to="/membership"
                    class="-my-3 p-3 flex items-center rounded-md hover:bg-gray"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-dark">
                      Membership
                    </span>
                  </Link>
                  <DropdownContent/>
                  <Dropdown />
                </nav>
              </div>
              <Link
                to="/sign-up"
                class="mt-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red hover:bg-red-dark"
              >
                Sign up
              </Link>
              <div class="mt-3 mb-1 text-center text-base font-medium text-gray-dark">
                Existing customer?
                <Link to="/sign-in" class="ml-1 text-red hover:text-red-dark">
                  Sign in
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
