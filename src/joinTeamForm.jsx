import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { motion } from "framer-motion";
import AnimatedText from "./components/pagesSection/contact/AnimatedText";
import SendBtn from './components/sendBtn';
import { ImAttachment } from "react-icons/im";
import { FaThumbsUp } from "react-icons/fa";
import styles from './style';
import "./components/pagesSection/contact/./attachFile.css"

const positions = [
    {
        label: "Designer",
        value: "designer",
    },
    {
        label: "SEO",
        value: "seo",
    },
    {
        label: "Content Writing",
        value: "content-writing",
    },
    {
        label: "Graphic",
        value: "graphic",
    },
];

const JoinTeamForm = () => {
    const placeholderText = [
        { type: "heading1", text: "Hello" },
        {
          type: "heading2",
          text: "Do you want to join our squad?",
        },
        {
          type: "heading2",
          text: "Complete the form provided below.",
        },
      ];

      const container = {
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      };

    const [value, setValue] = useState()
    let mobile = `${value}`;

    // Attach file
    const [selectedFile, setSelectedFile] = useState('');
    const [isFilePicked, setIsFilePicked] = useState(false);  
    const changeHandler = (event) => {
        console.log(event)
        console.log(selectedFile.length)
        let myArray
        try {
          myArray = event.target.files[0].name.split(".");
        } catch (error) {
          myArray = []
        }
        const str = myArray[myArray.length - 1];
        if (!myArray.length  && isFilePicked){
          setIsFilePicked(false);
          console.log(selectedFile.length)
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
            setSelectedFile(event.target.files[0].name)
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
                {/* form start */}
                <div className='py-20'>
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
                            <div className='md:pr-8 col-span-2 md:col-span-1 '>
                                <label htmlFor="phone" className="block text-sm font-medium">Positions:</label>
                                {/* <input id="city" name="city" type="text" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' /> */}
                                <select required className='w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-2'>
                                    {positions.map((position) => (
                                        <option value={position.value}>{position.label}</option>
                                    ))}
                                </select>
                            </div>
                            {/* input and label end */}

                           {/* textarea and label start */}
              <div className="md:pr-8 col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Messaage:
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

                            <div className="grid md:flex  md:justify-between items-center col-span-2 md:pr-8">

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
                          className="absolute w-[60px] h-[60px] rounded-full p-6 z-[-1] top-0 transition-all duration-500 ease-in-out"
                          id="upload-button"
                          accept=".pdf, .docx, .doc"
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
                      {isFilePicked && selectedFile.length > 0  ? (
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
                        className=" opacity-0 cursor-pointer  w-full h-full"
                        id="small_size"
                        type="file"
                        accept=".pdf, .docx, .doc"
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

            </div>

        </>
    )
}

export default JoinTeamForm