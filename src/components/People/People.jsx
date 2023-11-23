import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ReferCard from "./ReferCard";
import { useLoaderData } from "react-router-dom";
import Loading from "../../utils/Loading";

const People = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      {
        data? <>
          <div className="lg:mx-32 grid grid-cols-5 gap-1">
            <div className="col-span-2">
              <LeftSide data={data}/>
            </div>
            <div className="col-span-3">
              <RightSide data={data}/>
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
      </> : 
      <>
        <Loading/>
      </>
      }
    </div>
  );
};

export default People;