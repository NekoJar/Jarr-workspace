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
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
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
      className="group relative h-[420px] sm:h-[490px] w-[300px] sm:w-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--red-9)] to-[var(--red-6)]"
    >
      <NextCard className="py-4 ">
        <CardHeader className="pb-0 pt-2 px-4  items-start justify-between ">
          <div className="flex-col">
            <p className="text-tiny uppercase font-bold text-[var(--text-primary)]">
              {card.title}
            </p>
            <h4 className="font-bold text-large text-[var(--red-12)]">
              {card.text}
            </h4>
            <small className="text-default-500 text-[var(--red-11)]">
              {card.languages.join(", ")}
            </small>
          </div>
          <div>
            <Link
              href={card.github}
              target="_blank"
              className="text-3xl text-[var(--text-primary)] hover:text-neutral-900 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
          </div>
        </CardHeader>
        <Link href={card.href} target="_blank">
          <CardBody className="overflow-visible p-8 ">
            <Image
              alt={card.title}
              className="object-contain rounded-xl transition-transform duration-300 hover:-translate-y-2"
              src={card.url}
              width={300}
              height={300}
            />
          </CardBody>
        </Link>
      </NextCard>
    </div>
  );
};

export default HorizontalCard;

type CardType = {
  url: string;
  title: string;
  id: number;
  href: string;
  text: string;
  github: string;
  languages: string[];
};

const cards: CardType[] = [
  {
    url: "/images/project-1.png",
    title: "Portofolio",
    id: 1,
    href: "https://jarrworkspace.vercel.app/",
    text: "Jarrworkspace",
    github: "https://github.com/NekoJar/Jarr-workspace",
    languages: ["Typescript", "NextJS", "Framer Motion"],
  },
  {
    url: "/images/project-2.png",
    title: "E-commerce App",
    id: 2,
    href: "https://luxevibe.netlify.app/",
    text: "LuxeVibe",
    github: "https://github.com/NekoJar/LuxeVibe",
    languages: ["Typescript", "React", "Firebase", "Stripe"],
  },
  {
    url: "/images/project-3.png",
    title: "Restaurant App",
    id: 3,
    href: "https://freadbear-family-dinner.netlify.app/",
    text: "Freadbear's Family Diner",
    github: "https://github.com/NekoJar/fast-pizza",
    languages: ["Javascript", "React", "Supabase"],
  },

  {
    url: "/images/project-4.png",
    title: "Dashboard App",
    id: 4,
    href: "https://github.com/NekoJar/issue-trackr",
    text: "Issue-trackr",
    github: "https://github.com/NekoJar/issue-trackr",
    languages: ["Typescript", "NextJS", "mySql", "Prisma"],
  },

  {
    url: "/images/project-5.png",
    title: "Dashboard App",
    id: 5,
    href: "https://wild-oasis-inn.netlify.app/",
    text: "Wild-Oasis",
    github: "https://github.com/NekoJar/wild-oasis",
    languages: ["Javascript", "React", "Supabase"],
  },
];
