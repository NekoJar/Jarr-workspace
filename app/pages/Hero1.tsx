"use client";
import { Flex, Heading, Button, IconButton, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Reveal from "../components/utils/Reveal";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="space-y-5 m-14  pb-48 sm:m-44 bg-opacity-5">
        <Flex direction="column">
          <Reveal>
            <Heading size="5">Hi, I&apos;m</Heading>
          </Reveal>
          <Reveal>
            <Heading size="9" color="red" className="pb-2">
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
            </Heading>
          </Reveal>
          <Text size="2" className="pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Text>
        </Flex>

        <Flex gap="3">
          <Button variant="surface">
            <Link href="/about" className="mx-5 font-bold">
              Hire Me
            </Link>
          </Button>

          <IconButton color="gray" variant="outline" radius="full">
            <Link href="https://github.com/NekoJar" target="_blank">
              <FaGithub />
            </Link>
          </IconButton>
          <IconButton color="gray" variant="outline" radius="full">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>
          </IconButton>
        </Flex>
      </div>
    </>
  );
};

export default Hero;
