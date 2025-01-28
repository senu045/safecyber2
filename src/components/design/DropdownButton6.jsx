import { useState } from "react";
import ButtonSvg from "./ButtonSvg"; // Adjust the import path as needed
import Quiz6 from "./Quiz6"; // Import the Quiz3 component

const DropdownButton6 = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleYesClick = () => {
    setShowQuiz(true);
    setDropdownVisible(false);
  };

  const handleNoClick = () => {
    setDropdownVisible(false);
  };

  const exitQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <div className="relative">
      <button
        className="relative px-6 py-3 overflow-hidden rounded-full bg-transparent border-2 border-transparent"
        onClick={handleButtonClick}
      >
        <ButtonSvg size={40} /> {/* Adjust the size as needed */}
        <div className="relative flex items-center justify-center w-full h-full text-sm font-normal leading-tight text-white">
          <span>SEE MORE</span>
        </div>
      </button>
      {dropdownVisible && (
        <div className="absolute mt-2 w-64 p-4 bg-[#120c16] rounded shadow-lg border border-[#cccccc]">
          <p className="text-white mb-4">
            Would you like to engage with our quiz for further learning?
          </p>
          <div className="flex justify-around">
            <button
              className="px-4 py-2 bg-[#5A185F] text-white rounded"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-[#5A185F] text-white rounded"
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
        </div>
      )}
      {showQuiz && <Quiz6 exitQuiz={exitQuiz} />} {/* Render Quiz3 component */}
    </div>
  );
};

export default DropdownButton6;
