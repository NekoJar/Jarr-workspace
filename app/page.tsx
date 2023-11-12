"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Hero from "./components/Hero";
import ParticleBg from "./components/utils/ParticleBg";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalCard from "./components/HorizontalCard";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div>
      <div>
        <div>
          <ParticleBg />
          <Container>
            <Hero />
          </Container>
        </div>
        <HorizontalCard />
      </div>
    </div>
  );
}
