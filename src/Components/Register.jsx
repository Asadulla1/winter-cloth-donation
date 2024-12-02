import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../router/Provider/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, setProfile, googleLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!lengthRegex.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validatePassword(formData.password);
    if (error) {
      setPasswordError(error);
      toast.error(error);
      return;
    }

    if (
      formData.name &&
      formData.email &&
      formData.photoURL &&
      formData.password
    ) {
      const email = formData.email;
      const pass = formData.password;
      const name = formData.name;
      const photoURL = formData.photoURL;
      createUser(email, pass)
        .then((res) => {
          setProfile(name, photoURL);
          toast.success("Registration successful!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
          console.log(res.user);
        })
        .catch((error) => toast.error(error.message));
    } else {
      toast.error("Please fill out all fields.");
    }
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        if (location.path !== null && location.path !== undefined) {
          navigate(`${location?.state?.pathname}`);
        } else {
          navigate("/");
        }
        setTimeout(() => {
          toast.success("Login Successful");
        }, 1000);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center items-center w-[900px] ">
      <div className="w-full rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Please Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Photo URL Field */}
          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
              required
            />
          </div>
          {/* Password Field */}
          <div className="relative">
            <label className="block font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={(e) => {
                setPasswordError("");
                handleInputChange(e);
              }}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-purple-700 hover:bg-purple-800"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
        <div className="text-center p-3">
          <h2 className="text-xl font-bold">OR</h2>
          <button
            className="btn btn-lg my-5  bg-purple-700 hover:bg-purple-800 text-white"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle />
            Login With Google
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
