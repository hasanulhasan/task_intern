import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const People = () => {
  return (
    <div>
      <Navbar/>
      <div className="lg:mx-32 grid grid-cols-5">
      <div className="col-span-2">
        <LeftSide/>
      </div>
      <div className="col-span-3">
        <RightSide/>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default People;