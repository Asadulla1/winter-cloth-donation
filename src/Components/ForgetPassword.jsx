import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../router/Provider/AuthContext";

const ForgotPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();
  console.log(location);
  // Populate the email if passed via state
  useState(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (email) {
      forgetPassword(email)
        .then(() => {
          setTimeout(() => {
            toast.success("Password reset link sent to your email");
          }, 1000);
          window.location.href = "https://mail.google.com";
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.error("Please provide a valid email address.");
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  border border-gray-300 my-20">
      <h1 className="text-2xl font-bold text-center mt-5">Reset Password</h1>
      <form className="card-body" onSubmit={handleResetPassword}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Reset Password</button>
        </div>
        <div className="form-control mt-6 ">
          <Link to={"/auth/login"}>
            <button className="btn btn-primary w-full">Back to Login</button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
