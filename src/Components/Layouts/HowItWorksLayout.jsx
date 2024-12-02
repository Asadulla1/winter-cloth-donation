import Footer from "../Footer";
import HowItWorks from "../HowItWorks";
import Navbar from "../Navbar";

const HowItWorksLayout = () => {
  return (
    <>
      <header className="w-4/5 mx-auto py-5">
        <Navbar />
      </header>
      <main>
        <HowItWorks />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HowItWorksLayout;
