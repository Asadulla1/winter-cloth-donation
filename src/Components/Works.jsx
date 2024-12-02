import { useEffect } from "react";
import thought from "../assets/thought.png";
import Cards from "./Cards";
import "aos/dist/aos.css";
import Aos from "aos";
const Works = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="my-10 w-4/5 mx-auto">
      <div className="md:flex items-center gap-20">
        <div data-aos="fade-right">
          <img src={thought} alt="how_we_works" className="w-[600px] " />
        </div>
        <div data-aos="fade-left">
          <h1 className="text-7xl font-extrabold text-[#FFA500]">
            How We Works
          </h1>
        </div>
      </div>
      <Cards />
      <div className="my-20 ">
        <h1 className="text-5xl text-center text-orange-400 font-bold">
          Supported Division
        </h1>
        <div>
          <ul className="list-decimal text-2xl leading-10 md:flex gap-10 justify-center my-10 flex-wrap">
            <div className="card shadow-lg p-10 text-green-700 font-bold my-3">
              <li>Dhaka Division</li>
            </div>
            <div className="card shadow-lg p-10 text-green-700 font-bold my-3">
              <li>Barisal Division</li>
            </div>
            <div className="card shadow-lg p-10 text-green-700 font-bold my-3">
              <li>Khulna Division</li>
            </div>
            <div className="card shadow-lg p-10 text-green-700 font-bold my-3">
              <li>Rangpur Division</li>
            </div>
            <div className="card shadow-lg p-10 text-green-700 font-bold my-3">
              <li>Sylhet Division</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
