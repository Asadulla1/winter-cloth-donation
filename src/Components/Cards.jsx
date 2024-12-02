import Aos from "aos";
import { useEffect } from "react";

const Cards = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div data-aos="flip-left">
      <div className="hidden lg:flex justify-around items-center my-10">
        <div className=" w-[100px]  border border-orange-400 h-[100px] rounded-full md:flex items-center justify-center bg-[#FFA500]">
          <h1 className=" text-4xl font-bold text-white">1</h1>
        </div>
        <div className="w-[100px]  border border-blue-900 h-[100px] rounded-full flex items-center justify-center bg-blue-900">
          <h1 className=" text-4xl font-bold text-white">2</h1>
        </div>
        <div className="w-[100px]  border border-green-900 h-[100px] rounded-full flex items-center justify-center bg-green-900">
          <h1 className=" text-4xl font-bold text-white">3</h1>
        </div>
      </div>
      {/* Card section  */}
      <div className="lg:flex justify-center items-center gap-10 space-y-5">
        {/* card 1  */}
        <div className="card bg-white shadow-lg p-10 text-justify">
          <h1 className="text-2xl text-center my-5 font-bold">
            Gather Your Unused Clothes
          </h1>
          <p>
            Take a moment to look through your wardrobe. You’ll be surprised by
            how many gently used clothes you no longer wear, but that can still
            bring comfort to someone else. Whether it’s that cozy sweater you no
            longer need, the jackets collecting dust, or the shoes you haven’t
            worn in ages—everything counts. Remember, every donation helps
            create warmth and hope.
          </p>
        </div>
        {/* Card 2  */}
        <div className="card bg-white shadow-lg p-10 text-justify">
          <h1 className="text-2xl text-center my-5 font-bold">
            Drop Off or Request Pickup
          </h1>
          <p>
            <span className="font-bold">Collection Points:</span> We’ve made
            donating as easy as possible with convenient collection points
            scattered throughout the city. Simply visit any of our designated
            drop-off locations, and you’ll be one step closer to making a
            meaningful impact.
          </p>
          <p>
            <span className="font-bold">Home Pickup:</span> For your
            convenience, if you can’t make it to a collection point, we offer
            home pickup services. Just schedule a pickup at your convenience,
            and our team will come to your door to collect your donations. It’s
            simple, hassle-free, and makes donating easier than ever.
          </p>
        </div>
        {/* Card-3  */}
        <div className="card bg-white shadow-lg p-10 text-justify">
          <h1 className="text-2xl text-center my-5 font-bold">
            Make a Lasting Impact
          </h1>
          <p>
            After your donations are collected, they will be carefully sorted
            and distributed to individuals and families in need, especially in
            rural and underserved regions. These clothes will not only provide
            warmth but will also offer dignity to those who may be going through
            difficult times. Your donation, no matter how small, can help
            transform someone’s life, bringing them hope and the comfort they
            deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
