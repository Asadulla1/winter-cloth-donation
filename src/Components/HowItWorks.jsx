import img from "../assets/Banner_2.png";
const HowItWorks = () => {
  return (
    <>
      <div className="w-4/5 mx-auto md:flex items-center bg-teal-600 text-white p-10 rounded-lg shadow-lg gap-10">
        {/* Left Section: Text */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Who Are We Helping?</h2>
          <p className="text-lg">
            We are dedicated to helping poor rural people in Bangladesh. Your
            donations provide essential clothing and resources to families in
            need, ensuring they stay warm and healthy during the harsh winter
            season.
          </p>
          <button className="btn btn-error">Learn More</button>
        </div>

        <div className="md:w-1/2 flex justify-center my-5">
          <img
            src={img}
            alt="Helping Rural People"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          How Does It Work?
        </h2>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold p-10">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold">Gather Your Donations</h3>
              <p className="text-gray-600">
                Collect gently used or new winter items like jackets, sweaters,
                scarves, gloves, and blankets. Make sure theyre clean and in
                good condition.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold p-10">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Schedule a Drop-Off or Pick-Up
              </h3>
              <p className="text-gray-600">
                Call{" "}
                <span className="text-blue-600 font-medium">
                  +880-1234-567890
                </span>{" "}
                or{" "}
                <a href="#" className="text-blue-600 underline">
                  schedule online
                </a>{" "}
                for a pick-up. Alternatively, drop off your donations at the
                nearest center.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold p-10">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Donate and Make a Difference
              </h3>
              <p className="text-gray-600">
                Place your items in a box or bag. For pick-ups, leave them
                outside your home on the scheduled date. Together, we can make
                this winter warmer for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
