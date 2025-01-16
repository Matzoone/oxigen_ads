import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { addCommas, digitsEnToFa } from "persian-tools2";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const SlidingCard = ({
  price,
  oldPrice,
  description,
  description1,
  btn,
  btn1,
}) => {
  const formattedPrice = digitsEnToFa(addCommas(price)) + " تومان";
  const formattedOldPrice = digitsEnToFa(addCommas(oldPrice)) + " تومان";

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center mt-4">
      <div className="text-2xl font-bold mb-2">{description}</div>
      <div className="text-lg mb-2">{description1}</div>
      <div className="text-lg mb-2 line-through text-gray-400">
        {formattedOldPrice}
      </div>
      <div className="text-xl font-semibold mb-4">{formattedPrice}</div>
      <button className="bg-blue-600 py-2 px-4 rounded-2xl text-lg m-2 w-full font-black text-white hover:scale-110 transition hover:border-blue-600 hover:bg-white hover:text-blue-600 border">
        {btn}
      </button>
      <button className="bg-blue-600 py-2 px-4 rounded-2xl text-lg m-2 w-full font-black text-white  hover:scale-110 transition hover:border-blue-600 hover:bg-white hover:text-blue-600 border">
        {btn1}
      </button>
    </div>
  );
};

const SlidingCards = () => {
  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);

  const mainCards = [
    {
      Title: (
        <p className="whitespace-normal text-xl gap-1 font-black text-thick text-center">
          <span>لیست سرویس های نامحدود</span>{" "}
          <span className="text-red-500 ml-1">اپ اختصاصی اکسیژن</span>
        </p>
      ),
      desc: (
        <p className="text-sm !text-slate-800 my-3 gap-1 text-thick">
          (مخصوص اندروید)
        </p>
      ),
      body2: " سرویس های نامحدود ",
      body1: "اپ اختصاصی اکسیژن",
      bodyDesc: "مخصوص اندروید",
      img: "/public/v2ray.png",
      cards: [
        {
          description: "یک ماهه نامحدود",
          description1: "دو کاربره",
          price: "99000",
          oldPrice: "199000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "یک ماهه نامحدود",
          description1: "یک کاربره",
          price: "169000",
          oldPrice: "235000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "سه ماهه نامحدود",
          description1: "سه کاربره",
          price: "249000",
          oldPrice: "350000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "سه ماهه نامحدود",
          description1: "دو کاربره",
          price: "319000",
          oldPrice: "399000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "شش ماهه نامحدود",
          description1: "یک کاربره",
          price: "359000",
          oldPrice: "449000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
      ],
    },
  ];

  const mainCards2 = [
    {
      Title: (
        <p className="flex text-xl gap-1 font-black text-thick mt-16 flex-nowrap whitespace-nowrap text-center">
          <p> لیست سرویس های</p>
          <p className="text-red-500">v2ray</p>
          <p>برای همه پلتفرم ها</p>
        </p>
      ),
      desc: (
        <p className="text-sm !text-slate-800 my-3 gap-1 text-thick">
          (ایفون-ویندوز-اندروید)
        </p>
      ),
      body2: " سرویس های نامحدود  2",
      body1: " اپ اختصاصی اکسیژن 2",
      bodyDesc: "ایفون-ویندوز-اندروید",
      img: "/public/logo111.png",
      cards: [
        {
          description: "یک ماهه نامحدود",
          description1: "سه کاربره",
          price: "159000",
          oldPrice: "199000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "سه ماهه نامحدود",
          description1: "یک کاربره",
          price: "249000",
          oldPrice: "350000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "شش ماهه نامحدود",
          description1: "دو کاربره",
          price: "359000",
          oldPrice: "449000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "سه ماهه نامحدود",
          description1: "یک کاربره",
          price: "249000",
          oldPrice: "350000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
        {
          description: "شش ماهه نامحدود",
          description1: "دو کاربره",
          price: "359000",
          oldPrice: "449000",
          btn: "خرید فوری از درگاه پرداخت",
          btn1: "خرید فوری از طریق پشتیبان تلگرام",
        },
      ],
    },
  ];

  return (
    <>
      {mainCards.map((slider, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          {slider.Title}
          {slider.desc}
          <div className="flex items-center justify-center p-12 bg-blue-400 rounded-3xl shadow-md w-11/12 max-md:p-0">
            <div className="w-1/4 text-center max-md:hidden">
              <h2 className="text-[28px] mb-4 text-white text-thick">
                <p>{slider.body1}</p>
                <p>{slider.body2}</p>
                <p className="text-lg mt-4 font-thin">{slider.bodyDesc}</p>
                <img
                  src={slider.img}
                  alt={slider.img}
                  className="w-[200px] m-auto p-8 pb-0 mt-8"
                />
              </h2>
            </div>
            <div className="w-3/4 relative">
              <button
                ref={prevRef1}
                className="absolute w-10 -left-11 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black rounded-full z-10 transition hover:scale-125"
              >
                <ChevronLeftIcon />
              </button>
              <button
                ref={nextRef1}
                className="absolute w-10 -right-11 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black rounded-full z-10 transition hover:scale-125"
              >
                <ChevronRightIcon />
              </button>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  prevEl: prevRef1.current,
                  nextEl: nextRef1.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef1.current;
                  swiper.params.navigation.nextEl = nextRef1.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                modules={[Navigation]}
              >
                {slider.cards.map((card, cardIndex) => (
                  <SwiperSlide key={cardIndex}>
                    <SlidingCard
                      price={card.price}
                      oldPrice={card.oldPrice}
                      description={card.description}
                      description1={card.description1}
                      btn={card.btn}
                      btn1={card.btn1}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
      {mainCards2.map((slider, index) => (
        <div key={index} className="flex flex-col items-center w-full mb-20">
          {slider.Title}
          {slider.desc}
          <div className="flex items-center justify-center p-12 bg-blue-400 rounded-3xl shadow-md w-11/12 max-md:p-0">
            <div className="w-1/4 text-center max-md:hidden">
              <h2 className="text-[28px] mb-4 text-white text-thick">
                <p>{slider.body1}</p>
                <p>{slider.body2}</p>
                <p className="text-lg mt-4 font-thin">{slider.bodyDesc}</p>
                <img
                  src={slider.img}
                  alt={slider.img}
                  className="w-[200px] m-auto p-8 pb-0 mt-8"
                />
              </h2>
            </div>
            <div className="w-3/4 relative">
              <button
                ref={nextRef2}
                className="absolute -right-11 w-10 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black rounded-full z-10 transition hover:scale-125"
              >
                <ChevronRightIcon />
              </button>
              <button
                ref={prevRef2}
                className="absolute -left-11 w-10 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black rounded-full z-10 transition hover:scale-125"
              >
                <ChevronLeftIcon />
              </button>

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  prevEl: prevRef2.current,
                  nextEl: nextRef2.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef2.current;
                  swiper.params.navigation.nextEl = nextRef2.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                modules={[Navigation]}
              >
                {slider.cards.map((card, cardIndex) => (
                  <SwiperSlide key={cardIndex}>
                    <SlidingCard
                      price={card.price}
                      oldPrice={card.oldPrice}
                      description={card.description}
                      description1={card.description1}
                      btn={card.btn}
                      btn1={card.btn1}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SlidingCards;
