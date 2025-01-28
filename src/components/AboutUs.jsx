import { mission } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import DetailsList from "./DetailsList";
import { LeftLine, RightLine } from "./design/Pricing";

const AboutUs = () => {
  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Mission is to shine a Light on Cybersecurity Awareness"
        />
        <div className="w-full h-auto flex items-center justify-center">
          <button className="bg-transparent mb-10 hover:bg-[#24002d] text-white hover:text-white border-2 border-white py-4 px-8 rounded-lg text-sm transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center items-center gap-10 mb-10 mt-10">
          {mission.map((item) => (
            <div
              className="border border-n-5 rounded-xl block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[50rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-wrap min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 rounded-xl"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 rounded-xl transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-2">
        <h4 className="h4 mb-4 text-color-2">Together We Build Security</h4>

        <div className="relative">
          <DetailsList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
