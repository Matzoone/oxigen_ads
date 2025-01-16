import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DarkCard from "./DarkCard";
import SlidingCards from "./SlidingCard";
import Header from "./Header";
const CompanyRed = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex justify-center">
        <DarkCard />
      </div>
      <div className="flex justify-center flex-col items-center w-full">
        <SlidingCards />
      </div>
    </>
  );
};

export default CompanyRed;
