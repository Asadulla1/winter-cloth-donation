import Rina from "../assets/rina.jpg";
import jahangir from "../assets/jahangir.jpg";
const SuccessStory = () => {
  return (
    <div className="my-20 w-4/5 mx-auto">
      <h1 className="text-6xl font-bold text-[#FFA500] text-center">
        Our Success Story
      </h1>
      <h3 className="text-2xl font-bold text-blue-900 text-center my-10">
        Every donation makes a difference, and here are the real stories of how
        your generosity has impacted lives.
      </h3>
      <p className="text-xl font-semibold italic">
        <span className="font-extrabold"> At Cozy Care Initiative,</span> we
        believe that small acts of kindness can create huge transformations. The
        clothes you donate don’t just fill a wardrobe—they fill hearts with
        hope. Here are some of the inspiring stories that show how your
        donations have made a world of difference in the lives of people in
        need.
      </p>
      {/* success Card  */}
      <div className="my-20">
        {/* Card 1 */}
        <div className="card bg-base shadow-lg p-10 border border-gray-300 my-10">
          <div className="flex items-center gap-5">
            <img src={Rina} alt="rina" className="w-[80px] rounded-full" />
            <h1 className="text-2xl font-bold ">
              #Rina’s Story – A New Beginning in the Village
            </h1>
          </div>
          <p className="text-xl my-5 italic">
            I was struggling to keep my family warm during the cold months. When
            I received the clothes from Cozy Care Initiative, it felt like a
            miracle. The warmth they gave us was more than just physical—it
            restored our dignity. We can now face the future with hope.
          </p>
          <p className="text-2xl my-5 font-semibold">
            — Rina, Mother of 3, Sylhet Division
          </p>
          <p className="text-xl my-5">
            <span className="font-bold">Before:</span> Rina and her children
            used to wear torn, ill-fitting clothes that left them vulnerable
            during the chilly winter months. They lived in a rural village,
            where resources were scarce, and every little bit of help was
            precious.
          </p>
          <p className="text-xl my-5">
            <span className="font-bold">After:</span> Thanks to the kindness of
            people like you, Rina and her family now have enough warm clothing
            for the winter. The feeling of receiving new clothes gave them a
            sense of comfort, stability, and hope for the future.
          </p>
        </div>
        {/* Card -2  */}
        <div className="card bg-base shadow-lg p-10 border border-gray-300 my-10">
          <div className="flex items-center gap-5">
            <img src={jahangir} alt="" className="w-[80px] rounded-full" />
            <h1 className="text-2xl font-bold ">
              #Jahangir’s Story – The Gift of Dignity
            </h1>
          </div>
          <p className="text-xl my-5 italic">
            I never imagined that a simple donation could change my life so
            profoundly. I’m now able to attend job interviews with confidence,
            knowing I look presentable. These clothes have given me more than
            warmth; they’ve given me a second chance.
          </p>
          <p className="text-2xl my-5 font-semibold">
            — Jahangir, Job Seeker, Rajshahi Division
          </p>
          <p className="text-xl my-5">
            <span className="font-bold">Before:</span> Jahangir, struggling to
            find employment, couldn’t afford proper clothes for interviews. He
            was stuck in a cycle of poverty with little opportunity to move
            forward.
          </p>
          <p className="text-xl my-5">
            <span className="font-bold">After:</span> Through the Cozy Care
            Initiative, Jahangir received a new set of clothes for his
            interviews. With confidence, he was able to secure a job, and he’s
            now working towards building a brighter future for himself and his
            family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
