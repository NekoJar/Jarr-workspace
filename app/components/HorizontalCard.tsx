"use client";

import { Heading, Text } from "@radix-ui/themes";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Reveal from "./utils/Reveal";

const HorizontalCard = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] overflow-hidden bg-[var(--red-10)]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-4xl sm:text-6xl font-black uppercase text-[var(--red-12)] ">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/AWT07877.jpg",
    title: "Project 1",
    id: 1,
  },
  {
    url: "/images/test-img-1.jpg",
    title: "Project 2",
    id: 2,
  },
  {
    url: "/images/test-img-2.jpg",
    title: "Project 3",
    id: 3,
  },
  {
    url: "/images/test-img-3.jpg",
    title: "Project 4",
    id: 4,
  },
];
