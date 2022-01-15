import "./index.css";
import Navbar from "./component/pageComponent/Navbar/Navbar";
import { Fragment, useState, useEffect } from "react";
import * as React from "react";
import {
  Login,
  SignUp,
  Membership,
  HomePage,
  TrainerList,
  Account,
  BookOnline,
  BookOffline,
  ClassesOffline,
  ClassesOnline,
  NewsPage,
  NewsDetail,
  Videos,
} from "./page";
import { Route, Routes,useLocation } from "react-router-dom";


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

const App = () => {
  const location = useLocation();
  const token = getToken();
  const [auth, setAuth] = React.useState(true);
 
  if(!token && location.pathname!=="/") {
    return <Login setToken={setToken} />
  }else if(location.pathname==="/"){
    return <HomePage auth={auth} setAuth={setAuth} />
  }

  return (
    <Routes>
      <Route path="/"
        exact
        element={<HomePage auth={auth} setAuth={setAuth} />}
      />
      <Route path="/trainer-list" exact element={<TrainerList />} />
      <Route path="/sign-in" exact element={<Login />} />
      <Route path="/sign-up" exact element={<SignUp />} />
      <Route path="/account" exact element={<SignUp />} />
      <Route
        path="/membership"
        exact
        element={auth ? <Membership /> : <Login />}
      />
      <Route path="/online-class" exact element={<BookOnline state={"online"} />} />
      <Route path="/offline-class" exact element={<BookOnline state={"offline"} />} />
      <Route path="content/news" exact element={<NewsPage />} />
      <Route path="/news-detail" exact element={<NewsDetail />} />
      <Route path="/videos" exact element={<Videos />} />
    </Routes>
  );
};
export default App;
