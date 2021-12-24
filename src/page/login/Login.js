import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../component/asset/Group1603.png";

const Login = () => {
  const baseLogin = {
    email: "",
    password: "",
  };
  const baseError = {
    email: "",
    password: "",
  };
  const [errorMassage, setErrorMassage] = useState(baseError);

  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [data, setData] = useState(baseLogin);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({ ...errorMassage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "password") {
      if (value.length > 0) {
        setErrorMassage({
          ...errorMassage,
          [name]: "password kurang dari 8 karakter",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    if (errorMassage.password !== "" || errorMassage.email !== "") {
      alert(`Data Pendaftar Tidak Sesuai`);
    } else {
      alert(`Data user "${data.email}" Berhasil Diterima`);
      console.log(data);
      resetForm();
    }
    e.preventDefault();
  };
  const resetForm = () => {
    setData(baseLogin);
    setErrorMassage(baseError);
  };
  return (
    <div className="w-full flex flex-wrap bg-black">
      <div className="w-2/5 shadow-2xl">
        <div className="flex absolute justify-center m-2 md:justify-start md:-mb-24">
          <Link to="/" className="hidden md:block text-white font-bold text-4xl">
            FITNESS
          </Link>
        </div>
        <img
          className="object-cover w-full opacity-60 h-screen hidden md:block"
          src="https://s3-alpha-sig.figma.com/img/c95f/6589/f50b8159b0caadf2a92ce33a6ac659ca?Expires=1641168000&Signature=K8zDHJnk7XOdQIiy5U5lbv7ZrHN~s1qrh2QitH1jchMUTYhxwcMtsvqy3vKALd~cdZG3U-jAjcvohBoK9kl0dzqz6FBLR5H1I8xQFhw~p-6IXhnx2slXpqUD0UgzajDqQPlQAPugg0Oc4stlogWq-Su6k6Hjbc-LuTMCpeRFxQSBjwEBCJ8G~y0IbdMu90upK032zBOqyUMoOboVL2oCftWkb7oqEVPd0sM6r5C2F4h8QalrZIdoTRJwnCTNo5HJIi50wLPVOm52mST6bpgpyB1kMHf1sUMCmOWihmNhmFUSuZ03cwYKfoneBpFhxeXSJDZuAOEsx~BZ0UHl1tlXtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col  justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo" />
          <h1 className="text-center text-white mt-3 font-bold text-2xl">
            Welcome Back
          </h1>
          <div className="space-x-4 mt-2 text-center">
            <h2 className="inline-block text-white font-bold text-xl">
              Sign In
            </h2>
            <h2 className="inline-block text-gray font-bold text-xl">|</h2>
            <Link
              className="inline-block text-gray-dark hover:text-white font-bold text-xl"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </div>
          <form
            className="flex flex-col w-80 mx-auto md:pt-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-4">
              <input
                required
                type="email"
                name="email"
                placeholder="@ email"
                value={data.email}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                required
                type="password"
                name="password"
                value={data.password}
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            <div className="text-sm text-right text-gray cursor-pointer">
              forgot password
            </div>
            <ul>
              {Object.keys(errorMassage).map((key) => {
                if (errorMassage[key] !== "") {
                  return (
                    <li className="text-red" key={key}>
                      {errorMassage[key]}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <input
              type="submit"
              value="Submit"
              className="bg-gray rounded-lg text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
            />
          </form>
          <Link
            className="text-center pt-3 text-white hover:text-gray"
            to="/sign-up"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
