import "./x.css";
import "./index.css";
import Navbar from "./component/pageComponent/Navbar/Navbar";
import Footer1 from "./component/smallComponent/footer";
import Sticky from "./component/smallComponent/sticky";
import Slogan from "./component/asset/Group4.png";

import Carousel from "./component/smallComponent/carousel2"
import About from "./component/smallComponent/about";
import WhyUs from "./component/smallComponent/whyUs";
import PageLogin from "./page/login/Login"
import PageSignup from "./page/signUp/signUp"

const App = () => {
  return (
    <div className="bg-white">
      {/* <Navbar />
      <div className="items-center">
        <Sticky />
      </div>
      <div class="flex justify-center my-10 ml-10">
        <img src={Slogan} className="h-auto w-auto"></img>
      </div>
      <WhyUs/>
      <About/>
      <Carousel></Carousel>
      
      <Footer1 /> */}
      <PageLogin/>
    </div>
  );
};
export default App;
