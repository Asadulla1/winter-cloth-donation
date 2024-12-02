import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../router/Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/donationCampaigns"}>Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to={"/howtohelp"}>How to help</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  const handleLogin = () => {
    navigate("/auth/login");
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="navbar bg-base-100" data-aos="fade-up">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mx-3"
          >
            {links}
          </ul>
        </div>
        <img src={logo} alt="logo_png" className="w-[230px]" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-3">{links}</ul>
      </div>

      <div className="navbar-end">
        {user && (
          <img
            src={user.photoURL}
            className="w-[60px] rounded-full mx-5 hidden md:block"
          />
        )}
        {user ? (
          <>
            <button className="btn" onClick={handleLogOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
