"use client";

import { Heading, Text } from "@radix-ui/themes";
import { motion, useTransform, useScroll, MotionStyle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./utils/Reveal";
import GithubIcon from "../../public/github-icon.svg";
import Link from "next/link";
import {
  Card as NextCard,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

const HorizontalCard = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
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
  const renderText = windowWidth <= 600;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    renderText ? ["1%", "-120%"] : ["1%", "-75%"]
  );

  const motionStyle: MotionStyle = { x };
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={motionStyle} className="flex gap-4">
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
      className="group relative h-[400px] sm:h-[450px] w-[300px] sm:w-[350px] rounded-xl overflow-hidden bg-[var(--red-6)]"
    >
      <NextCard className="py-4 ">
        <CardHeader className="pb-0 pt-2 px-4  items-start justify-between text-[var(--red-12)]">
          <div className="flex-col">
            <p className="text-tiny uppercase font-bold">{card.title}</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">{card.title}</h4>
          </div>
          <div>
            <Link
              href="https://github.com/NekoJar"
              target="_blank"
              className="text-3xl hover:text-neutral-900 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
          </div>
        </CardHeader>
        <Link href={card.href} target="_blank">
          <CardBody className="overflow-visible p-4">
            <Image
              alt={card.title}
              className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              src={card.url}
              width={300}
              height={300}
            />
          </CardBody>
        </Link>
      </NextCard>
    </div>
    // <div
    //   key={card.id}
    //   className="group relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] overflow-hidden bg-[var(--red-10)]"
    // >
    //   <Link href={card.href} target="_blank">
    //     <div
    //       style={{
    //         backgroundImage: `url(${card.url})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //       className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //     ></div>
    //     <div className="absolute inset-0  z-10 grid place-content-center">
    //       <p className=" p-8 text-2xl  font-medium  uppercase text-[var(--red-11)] bg-[var(--red-5)]">
    //         {card.title}
    //       </p>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default HorizontalCard;

type CardType = {
  url: string;
  title: string;
  id: number;
  href: string;
  text: string;
};

const cards: CardType[] = [
  {
    url: "/images/project-1.png",
    title: "Portofolio",
    id: 1,
    href: "https://jarrworkspace.vercel.app/",
    text: "Jarrworkspace",
  },
  {
    url: "/images/project-2.png",
    title: "E-commerce App",
    id: 2,
    href: "https://https://luxevibe.netlify.app/",
    text: "LuxeVibe",
  },
  {
    url: "/images/project-3.png",
    title: "Restaurant App",
    id: 3,
    href: "https://freadbear-family-dinner.netlify.app/",
    text: "Freadbear's Family Diner",
  },

  {
    url: "/images/test-img-2.jpg",
    title: "Project 3",
    id: 4,
    href: "",
    text: "Issue-trackr",
  },
];
