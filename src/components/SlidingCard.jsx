// SlidingCards.jsx - بخش کارت‌های اسلایدی با دکمه‌های کنترلی و دیزاین جدید
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SlidingCard = ({ price, oldPrice, description, description1, btn, btn1 }) => {
    return (
        <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">{description}</div>
            <div className="text-lg mb-2">{description1}</div>
            <div className="text-lg mb-2 line-through">{oldPrice} تومان</div>
            <div className="text-xl font-semibold mb-4">{price} تومان</div>
            <button className="bg-blue-600 py-2 px-4 rounded-lg m-2">{btn}</button>
            <button className="bg-blue-600 py-2 px-4 rounded-lg m-2">{btn1}</button>
        </div>
    );
};

const SlidingCards = () => {
    const cards = [
        {
            description: 'یک ماهه نامحدود',
            description1: 'دو کاربره',
            price: '99',
            oldPrice: '199',
            btn: 'خرید فوری از درگاه پرداخت',
            btn1: 'خرید فوری از طریق پشتیبان تلگرام'
        },
        {
            description: 'یک ماهه نامحدود',
            description1: 'یک کاربره',
            price: '169',
            oldPrice: '235',
            btn: 'خرید فوری از درگاه پرداخت',
            btn1: 'خرید فوری از طریق پشتیبان تلگرام'
        },
        {
            description: 'سه ماهه نامحدود',
            description1: 'سه کاربره',
            price: '249',
            oldPrice: '350',
            btn: 'خرید فوری از درگاه پرداخت',
            btn1: 'خرید فوری از طریق پشتیبان تلگرام'
        },
        {
            description: 'سه ماهه نامحدود',
            description1: 'دو کاربره',
            price: '319',
            oldPrice: '399',
            btn: 'خرید فوری از درگاه پرداخت',
            btn1: 'خرید فوری از طریق پشتیبان تلگرام'
        },
        {
            description: 'شش ماهه نامحدود',
            description1: 'یک کاربره',
            price: '359',
            oldPrice: '449',
            btn: 'خرید فوری از درگاه پرداخت',
            btn1: 'خرید فوری از طریق پشتیبان تلگرام'
        },
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="flex items-center justify-center p-8 bg-blue-400 rounded-3xl shadow-md w-11/12">
            <div className="w-1/4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">سرویس های نامحدود اپ اختصاصی اکسیژن </h2>
            </div>
            <div className="w-3/4 relative">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Navigation]}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
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
                <button ref={prevRef} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
                    &#10095;
                </button>
                <button ref={nextRef} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
                    &#10094;
                </button>
            </div>
        </div>
    );
};

export default SlidingCards;
