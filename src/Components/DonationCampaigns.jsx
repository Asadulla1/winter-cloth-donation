import { useEffect, useState } from "react";
import Campaign from "./Campaign";

const DonationCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("/campaignData.json")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full ">
      {campaigns.map((campaign) => (
        <Campaign key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default DonationCampaigns;
