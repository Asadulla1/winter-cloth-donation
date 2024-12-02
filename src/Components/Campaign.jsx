import { useNavigate } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const { title, image, division, description, contactInfo, status, id } =
    campaign;
  const navigate = useNavigate();
  const handleDonateBtn = () => {
    navigate(`/donationCampaigns/donationDetails/${id}`);
  };
  return (
    <div className="mb-10 ">
      <div className="card bg-base shadow-lg p-10 h-full border border-gray-300">
        <div>
          <img
            src={image}
            alt=""
            className="w-[530px] h-[375px] object-cover rounded-lg"
          />
        </div>
        <h1 className="text-xl font-bold my-5 text-[#FFA500]">{title}</h1>
        <p className="text-md my-2">{description}</p>
        <p className="my-2">Division: {division}</p>
        <p className="text-xl font-bold my-2">Contact Info: {contactInfo}</p>
        {status === "Active" ? (
          <>
            <p className="bg-green-300 max-w-fit p-2 my-3 mb-5 rounded-lg text-white">
              Status: {status}
            </p>
          </>
        ) : (
          <>
            <p className="bg-red-500 max-w-fit p-2 my-3 mb-5 rounded-lg text-white">
              Status: {status}
            </p>
          </>
        )}
        <button className="btn btn-lg" onClick={handleDonateBtn}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Campaign;
