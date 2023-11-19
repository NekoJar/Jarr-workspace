import React, { useRef } from "react";
import Reveal from "../components/utils/Reveal";
import { Text } from "@radix-ui/themes";
import HorizontalCard from "../components/HorizontalCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Works = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div
        className="relative flex h-24 items-center justify-center bg-[var(--red-5)]"
        id="works"
      >
        <Reveal>
          <Text className="uppercase text-[var(--red-11)] text-2xl">Works</Text>
        </Reveal>
      </div>
      <HorizontalCard />
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute z-1 h-[1550%] w-[120%] left-[-10%] bg-neutral-900 shadow-2xl rounded-b-full"></div>
      </motion.div>
    </>
  );
};

export default Works;
