import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../router/Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        if (location.path !== null && location.path !== undefined) {
          navigate(`${location?.state?.pathname}`);
        } else {
          navigate("/");
        }
        setTimeout(() => {
          toast.success("Login Successful");
        }, 2000);
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        if (location?.state?.pathname) {
          navigate(location.state.pathname);
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
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10 border border-gray-300 ">
      <h1 className="text-2xl font-bold text-center mt-5">Please Login</h1>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label className="block font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />
          <Link
            to={"/auth/forgetPassword"}
            className="my-2 underline"
            state={{ email: emailAddress }}
          >
            Forget Password?
          </Link>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="my-2 font-semibold">
          New to our charity? Please{" "}
          <Link to={"/auth/register"}>
            <span className="text-red-600">Register</span>
          </Link>
        </p>
      </form>
      <div className="text-center p-3">
        <h2 className="text-xl font-bold">OR</h2>
        <button
          className="btn btn-lg my-5 bg-[#3f00e7] text-white"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle />
          Login With Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
