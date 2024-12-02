import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DonationDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const res = useParams();
  const { id: param_id } = res;
  const parsed_param_id = parseInt(param_id);

  useEffect(() => {
    setLoading(true);
    fetch("/campaignData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const findFilteredCampaign = data.find(
    (donationCategory) => donationCategory.id === parsed_param_id
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!findFilteredCampaign) {
    return <div>Campaign not found</div>;
  }

  const { title, image, division, description, contactInfo, status, detailed } =
    findFilteredCampaign;

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you! We will reach your destination soon");

    e.target.reset();
  };

  return (
    <div>
      <header className="w-4/5 mx-auto py-5">
        <Navbar />
      </header>
      <main className="my-10 w-4/5 mx-auto">
        {/* Campaign Details */}
        <div>
          <img src={image} alt="" className="w-[1000px] mb-5 rounded-lg" />
        </div>
        <h1 className="text-5xl font-bold my-5">{title}</h1>
        <h2 className="text-xl font-semibold my-5">{description}</h2>
        <p className="bg-green-300 max-w-fit p-3 text-white rounded-lg font-bold my-5">
          Status: {status}
        </p>
        <p className="text-xl my-5">Division: {division}</p>
        <p className="text-xl my-5 text-justify">Details: {detailed}</p>
        <p className="text-md my-5  font-extrabold">
          Contact Info: {contactInfo}
        </p>

        {/* Donation Form */}
        <section className="mt-10 ">
          <h3 className="text-5xl font-extrabold mb-10 text-center text-[#FFA500]">
            Donation Form
          </h3>
          <div className="flex justify-center my-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
              <label>
                Quantity of Items:
                <input
                  type="number"
                  name="quantity"
                  placeholder="e.g., 2"
                  className="border p-2 w-full"
                  required
                />
              </label>
              <label>
                Item Type:
                <input
                  type="text"
                  name="itemType"
                  placeholder="e.g., Jacket, Blanket"
                  className="border p-2 w-full"
                  required
                />
              </label>
              <label>
                Pickup Location:
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                  className="border p-2 w-full"
                  required
                />
              </label>
              <label>
                Additional Notes:
                <textarea
                  name="notes"
                  placeholder="Any additional information (optional)"
                  className="border p-2 w-full"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
