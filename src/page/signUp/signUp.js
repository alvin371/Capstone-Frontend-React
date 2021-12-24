import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../component/asset/Group1603.png";


const Login = () => {
  return (
    <div className="w-full flex flex-wrap bg-black">
      <div className="w-2/5 shadow-2xl">
      <div className="flex absolute justify-center m-2 md:justify-start md:-mb-24">
          <Link to="/" className=" text-white font-bold text-4xl">
            FITNESS
          </Link>
        </div>
        <img
          className="object-cover w-full opacity-60 h-screen hidden md:block"
          src="https://s3-alpha-sig.figma.com/img/c95f/6589/f50b8159b0caadf2a92ce33a6ac659ca?Expires=1641168000&Signature=K8zDHJnk7XOdQIiy5U5lbv7ZrHN~s1qrh2QitH1jchMUTYhxwcMtsvqy3vKALd~cdZG3U-jAjcvohBoK9kl0dzqz6FBLR5H1I8xQFhw~p-6IXhnx2slXpqUD0UgzajDqQPlQAPugg0Oc4stlogWq-Su6k6Hjbc-LuTMCpeRFxQSBjwEBCJ8G~y0IbdMu90upK032zBOqyUMoOboVL2oCftWkb7oqEVPd0sM6r5C2F4h8QalrZIdoTRJwnCTNo5HJIi50wLPVOm52mST6bpgpyB1kMHf1sUMCmOWihmNhmFUSuZ03cwYKfoneBpFhxeXSJDZuAOEsx~BZ0UHl1tlXtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </div>
      {/* Login Section */}
      <div className="w-full md:w-3/5 flex flex-col">
        
        <div className="flex flex-col  justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo"/>
          <h1 className="text-center text-white mt-3 font-bold text-2xl">Welcome Back</h1>
          <div className="space-x-4 mt-2 text-center">
              <h2 className="inline-block text-white font-bold text-xl">Sign In</h2>
              <h2 className="inline-block text-gray font-bold text-xl">|</h2>
              <Link className="inline-block text-gray-dark hover:text-white font-bold text-xl" to="/sign-up">Sign Up</Link>
          </div>
          
          <form
            className="flex flex-col w-80 mx-auto md:pt-8"
            onsubmit="event.preventDefault();"
          >
              <div className="flex flex-col pt-4">
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="email"
                id="email"
                placeholder="@ email"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <input
              type="submit"
              defaultValue="Log In"
              className="bg-gray rounded-lg text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
            />
          </form>
          <Link className="text-center pt-3 text-white hover:text-gray" to="/sign-up"> 
                Back Login
          </Link>
        </div>
      </div>
      {/* Image Section */}
    </div>
  );
};

export default Login;
