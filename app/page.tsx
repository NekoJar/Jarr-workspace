"use client";
import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Jar from "@/public/bg-fix.png";
import ParticleBg from "./components/ParticleBg";
import Reveal from "./components/utils/Reveal";

export default function Home() {
  return (
    <>
      <ParticleBg />
      <div className="space-y-5 m-14 sm:m-44 bg-opacity-5">
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
}
