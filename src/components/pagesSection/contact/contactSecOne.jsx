import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import SendBtn from "../../sendBtn";
import { ImAttachment } from "react-icons/im";
import { FaThumbsUp } from "react-icons/fa";
import styles from "../../../style";
import "./attachFile.css";

const ContactSecOne = () => {
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Hello!" },
    {
      type: "heading2",
      text: "Connect with us today and let's embark on a journey to transform your brand's vision into a resounding reality.",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const [value, setValue] = useState();
  let mobile = `${value}`;

  // Attach file
  const [selectedFile, setSelectedFile] = useState('');
  const [isFilePicked, setIsFilePicked] = useState(false);   

  const changeHandler = (event) => {
    let myArray
    try {
      myArray = event.target.files[0].name.split(".");
    } catch (error) {
      myArray = []
    }   
    const str = myArray[myArray.length - 1];
    if (!myArray.length  && isFilePicked){
      setIsFilePicked(false);
      setSelectedFile("");
    }
    else if (str !== "doc" && str !== "docx" && str !== "pdf") {
      alert("Please select doc or docx or pdf file");
      setIsFilePicked(false);
      selectedFile();
    } else {
      setIsFilePicked(true);    
      if(event.target.files[0].name.toString().length > 15){  
        setSelectedFile(event.target.files[0].name.substring(0,13) + '...' + event.target.files[0].name.substring(event.target.files[0].name.length - 6)); 
      }
      else{
        setSelectedFile(event.target.files[0].name);
      }
    }
  };

  return (
    <>
      <div
        className={`${styles.maxContainerWidth}  py-16 flex flex-col text-white mx-auto px-6`}
      >
        <motion.div
          initial="hidden"
          // animate="visible"
          // animate={replay ? "visible" : "hidden"}
          animate="visible"
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
        {/* content end */}

        {/* form start */}
        <div className="py-20">
          <form action="">
            <div className="grid grid-cols-2 text-white gap-y-8">
              {/* input and label start */}
              <div className="md:pr-8 col-span-2 md:col-span-1 ">
                <label htmlFor="phone" className="block text-sm font-medium ">
                  Your name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="phone"
                  required
                  className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5 "
                />
              </div>
              {/* input and label end */}

              {/* input and label start */}
              <div className="md:pr-8 col-span-2 md:col-span-1 ">
                <label htmlFor="phone" className="block text-sm font-medium ">
                  Phone:
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                  className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                />
                {!isValidPhoneNumber(mobile) && value > 1000000000 && (
                  <span className="text-red-400">
                    Enter valid mobile number
                  </span>
                )}
              </div>
              {/* input and label end */}

              {/* input and label start */}
              <div className="md:pr-8 col-span-2 md:col-span-1 ">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Email address:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="phone"
                  required
                  className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                />
              </div>
              {/* input and label end */}

              {/* input and label start */}
              <div className="md:pr-8 col-span-2 md:col-span-1 ">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Country/City:
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="phone"
                  required
                  className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                />
              </div>
              {/* input and label end */}

              {/* textarea and label start */}
              <div className="md:pr-8 col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Project Details:
                </label>
                <textarea
                  rows="6"
                  id="phone"
                  name="message"
                  type="text"
                  autoComplete="message"
                  required
                  className="w-full my-2 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                />
              </div>
              {/* textarea and label end */}

              <div className="grid md:flex md:justify-between items-center col-span-2 md:pr-8">
                {/* file upload start */}
                <div className="rounded-full my-[-50px] w-full md:w-[80%] grid md:flex md:justify-between items-center">
                  <div className="glow-on-hover min-w-[195px] w-full relative grid items-center bg-[#111111] border border-[#464545] rounded-full">
                    {/* attach and label */}
                    <div className="relative flex items-center">
                      <div
                        className={
                          isFilePicked
                            ? "overflow-hidden order-last z-50 transition-all duration-500 cursor-pointer"
                            : "z-50 transition-all duration-500 cursor-pointer"
                        }
                      >
                        <input
                          type="file"
                          accept="application/pdf, application/docx, /applicationdoc"
                          className="absolute w-[60px] h-[60px] rounded-full p-6 z-[-1] top-0 transition-all duration-500 ease-in-out"
                          id="upload-button"
                          onChange={changeHandler}
                          hidden
                        />
                        <label
                          htmlFor="upload-button"
                          className={
                            isFilePicked
                              ? "right-upload w-[60px] h-[60px] flex justify-center items-center attach-icon attach-thump text-center rounded-full  p-3 z-10 absolute top-0 left-[calc(100%-60px)] transition-all duration-500 ease-in-out"
                              : " w-[60px] h-[60px] flex justify-center items-center attach-icon attach-icon-left text-center rounded-full p-3 z-10 absolute top-0 left-0 transition-all duration-500 ease-in-out"
                          }
                        >
                          {!isFilePicked ? <ImAttachment /> : <FaThumbsUp />}
                        </label>
                      </div>
                      {isFilePicked ? (
                        <label
                          htmlFor="file-upload"
                          className="text-[18px] font-small text-center file-attach px-10 overflow-hidden pr-[74px] pl-[20px] h-[60px] flex items-center whitespace-nowrap"
                        >
                          {selectedFile}
                        </label>
                      ) : (
                        <label
                          htmlFor="file-upload"
                          className="text-[17px] font-small text-center pl-[74px] pr-[20px] h-[60px] flex items-center whitespace-nowrap"
                        >
                          <div>
                            <span>Attach Files</span>
                          </div>
                        </label>
                      )}
                    </div>
                    {/* file input */}
                    <div className="absolute z-10 h-full">
                      <input
                        type="file"
                        accept="application/pdf, application/docx, application/doc"
                        className=" opacity-0 cursor-pointer  w-full h-full"
                        id="small_size"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  {isFilePicked ? "" :<div className="w-full py-4">
                    <p className="block text-sm font-medium px-4">
                      *.doc, *.docx, *.pdf
                    </p>
                  </div>}
                  
                </div>
                {/* file upload end */}

                <div className="my-[-50px] w-full md:w-[20%]">
                  <SendBtn title="Send request" className="md:mt-0 mt-8" />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* form end */}

        {/* get in touch start */}
        <div className={`w-full mx-auto sm:mt-12`}>
          <h2 className="text-3xl text-white">
            Get in touch
            <br className="sm:block hidden" /> with us
          </h2>

          <div className="flex flex-col sm:flex-row py-10 justify-between">
            <div className="py-2">
              <h4 className="text-[14px] text-lightText">
                Job & Internship Inquiries:
              </h4>
              <a href="mailto:careers@weaghori.com">
                <li className="text-[14px] text-white list-none">
                  careers@weaghori.com
                </li>
              </a>
            </div>

            <div className="py-2">
              <h4 className="text-[14px] text-lightText">
                Business & PR Inquiries:
              </h4>
              <a href="mailto:hello@weaghori.com">
                <li className="text-[14px] text-white list-none">
                  hello@weaghori.com
                </li>
              </a>
            </div>

            <div className="py-2">
              <h4 className="text-[14px] text-lightText">
                Business Inquiries:
              </h4>
              <a href="tel: +91 76 000 69 666">
                <li className="text-[14px] text-white list-none">
                  {" "}
                  +91 76 000 69 666
                </li>
              </a>
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-[14px] text-lightText">Visit Us:</h4>
            <p className="text-[16px] text-white ">
              Aghori Media House Pvt. Ltd.
              <br />
              <span className="text-lightText">
                204, Vaishali Shopping Center, Next to Natraj Market, S.V.Road,
                Malad West, Mumbai, 400064.
              </span>
            </p>

            <h3 className="py-3 text-lightText font-semibold">
              <a href="https://goo.gl/maps/hjfcP7eEg5wzLk2Q7">Get Direction</a>
            </h3>
          </div>
        </div>
        {/* get in touch end */}
      </div>
    </>
  );
};

export default ContactSecOne;
