import TipsButton from "./design/TipsButton.jsx"; // Import the TipsButton component
import Cardssol from "./design/Cardssol.jsx";

export default function Solutions() {
  return (
    <div className="relative w-full">
      {/* First Container */}
      <div className="relative w-auto h-screen flex flex-col justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/src/assets/bgvideo1.mp4" // replace with your video path
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10">
          <p className="font-manrope font-medium text-gray-400 text-center leading-[70px] text-[50px] mt-20">
            <span>
              SOLUTIONS
              <br />
            </span>
            <span className="text-[30px]">
              To understand manage and mitigate cybersecurity risks. <br />
            </span>
          </p>
          <p className="font-manrope font-small text-red-400 text-center leading-[30px] text-[20px] mt-8">
            <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">
              Cybersecurity solutions are not just about prevention. they also
              <br />
              offer rapid response mechanisms that can minimize damage and
              <br />
              recovery time after an incident.
            </span>
          </p>
          <div className="flex justify-center items-center w-full mt-10">
            <p className="w-[949px] h-[289px] font-manrope font-medium text-gray-400 text-center leading-[26px] text-[25px]">
              Learn Together,Stay Secure:
              <br />
              <span className="block mt-7">
                Access Solutions to Build Your Defenses.
              </span>
              <br />
            </p>
          </div>
          <TipsButton /> {/* Use the TipsButton component */}
        </div>
      </div>

      {/* Second Container */}

      {/* Second Container */}
      <div className="min-h-screen bg-[#110a19] flex flex-col items-center justify-center">
        <h1 className="font-manrope font-medium text-white text-center leading-[112px] text-[50px] mt-0">
          Cybersecurity Awareness
        </h1>

        <Cardssol />
      </div>
    </div>
  );
}
