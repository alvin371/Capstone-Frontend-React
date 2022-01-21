import "./index.css";
import Navbar from "./component/pageComponent/Navbar/Navbar";
import { Fragment, useState, useEffect } from "react";
import * as React from "react";
import {
  Login,
  Register,
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




const App = () => {
  return (
    <Routes>
      <Route path="/"
        exact
        element={<HomePage  />}
      />
      <Route path="/trainer-list" exact element={<TrainerList />} />
      <Route path="/sign-in" exact element={<Login />} />
      <Route path="/sign-up" exact element={<Register />} />
      {/* <Route path="/account" exact element={<SignUp />} /> */}
      <Route
        path="/membership"
        exact
        element={ <Membership />}
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
