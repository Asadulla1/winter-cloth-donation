import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SuccessStory from "./SuccessStory";
import Volunteer from "./Volunteer";
import Works from "./Works";

const Home = () => {
  return (
    <div data-aos="fade-down">
      <header className="w-4/5 mx-auto py-5">
        <Navbar></Navbar>
        <section className="my-10">
          <h1 className="text-4xl font-bold text-center text-[#FFA500]">
            Donate Your Unused Clothes – It Might Not Matter to You, But It
            Makes a World of Difference to Those in Need!
          </h1>
          <Banner />
        </section>
      </header>

      <main>
        <About />
        <Works />
        <SuccessStory />
        <Volunteer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
