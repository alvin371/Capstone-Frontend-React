import React from "react";
import { Link } from "react-router-dom";



const Account = () => {
  return (
    <>
      <div class="text-center p-6  border-b">
        <img
          class="h-24 w-24 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/men/24.jpg"
          alt="Randy Robertson"
        />
        <p class="pt-2 text-lg font-semibold">Randy Robertson</p>
        <p class="text-sm ">randy.robertson@example.com</p>
        <div class="mt-4">
          <Link
            to="/"
            class="border rounded-full py-2 px-4 text-xs font-semibold text-white bg-red hover:bg-red-dark"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div class="border-b">
        <a href="#" class="mt-2 px-4 py-2 hover:bg-gray flex">
          <div class="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">
              Membership Status
            </p>
            <p class="text-xs text-gray-500">Add/manage users &amp; teams</p>
          </div>
        </a>
        <a href="#" class="px-4 py-2 hover:bg-gray flex">
          <div class="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Gender</p>
            <p class="text-xs text-gray-500">Usage, billing, branding, teams</p>
          </div>
        </a>
        <a href="#" class="px-4 py-2 mb-2 hover:bg-gray flex">
          <div>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
               
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />{" "}
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">
              Goals
            </p>
            <p class="text-xs text-gray-500">Email, profile, notifications</p>
          </div>
        </a>
    
      </div>

      <div class="">
  
      </div>
    </>
  );
};

export default Account;
