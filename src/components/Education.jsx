import styles, { layout } from "../constants/style";
import { useLottie } from "lottie-react";
import booksReading from "../assets/books-reading.json";

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
      <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <div className="w-[80%] h-[80%] relative z-[5]">{View}</div>

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={`${layout.sectionInfo} flex-col`}>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div
              className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
            >
              <img
                src="college"
                alt="icon"
                className="w-[80%] h-[80%] object-contain"
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
                - Relevent Courseworks: Web Development, Operating Systems,
                Computer Networks, Database Systems, Software Project
                Management, Software development Technique, Software Design and
                Development, Computing Project with AI and Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
