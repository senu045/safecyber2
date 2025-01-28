import { useNavigate } from "react-router-dom";
const Card = ({ topic, imageSrc, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <div
      onClick={handleClick}
      className="w-80 h-96 bg-shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-transparent hover:border-blue-500"
    >
      <img className="w-full h-40 object-cover" src={imageSrc} alt={topic} />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-500">{topic}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
