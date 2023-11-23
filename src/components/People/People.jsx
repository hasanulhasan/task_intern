import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ReferCard from "./ReferCard";

const People = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      <div className="lg:mx-32 grid grid-cols-5 gap-1">
          <div className="col-span-2">
            <LeftSide/>
          </div>
          <div className="col-span-3">
            <RightSide/>
          </div>
      </div>
      <div className="mx-32 my-24">
          <h1 className="text-4xl font-bold my-8">Recommended for you</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-1">
            <ReferCard/>
            <ReferCard/>
            <ReferCard/>
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default People;