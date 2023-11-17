"use client";
import { Flex, Heading, Button, IconButton, Text } from "@radix-ui/themes";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Reveal from "../components/utils/Reveal";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="relative mb-4  lg:leading-normal ">
            <Heading className="text-white bg-clip-text ">
              Hello, I&apos;m{" "}
            </Heading>
            <br></br>
            <h1 className="text-red-400 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
              <TypeAnimation
                sequence={[
                  "Zharfan Hakim",
                  1000,
                  "Fullstack Developer",
                  1000,
                  "Mobile Developer",
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
          <p className="text-[#ADB7BE] text-base sm:text-m mb-6 lg:text-lg">
            School of computing undergraduate student at Telkom University.
            Proficient in NextJS, TypeScript, TailwindCSS, and more.
          </p>
          <div className="relative space-x-4">
            <Button className="px-6">
              <Link
                href="/#contact"
                className=" px-6 inline-block py-3 w-full sm:w-fit "
              >
                Hire Me
              </Link>
            </Button>
            <Button variant="surface" className="">
              <Link
                href="/"
                className=" px-6 inline-block py-3 w-full sm:w-fit "
              >
                Download CV
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/AWT07877.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={1280}
            height={1280}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
