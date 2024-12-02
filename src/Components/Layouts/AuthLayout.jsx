import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-4/5 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center w-4/5 mx-auto py-5">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
