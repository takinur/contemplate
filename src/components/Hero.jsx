import React from "react";
import styles from "../constants/style";
import LetsConnect from "./LetsConnect";
import personCoding from "../assets/typing-code.json";
import { useLottie } from "lottie-react";

const Hero = () => {
  const lotteOptions = {
    animationData: personCoding,
    loop: true,
  };

  const { View } = useLottie(lotteOptions);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-roboto font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi, there!
            <br className="sm:block hidden" /> I am
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="bg-gradient-to-r from-violet-500 to-green-500 bg-clip-text text-transparent">
            Takinur M
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Software Engineer, Web Developer and a passionate
          learner with a strong interest in building scalable and efficient
          software solutions.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-index-[5] h-[90%] w-[85%] md:ml-12 md:-mt-28 ">
          {" "}
          {View}{" "}
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
