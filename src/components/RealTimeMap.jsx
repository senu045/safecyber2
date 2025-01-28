import { useState } from "react";

const threatTypes = {
  OAS: "On-Access Scan - Scans files when they are accessed.",
  ODS: "On-Demand Scan - Scans files on demand.",
  MAV: "Mail Anti-Virus - Scans email attachments.",
  WAV: "Web Anti-Virus - Scans web traffic.",
  IDS: "Intrusion Detection System - Detects malicious activity.",
  VUL: "Vulnerability Scan - Detects system vulnerabilities.",
  KAS: "Kaspersky Anti-Spam - Filters out spam emails.",
  BAD: "Behavioral Analysis Detection - Detects suspicious behavior.",
  RMW: "Ransomware Protection - Protects against ransomware attacks.",
};

const RealTimeMap = () => {
  const [showCard, setShowCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const threatKeys = Object.keys(threatTypes);

  const toggleCard = () => setShowCard(!showCard);

  const goToPreviousThreat = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? threatKeys.length - 1 : prevIndex - 1
    );
  };

  const goToNextThreat = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === threatKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeThreat = threatKeys[currentIndex];

  return (
    <div className="relative w-screen h-screen">
      <iframe
        className="w-full h-full border-0"
        src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
        title="Real Time Map"
      />

      {/* Plus Icon Button to Toggle the Card */}

      <button
        className="absolute w-12 h-12 bottom-10 right-20 z-10 p-2 bg-green-600 text-white rounded-lg"
        onClick={toggleCard}
      >
        +
      </button>

      {/* Threat Explanation Card */}
      {showCard && (
        <div className="absolute bottom-20 right-10 mb-5 mr-10 z-20 w-80 bg-transparent border border-gray-500 backdrop-blur-md shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              className="p-2 bg-transparent rounded-full"
              onClick={goToPreviousThreat}
            >
              &larr;
            </button>
            <h3 className="font-bold text-lg text-gray-300">{activeThreat}</h3>
            <button
              className="p-2 bg-transparent rounded-full"
              onClick={goToNextThreat}
            >
              &rarr;
            </button>
          </div>
          <div className="text-yellow-200 text-center font-thin">
            <p className="mt-2">{threatTypes[activeThreat]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeMap;
