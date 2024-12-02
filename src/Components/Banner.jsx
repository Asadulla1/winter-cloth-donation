import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bannerImage from "../assets/Banner_1.png";
import bannerImage2 from "../assets/Banner_2.png";
import bannerImage3 from "../assets/Banner_3.png";
import bannerImage4 from "../assets/Banner_4.png";
import { Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto p-5 my-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={bannerImage}
            alt=""
            className="w-full h-[300px] lg:h-[800px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerImage2}
            alt=""
            className="w-full h-[300px] lg:h-[800px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerImage3}
            alt=""
            className="w-full h-[300px] lg:h-[800px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerImage4}
            alt=""
            className="w-full h-[300px] lg:h-[800px] rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
