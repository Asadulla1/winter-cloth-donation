const Volunteer = () => {
  return (
    <div className="my-10 w-4/5 mx-auto">
      <h1 className="text-5xl text-center text-[#FFA500] font-bold">
        How You Can Help Beyond Donations - Volunteer Opportunities
      </h1>
      <h3 className="text-2xl text-center text-blue-900 font-bold my-10">
        Want to do more? Join us in spreading warmth and care!
      </h3>
      <em className="text-2xl font-semibold">
        <span className="font-extrabold">At Cozy Care Initiative,</span> we’re
        not just collecting clothes—we’re building a community of compassion.
        There are many ways you can make an impact beyond donating your clothes.
        Whether you have a few hours to spare or specific skills to offer, your
        involvement will help us reach more people in need and create lasting
        change.
      </em>
      {/* Card Div  */}
      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-center">
        {/* Card 1 */}
        <div className="card shadow-lg border border-gray-300 p-10 h-full">
          <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
            Volunteer Your Time
          </h2>
          <div>
            <p className="text-justify my-5">
              We’re always in need of passionate volunteers to help with the
              day-to-day tasks that make our initiative a success. Here’s how
              you can contribute
            </p>
            <ul className="list-decimal list-inside text-justify">
              <li className="font-bold text-[#FFA500] my-2">
                Clothing Collection Drives:
              </li>
              <p>
                Assist us in organizing donation drives in your community or
                local area. Your effort will help gather items and raise
                awareness about the cause.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Sorting and Packing Donations:
              </li>
              <p>
                Lend a hand in our sorting centers to organize and pack
                donations. Your work will ensure that the clothes are properly
                categorized and ready to be sent to families in need.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Delivery Assistance:
              </li>
              <p>
                Help us by delivering collected clothes to those in need,
                especially in rural and hard-to-reach areas.
              </p>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card shadow-lg border border-gray-300 p-10 h-full">
          <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
            Skills-Based Volunteering
          </h2>
          <div>
            <p className="text-justify my-5">
              Do you have special skills that could benefit our cause? Whether
              you’re a photographer, graphic designer, event planner, or web
              developer, we can use your expertise to spread the message of the
              Cozy Care Initiative far and wide.
            </p>
            <ul className="list-decimal list-inside text-justify">
              <li className="font-bold text-[#FFA500] my-2">
                Photography and Videography:
              </li>
              <p>
                Help capture the moments that matter, from donation drives to
                success stories, and create powerful content for our website and
                social media.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Web Development and Graphic Design:
              </li>
              <p>
                Contribute to our online presence by helping to design
                promotional materials or enhance our website.
              </p>
              <li className="font-bold text-[#FFA500] my-2 ">
                Marketing and Outreach:
              </li>
              <p>
                Spread the word! Your skills in marketing and social media can
                help us raise awareness and attract more supporters.
              </p>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card shadow-lg border border-gray-300 p-10 h-full">
          <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
            Corporate Partnerships
          </h2>
          <div>
            <p className="text-justify my-5">
              Is your company looking to give back? We welcome corporate
              partners who can help us with
            </p>
            <ul className="list-decimal list-inside text-justify">
              <li className="font-bold text-[#FFA500] my-2">
                In-kind Donations:
              </li>
              <p>
                Donate office supplies, logistics support, or transportation for
                donations.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Team Volunteering:{" "}
              </li>
              <p>
                Organize a company-wide volunteer event, where your team can get
                involved in sorting clothes or organizing community outreach
                activities.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Delivery Assistance:
              </li>
              <p>
                Help us by delivering collected clothes to those in need,
                especially in rural and hard-to-reach areas.
              </p>
              <li className="font-bold text-[#FFA500] my-2">
                Logistics and Transportation Support:
              </li>
              <p>
                {" "}
                If your company has resources such as delivery vehicles, storage
                facilities, or logistical expertise, this can significantly
                enhance our efficiency in collecting, sorting, and distributing
                donations.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
