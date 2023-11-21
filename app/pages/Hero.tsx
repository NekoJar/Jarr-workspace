"use client";
import { Flex, Heading, Button, IconButton, Text } from "@radix-ui/themes";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Reveal from "../components/utils/Reveal";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once on mount

  // Your logic for rendering based on windowWidth
  const renderText = windowWidth > 768;
  return (
    <section className="sm:pb-48 pb-20 pt-24 sm:pt-0  z-20">
      <div className="grid grid-cols-1 sm:grid-cols-12  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="relative mb-4  lg:leading-normal ">
            <Text className="text-white bg-clip-text text-md sm:text-xl font-extrabold ">
              Hello, I&apos;m{" "}
            </Text>
            <br></br>
            <h1 className="text-transparent bg-clip-text bg-[var(--red-11)] text-xl sm:text-5xl lg:text-[4.25rem] sm:py-2 py-0 font-extrabold">
              <TypeAnimation
                sequence={[
                  "Zharfan Hakim",
                  1000,
                  "Fullstack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className="text-[#ADB7BE] text-s sm:text-m mb-6 lg:text-lg">
            I am an undergraduate student at the School of Computing at Telkom
            University. I specialize in creating Portfolio, E-Commerce, and
            Dashboard web applications
          </p>
          <div className="relative pb-8 sm:pb-0 ">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full sm:mr-4 mr-0 bg-[var(--red-7)] hover:bg-[var(--red-8)] text-[var(--red-11)] sm:text-base text-sm"
            >
              Hire Me
            </Link>
            {/* <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {renderText && (
            <div className="rounded-full bg-[#1818187e] w-[290px] h-[290px] lg:w-[350px] lg:h-[350px] relative ">
              <Image
                src="/images/hero-img.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
