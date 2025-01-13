
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import DarkCard from "./DarkCard";
import SlidingCards from "./SlidingCard";
const CompanyRed = () => {
  return (
    <>
      <div className="flex justify-center">
        <DarkCard />
      </div>
      <div className="flex justify-center">
        <SlidingCards />
      </div>
    </>
  );
};

export default CompanyRed;



