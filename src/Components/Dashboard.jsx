import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../router/Provider/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;
  return (
    <>
      <header className="w-4/5 mx-auto py-5">
        <Navbar />
      </header>
      <main>
        <div className="py-52  flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-700">
                Welcome, <span className="text-purple-600">{displayName}!</span>
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={photoURL}
                alt="User Profile"
                className="w-24 h-24 rounded-full shadow-lg border-2 border-purple-500"
              />
              <h2 className="text-xl font-semibold mt-4">{name}</h2>
              <p className="text-gray-500">{email}</p>
            </div>
            <button
              onClick={() => navigate("/dashboard/updateProfile")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Update Profile
            </button>
            <button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => navigate("/")}
            >
              Back To Home
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;
