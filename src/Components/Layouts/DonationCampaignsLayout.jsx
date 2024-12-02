import DonationCampaigns from "../DonationCampaigns";
import Footer from "../Footer";
import Navbar from "../Navbar";

const DonationCampaignsLayout = () => {
  return (
    <div>
      <header className="w-4/5 mx-auto py-5">
        <Navbar />
      </header>
      <main className="w-4/5 mx-auto my-5">
        <DonationCampaigns />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DonationCampaignsLayout;
