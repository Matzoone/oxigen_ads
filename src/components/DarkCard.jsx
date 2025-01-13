import DarkCardComponent from "./DarkCardComponent";
import tex from "../assets/v2ry.png";
import logo1 from "../assets/logo1.png";
import sup from "../assets/sup.png";
import pay from "../assets/pay.png"

const DarkCard = () => {
    const darkCards = [


        {
            icon: <img src={tex} alt="Logo1" className="w-4/5" />,
            title: 'خرید فوری و درگاه ریالی',
            description: 'تحویل آنی و پرداخت راحت با درگاه‌های معتبر'
        },
        {
            icon: <img src={logo1} alt="Logo1" className="w-4/5" />,
            title: 'خرید فوری و درگاه ریالی',
            description: 'تحویل آنی و پرداخت راحت با درگاه‌های معتبر'
        },
        {
            icon: <img src={sup} alt="Support" className="w-4/5" />,
            title: 'اپ اختصاصی اکسپرس',
            description: 'نسخه اندروید با 50 سرور پرقدرت و پایدار'
        },
        {
            icon: <img src={pay} alt="Payment" className="w-4/5" />,
            title: 'سرویس V2ray',
            description: 'قابل استفاده برای اندروید و ویندوز با سرعت بالا'
        },
    ];

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8  justify-center w-11/12">
            {darkCards.map((card, index) => (
                <DarkCardComponent
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default DarkCard;