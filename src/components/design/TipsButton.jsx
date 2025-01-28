import { useState } from "react";

const TipsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    "Tip 1: Keep your operating system, applications, and firmware up-to-date to patch vulnerabilities.",
    "Tip 2: Use complex, unique passwords for all accounts. Consider a password manager for secure storage.",
    "Tip 3: Install and maintain reputable antivirus and anti-malware software for real-time protection.",
    "Tip 4: Avoid using public Wi-Fi for sensitive transactions. If necessary, use a VPN for encryption.",
    "Tip 5: Avoid using public Wi-Fi for sensitive transactions. If necessary, use a VPN for encryption.",
    "Tip 6: Be cautious of emails from unknown senders. Don't click suspicious links or attachments.",
    "Tip 7: Phishing emails often create a sense of urgency to pressure you into clicking.",
    "Tip 8: Hover over links before clicking to verify the actual destination",
    "Tip 9: Report suspicious emails to your IT department or email provider.",
    "Tip 10: Be cautious about sharing personal information online or over the phone.",
    "Tip 11: Independently verify requests for information, even if they appear legitimate",
    "Tip 12: Don't be swayed by unsolicited offers or deals that seem too good to be true.",
    "Tip 13: Don't click on pop-up ads or close them using the 'X' button",
    "Tip 14: Only download software from trusted sources. Be cautious of freeware and cracked software",
    "Tip 15: Look for the https:// and padlock symbol before entering sensitive information on websites.",
    "Tip 16: Download apps only from official app stores (e.g., Google Play, Apple App Store).",
    "Tip 17: Password-Protect Devices:Use strong passwords or PINs to lock your mobile devices.Be mindful of app permissions and only grant access when necessary.",
    "Tip 18: Use strong passwords or PINs to lock your mobile devices.",
    "Tip 19: Regularly back up your data to a secure location in case of device loss or infection.",
    "Tip 20: Enable Two-Factor Authentication (2FA)Add an extra layer of security with 2FA for important accounts.",
    "Tip 21: Stay Informed:Stay updated on the latest cybersecurity threats and best practices.",
    "Tip 22: Be Wary of Social Media:Be mindful of what you share on social media, as this information can be used for social engineering attacks",
  ];

  const handleNextTip = () => {
    setCurrentTipIndex((currentTipIndex + 1) % tips.length);
  };

  const handlePreviousTip = () => {
    setCurrentTipIndex((currentTipIndex - 1 + tips.length) % tips.length);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTipIndex(0); // Reset to the first tip
  };

  return (
    <div>
      <button
        className="absolute bottom-24 right-4 border-2 border-[white] rounded-3xl text-[white] bg-transparent py-4 px-8 text-2xl cursor-pointer transition-colors duration-300 hover:bg-[white] hover:text-black"
        onClick={handleOpenModal}
      >
        Tips
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-n-8/90 backdrop-blur-sm p-8 rounded-lg w-[80%] max-w-[600px] text-center">
            <h2 className="text-3xl  text-gray-100">Tips</h2>
            <p className="mb-6 text-2xl text-gray-400">{tips[currentTipIndex]}</p>
            <div className="flex justify-between mb-6">
              <button
                className="border-0 bg-transparent py-2 px-4 cursor-pointer transition-opacity duration-300 hover:opacity-75"
                onClick={handlePreviousTip}
              >
                <img
                  src="/src/assets/left button.jpg"
                  alt="Previous Tip"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              <button
                className="border-0 bg-transparent py-2 px-4 cursor-pointer transition-opacity duration-300 hover:opacity-75"
                onClick={handleNextTip}
              >
                <img
                  src="/src/assets/right button.jpg"
                  alt="Next Tip"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
            <button
              className="border-2 border-red-400 text-red-400 bg-transparent py-2 px-4 cursor-pointer transition-colors duration-300 hover:bg-red-600 hover:text-white"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TipsButton;
