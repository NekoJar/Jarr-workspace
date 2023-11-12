"use client";
import { Flex, Heading, Button, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import ParticleBg from "./utils/ParticleBg";
import Reveal from "./utils/Reveal";

const Hero = () => {
  return (
    <>
      <div className="space-y-5 m-14  pb-48 sm:m-44 bg-opacity-5">
        <Flex direction="column">
          <Reveal>
            <Heading size="5">Hi, I&apos;m Zharfan Hakim</Heading>
          </Reveal>
          <Reveal>
            <Heading size="9" color="red" className="uppercase">
              Front End Developer
            </Heading>
          </Reveal>
        </Flex>

        <Flex gap="3">
          <Button variant="surface">
            <Link href="/about" className="mx-5 font-bold">
              Get Started
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
