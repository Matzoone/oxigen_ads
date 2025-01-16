import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DarkCard from "./DarkCard";
import SlidingCards from "./SlidingCard";
import Header from "./Header";
import { useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const CompanyRed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="bg-white rounded-full w-fit md:hidden p-3 sticky top-3 right-3 z-50">
        <Squares2X2Icon width={24} onClick={toggleModal} />
      </div>
      <div className="max-md:-mt-12">
        <Header toggleModal={toggleModal} isModalOpen={isModalOpen} />
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
