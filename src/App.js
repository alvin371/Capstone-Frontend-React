import "./x.css";
import "./index.css";
import Navbar from "./component/pageComponent/Navbar/Navbar";
// import Footer1 from "./component/smallComponent/footer";
// import Sticky from "./component/smallComponent/sticky";
// import Slogan from "./component/asset/Group4.png";

// import Carousel from "./component/smallComponent/carousel2"
// import About from "./component/smallComponent/about";
// import WhyUs from "./component/smallComponent/whyUs";
// import PageLogin from "./page/login/Login"
// import PageSignup from "./page/signUp/signUp"
import TrainerList from "./page/trainerList/trainerList"

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <TrainerList/>

    </div>
  );
};
export default App;
