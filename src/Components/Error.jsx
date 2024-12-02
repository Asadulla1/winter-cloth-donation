import { useNavigate } from "react-router-dom";
import errorPage from "../assets/undraw_Page_not_found_re_e9o6.png";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-6xl text-red-600 text-center my-32 font-extrabold">
        Page Is Not Found
      </h1>
      <div className="text-center">
        <button className="btn btn-lg" onClick={() => navigate("/")}>
          Go Back to Home
        </button>
      </div>
      <div className="flex justify-center my-24">
        <img src={errorPage} alt="" />
      </div>
    </>
  );
};

export default Error;
