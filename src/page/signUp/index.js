import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../component/asset/Group1603.png";
import SideImg from "../../component/asset/sidebargym.jpg";

const SignUp = () => {
  const baseSignUp = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };
  const baseError = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };
  const [errorMassage, setErrorMassage] = useState(baseError);
  const [data, setData] = useState(baseSignUp);
  const regexNama = /^[A-Za-z ]*$/;
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, name);
    if (name === "name") {
      if (!regexNama.test(value)) {
        setErrorMassage({
          ...errorMassage,
          [name]: "Nama Lengkap Harus Berupa Huruf",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({ ...errorMassage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        setErrorMassage({
          ...errorMassage,
          [name]: "password kurang dari 8 karakter",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "confirmPassword") {
      if (value == "") {
        setErrorMassage({
          ...errorMassage,
          [name]: "password konfirmasi tidak boleh kosong",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMassage.nama !== "" || errorMassage.email !== "") {
      alert(`Data Pendaftar Tidak Sesuai`);
    } else {
      if (data.confirmPassword == data.password) {
        alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
      } else {
        alert(`password konfirmasi berbeda dengan password`);
      }
      console.log(data);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseSignUp);
    setErrorMassage(baseError);
  };

  return (
    <div className="w-full h-screen flex flex-wrap bg-black">
      <div className="w-2/5 shadow-2xl">
        <div className="absolute justify-center hidden md:block m-2 md:justify-start md:-mb-24">
          <Link to="/" className=" text-white font-bold text-4xl">
            FITNESS
          </Link>
        </div>
        <img
          className="object-cover w-full opacity-60 h-screen hidden md:block"
          src={SideImg}
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col  justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo" />
          <h1 className="text-center text-white mt-3 font-bold text-2xl">
            Welcome
          </h1>
          <div className="space-x-4 mt-2 text-center">
            <h2 className="inline-block text-white font-bold text-xl">
              Sign Up
            </h2>
            <h2 className="inline-block text-gray font-bold text-xl">|</h2>
            <Link
              className="inline-block text-gray-dark hover:text-white font-bold text-xl"
              to="/sign-up"
            >
              Sign In
            </Link>
          </div>

          <form
            className="flex flex-col w-80 mx-auto md:pt-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-4">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="email"
                required
                name="email"
                placeholder="@ email"
                value={data.email}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmation password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
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
              className="bg-gray rounded-lg text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer hover:bg-gray-dark"
            />
          </form>
          <Link
            className="text-center pt-3 text-white hover:text-gray hover:underline"
            to="/sign-in"
          >
            Back Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
