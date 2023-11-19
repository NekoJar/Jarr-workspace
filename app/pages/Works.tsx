import React from "react";
import Reveal from "../components/utils/Reveal";
import { Text } from "@radix-ui/themes";
import HorizontalCard from "../components/HorizontalCard";

const Works = () => {
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
