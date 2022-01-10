import "./index.css";
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
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/trainer-list" exact element={<TrainerList />} />
      <Route path="/sign-in" exact element={<Login />} />
      <Route path="/sign-up" exact element={<SignUp />} />
      <Route path="/account" exact element={<SignUp />} />
      <Route path="/membership" exact element={<Membership />} />
      <Route path="/booking-online" exact element={<BookOnline />} />
      <Route path="/booking-offline" exact element={<BookOffline />} />
      <Route path="/news" exact element={<NewsPage />} />
      <Route path="/news-detail" exact element={<NewsDetail />} />
      <Route path="/videos" exact element={<Videos />} />
    </Routes>
  );
};
export default App;
