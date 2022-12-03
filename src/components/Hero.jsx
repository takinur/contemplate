import React from "react";
import styles from "../constants/style";
import LetsConnect from "./LetsConnect";

const Hero = () => {
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
          <span className="bg-gradient-to-r from-green-500 to-violet-500 bg-clip-text text-transparent">
            Takinur M
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Software Engineer and cloud infrastructure enthusiast. I love to build
          things that live on the internet, from websites to applications to
          anything in between.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-index-[5] h-[90%] w-[85%]">GIFFFF</div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
