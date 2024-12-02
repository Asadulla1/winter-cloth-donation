import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../Components/Layouts/HomeLayout";
import DonationCampaignsLayout from "../Components/Layouts/DonationCampaignsLayout";
import DonationDetails from "../Components/DonationDetails";
import AuthLayout from "../Components/Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Dashboard from "../Components/Dashboard";
import UpdateProfile from "../Components/UpdateProfile";
import Error from "../Components/Error";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ForgotPassword from "../Components/ForgetPassword";
import HowItWorksLayout from "../Components/Layouts/HowItWorksLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/donationCampaigns",
    element: <DonationCampaignsLayout />,
    children: [],
  },
  {
    path: "/donationCampaigns/donationDetails/:id",
    element: (
      <PrivateRoute>
        <DonationDetails></DonationDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgetPassword",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard/updateProfile",
    element: <UpdateProfile />,
  },
  {
    path: "/howtohelp",
    element: <HowItWorksLayout />,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

const Route = () => {
  return <div></div>;
};

export default Route;
