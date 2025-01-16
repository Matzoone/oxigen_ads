import Modal from "./modal";

const Header = ({ toggleModal, isModalOpen }) => {
  const headerItems = [
    <li key="1">
      <a href="#">تعرفه اپ اکسیژن</a>
    </li>,
    <li key="2">
      <a href="#">تعرفه v2ray</a>
    </li>,
    <li key="3">
      <a href="#">پشتیبانی تلگرام</a>
    </li>,
    <li key="4">
      <a href="#">ربات تلگرام اپ اختصاصی</a>
    </li>,
    <li key="5">
      <a href="#">ربات تلگرام v2ray</a>
    </li>,
    <li key="6" className="text-black bg-white rounded-3xl py-[6px] px-2">
      <a href="#">دانلود اپلیکیشن اکسیژن</a>
    </li>,
  ];

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        headerItems={headerItems}
      />
      <div className="flex flex-col bg-[#6b6b6b]">
        <div>
          <ul className="text-white flex gap-4 font-black m-5 items-center max-md:hidden">
            {headerItems.map((item) => (
              <>{item}</>
            ))}
          </ul>
        </div>
        <div className="flex justify-center text-5xl text-white text-thick3 text-word gap-2 my-10 max-md:mt-16 max-md:text-3xl">
          جشنواره تخفیف
          <p className="text-[#3bccf0]">30</p>
          تا
          <p className="text-[#3bccf0]">50</p>
          درصدی
        </div>
        <div>
          <p className="border border-blue-50 text-blue-50 rounded-xl w-fit py-2 px-3 m-auto">
            اول تست کن بعد با خیال راحت خرید کن
          </p>
        </div>
        <div className="flex m-auto mt-5 gap-5  rounded-lg p-4">
          <button className="border border-gray-500 p-4 rounded-xl bg-blue-900 text-white hover:scale-110 transition font-black">
            تست رایگان اپ
          </button>
          <button className="border border-gray-500 p-4 rounded-xl bg-blue-900 text-white hover:scale-110 transition font-black">
            تست رایگان v2ray
          </button>
        </div>
        <div className="flex justify-between my-10">
          <img src="/public/600300.png" alt="" />
          <img src="/public/6003.png" alt="" className="max-md:hidden" />
        </div>
      </div>
    </>
  );
};

export default Header;
