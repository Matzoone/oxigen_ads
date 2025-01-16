import { useState, useEffect } from "react";

const Modal = ({ open, onClose }) => {
  const [show, setShow] = useState(false);

  const headerItems = [
    <a href="#" key="1">
      تعرفه اپ اکسیژن
    </a>,
    <a href="#" key="2">
      تعرفه v2ray
    </a>,
    <a href="#" key="3">
      پشتیبانی تلگرام
    </a>,
    <a href="#" key="4">
      ربات تلگرام اپ اختصاصی
    </a>,
    <a href="#" key="5">
      ربات تلگرام v2ray
    </a>,
  ];

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  }, [open]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-start items-center z-50 transition duration-300 ${
        (open ? "opacity-100" : "opacity-0",
        !open ? "opacity-0" : "opacity-100")
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-0 rounded-lg shadow-lg w-1/2 h-full rtl transform transition-all duration-300 ${
          (open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
          !open ? "translate-x-4 opacity-0" : "translate-x-0 opacity-100")
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 left-2 text-xl text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <header className="mt-10 h-[10%] justify-center items-center flex text-white">
          <img src="/public/logo111.png" alt="" width={80} />
        </header>
        <ul className=" flex gap-4 font-black m-5 items-center flex-col">
          {headerItems.map((item, index) => (
            <li
              className="text-white bg-blue-500 rounded-2xl hover:bg-blue-300 w-full px-6 text-center py-2"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
