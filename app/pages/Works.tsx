import React, { useEffect, useRef, useState } from "react";
import Reveal from "../components/utils/Reveal";
import { Text } from "@radix-ui/themes";
import HorizontalCard from "../components/HorizontalCard";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxScroll from "../components/utils/ParallaxScroll";

const Works = () => {
  const container = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,

  //   offset: ["start end", "end start"],
  // });

  // const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
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
  const renderText = windowWidth < 768;

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
    </>
  );
};

export default Works;

{
  /* <motion.div style={{ height }} className="relative mt-[100px]">
            <div className="absolute z-1 h-[1550%] w-[100%] left-[-10%] bg-neutral-900 shadow-2xl rounded-b-full"></div>
          </motion.div> */
}
