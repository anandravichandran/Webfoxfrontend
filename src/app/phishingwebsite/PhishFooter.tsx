import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/src/data";
// import MagicButton from "./ui/MagicButton";

const PhishFooter = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Be A Part Of <span className="text-purple">The Next Era Of Cybersecurity</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Thinkinfo Expert Solutions focuses on identifying and neutralizing phishing, malware, and data breaches, along with secure data inspection. With contributions from cybersecurity specialists, we’re on a mission to enhance online safety for everyone.
        </p>
        {/* <a href="/pricing">
          <MagicButton
            title="Pricing"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 ThinkInfo Expert Solutions
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PhishFooter;