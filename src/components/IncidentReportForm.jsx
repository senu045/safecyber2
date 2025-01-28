import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";

const IncidentReportForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleModal = () => {
    if (isOpen) {
      // Start closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 400); // Duration of the retract animation
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg focus:outline-none animate-growShrink"
          onClick={toggleModal}
        >
          <CiBullhorn size={24} />
        </button>
      </div>

      {/* Incident Report Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className={`bg-black text-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-500 ${
              isAnimating ? "animate-retract" : "animate-expand"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <h2 className="text-2xl text-gray-400 font-bold mb-4">
              Report a Cyber Threat
            </h2>
            <p className="mb-8 text-gray-400">
              If you're a victim of a cyber crime, report the incident to your
              local law enforcement agency.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 font-medium">
                  Incident description
                </label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  rows="3"
                  placeholder="Describe the incident"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium">
                  Incident date and time
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="When did the incident occur?"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium">
                  Incident location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Where did the incident occur?"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium">
                  Incident type
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="What type of incident occurred?"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium">
                  Additional information
                </label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  rows="3"
                  placeholder="Do you have any additional information that could help us understand the incident?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default IncidentReportForm;
