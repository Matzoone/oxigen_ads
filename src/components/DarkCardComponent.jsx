

const DarkCardComponent = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center ">
      <div className="text-yellow-400 text-4xl mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <p className="text-center text-md text-gray-300 mb-4">{description}</p>
    </div>
  );
};

export default DarkCardComponent;
