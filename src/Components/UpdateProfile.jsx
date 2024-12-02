import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../router/Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpdateProfile = () => {
  const { setProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(name, photo)
      .then(() => {
        setTimeout(() => {
          toast.success("Updated Successfully");
        }, 2000);
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <header className="w-4/5 mx-auto py-5">
        <Navbar />
      </header>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
              Update Profile
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Photo URL</label>
                <input
                  type="url"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter photo URL"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Save Changes
              </button>
            </form>
            <button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 my-5"
              onClick={() => navigate("/")}
            >
              Back To Home
            </button>
          </div>
          <ToastContainer />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UpdateProfile;
