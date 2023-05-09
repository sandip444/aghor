import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { motion } from "framer-motion"
// import Logo from '../assets/images/LOGO.svg'
import {
  // FaBars,
  // FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import SvgLogo from "../assets/logo";
import { useEffect } from "react";

const NavbarTwo = () => {
  //sticky header
  const [stickyHeader, setStickyHeader] = useState(false);

  const headerSticky = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 500) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
  }, []);

  const [navigation, setNavigation] = useState(false);
  const links = [
    // {
    //     id: 1,
    //     link: "/",
    //     page: "home",
    // },
    {
      id: 1,
      link: "about",
      page: "about",
    },
    {
      id: 2,
      link: "portfolio",
      page: "portfolio",
    },
    {
      id: 3,
      link: "services",
      page: "services",
    },
    {
      id: 4,
      link: "contact",
      page: "contact",
    },
  ];

  // Animation  start
  // const variantsBaba = {
  //     visible: {
  //         y: 0,
  //         transition: {
  //             ease: "easeOut", duration: 1
  //         },
  //     },
  //     hidden: {
  //         y: -90
  //     },
  // }
  // Animation End

  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    window.addEventListener("click", () => setPath(window.location.pathname));
  }, []);
  // console.log(path);

  return (
    <div
      className={
        stickyHeader
          ? "w-full h-[90px] text-white z-[999] activeHeader sticky backdrop-blur top-0 transition ease-in-out delay-150"
          : "w-full h-[90px] text-white z-[999] activeHeader top-0 transition ease-in-out delay-150 "
      }
    >
      <div className="px-6 flex items-center justify-between w-full md:max-w-[90%]  mx-auto h-full">
        <div className="flex items-center md:invisible logo sticky">
          <Link to="/">
            {/* <h1 className="text-3xl">AghoriMedia</h1> */}
            {path !== "/" ? <SvgLogo /> : <></>}
            {/* <img className="w-full" src={require('../assets/images/LOGO.svg').default} alt="logo" /> */}
          </Link>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, page }) => (
            <li
              key={id}
              className="capitalize z-20 p-4 font-mono cursor-pointer hover:text-white text-lightText duration-200"
            >
              <Link to={link} smooth duration={500}>
                {page}
              </Link>
            </li>
          ))}
        </ul>

        {/* burger icon  */}
        <div className="md:hidden">
          <div onClick={() => setNavigation(true)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-Slate-900/70 backdrop-blur z-[999]"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-black text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={() => setNavigation(false)}
                className="cursor-pointer"
              >
                <SvgLogo />
                {/* <img className="w-full" src={require('../assets/images/LOGO.svg').default} alt="logo" /> */}
              </div>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <AiOutlineClose size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="capitalize">
              {links.map(({ id, link, page }) => (
                <li
                  key={id}
                  className=" py-4 text-2xl tracking-wider cursor-pointer"
                >
                  <Link
                    onClick={() => setNavigation(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-75}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-4  w-4/5 gap-2">
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaLinkedinIn size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaTwitch size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
