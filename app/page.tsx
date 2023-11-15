"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Hero from "./pages/Hero";
import ParticleBg from "./components/utils/ParticleBg";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalCard from "./components/HorizontalCard";
import Works from "./pages/Works";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <ParticleBg />
          <Container className=" mt-24 mx-auto px-12 py-4">
            <Hero />
          </Container>
        </div>
        <Works />
      </div>
    </div>
  );
}
