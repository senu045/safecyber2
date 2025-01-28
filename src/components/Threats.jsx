import TipsButton from "./design/TipsButton.jsx";
import Cards from "./design/Cards.jsx";

export default function Threats() {
  return (
    <div className="relative w-full">
      {/* First Container */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/src/assets/threatsbg.mp4" // replace with your video path
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10">
          {/* Main Title */}
          <p className="font-manrope font-bold text-gray-200 text-center leading-tight text-[55px] mt-20">
            <span>CYBER THREATS</span>
            <br />
            <span className="text-[30px] text-gray-400 font-normal">
              Understand, Manage, and Defend Against Evolving Risks
            </span>
          </p>

          {/* Subheading */}
          <p className="font-manrope font-small text-gray-500 text-center leading-tight text-[20px] mt-10 max-w-4xl mx-auto">
            In today’s digital landscape, security is not an option—it's a
            necessity. Vigilance and preparedness are your strongest defenses.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center items-center w-full mt-12">
            <p className="font-manrope font-semibold text-white text-center leading-[32px] text-[28px] w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
              <span className="text-orange-400 text-[25px] font-normal">
                Stay Informed, Stay Protected:
              </span>
              <br />
              <span className="block mt-3 text-[20px] font-normal">
                Explore practical solutions to fortify your defenses against
                cyber threats.
              </span>
            </p>
          </div>

          {/* Button Section */}
        </div>
      </div>

      {/* Second Container */}

      {/* Second Container */}
      <div className="min-h-screen bg-[#110a19] flex flex-col items-center justify-center">
        <h1 className="font-manrope font-medium text-gray-400 text-center leading-[112px] text-[54px] mt-0">
          Learn Cybersecurity Awareness
        </h1>

        <Cards />
      </div>
    </div>
  );
}
