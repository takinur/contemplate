import styles, { layout } from "../constants/style";
import { useLottie } from "lottie-react";
import booksReading from "../assets/books-reading.json";
import UOG from "../assets/uog-logo.png";
import { motion } from "framer-motion";
import west from "../assets/westminster-logo.png";

const Education = () => {
  const lotteOptions = {
    animationData: booksReading,
    loop: true,
  };

  const { View } = useLottie(lotteOptions);
  return (
    <section id="education">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Education
      </h1>
      <motion.div
        className={layout.sectionReverse}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={layout.sectionImgReverse}>
          <div className="w-[80%] h-[80%] relative z-[5]">{View}</div>

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={`${layout.sectionInfo} flex-col`}>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0ca79e] overflow-hidden">
              <img
                src={west}
                alt="Westminster Logo"
                className="w-11/12 h-11/12 object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient">
                University of Westminster, Cavendish, London
              </h4>
              <p className="font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 ">
                MSc Computer Science (Data Science)
              </p>
              <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1">
                Started in 2023 and expected to graduate in 2024
              </p>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
                - Relevent Courses : Data Mining and Machine Learning, Data
                Science, Data Visualisation, Big Data, Data Repositories and
                Data Warehousing, Data Science Project
              </p>
            </div>
          </div>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div
              className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-zinc-100`}
            >
              <img
                src={UOG}
                alt="Greenwich Logo"
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient">
                University of Greenwich, London
              </h4>
              <p className="font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 ">
                BSc (Hons) Computer Science
              </p>
              <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1">
                Started in 2019 and graduated in 2022
              </p>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
                - Relevent Courses: Dynamic Web Development, Operating Systems,
                Computer Networks, Database Systems, Software Project
                Management, Software development Technique, Software Design and
                Development, Computing Project with AI and Machine Learning
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
