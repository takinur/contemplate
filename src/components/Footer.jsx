import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section id="contact" className="section-contact bg-primary pt-20 ">
        <div className=" container-newsletter relative z-0  w-full border-t-2 border-green-400 bg-slate-800 md:h-28 ">
          <div className="mx-auto -mt-20 w-4/5 rounded-2xl bg-[#141c3a] px-6 py-10 pb-9 shadow-lg ">
            <div className=" mx-auto flex flex-col space-y-5 p-3 md:h-20 md:flex-row md:space-x-5 md:space-y-0">
              <div className="grid w-full place-items-center md:w-1/3">
                <p className="text-3xl font-semibold text-white">Contact </p>
              </div>
              <div className="grid w-full place-items-center md:w-1/3">
                <p className="text-white">
                  Interested in working together? We should queue up a chat.
                  I’ll buy the coffee. Get in touch by Tweet.
                </p>
              </div>
              <div className="w-full md:w-1/3 grid place-items-center">
                <div className="md:space-x-20 space-y-10 md:space-y-0 mx-auto items-center">
                  <a
                    href="https://twitter.com/_takinur"
                    target="blank"
                    className="flex py-3 px-6 text-white rounded-full border-2 border-[#7510F7] shadow-lg md:inline-flex hover:bg-[#7510F7]"
                  >
                    Twitter{" "}
                    <svg
                      className="w-4 h-4 ml-2 mt-1 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-200 ">
        <div className="bg-gray-200">
          <div className="w-full mx-auto font-semibold text-gray-900 py-10 dark:bg-slate-800">
            <div className="text-center">
              <div className="footer-logo w-24 mx-auto">
                <img src={logo} alt="Logo of Takinur" className="bg-cover" />
              </div>
              <p className="font-semibold mt-5 text-xl md:text-2xl dark:text-zinc-100">
                Living, learning, & leveling up one day at a time.
              </p>
            </div>
            <div className="mt-12 px-10 justify-center items-center text-center text-sm text-gray-400">
              <div className="grid grid-cols-2 gap-4 md:flex md:items-center justify-center md:space-x-3">
                <a
                  href="https://www.github.com/takinur"
                  target="blank"
                  className="bg-slate-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-75"
                >
                  <svg
                    fill="#000000"
                    role="img"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                  </svg>
                  <span>Github</span>
                </a>

                <a
                  href="https://linkedin.com/in/takinur"
                  target="blank"
                  className="bg-[#0288d1] px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5 fill-current"
                    role="img"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                  <span>Linkedin</span>
                </a>
                <a
                  href="mailto:takinurm@gmail.com"
                  target="blank"
                  className="bg-rose-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>Email</span>
                </a>
                <a
                  href="https://twitter.com/_takinur"
                  target="blank"
                  className="bg-teal-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-75"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:justify-center items-center text-center text-sm text-gray-400">
              <p className="mt-8 md:mt-0">
                HandCrafted by Me &copy;{new Date().getFullYear()}, Deployed to
                AWS by
                <a
                  href="https://vercel.com/?utm_source=takinur-potfolio"
                  target="blank"
                  className="text-teal-400 ml-1 hover:text-teal-500"
                >
                  Vercel.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
