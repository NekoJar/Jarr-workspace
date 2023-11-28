// Import React and other necessary modules
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Define the types for the props
interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

// Define the ParallaxScroll component
const ParallaxScroll: React.FC = () => {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    requestAnimationFrame(raf);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="h-[100vh]"></div>

      <div className="h-[175vh] overflow-hidden bg-[#2d2d2d47058823529413%]">
        <div className="relative top-[-12.5vh] h-[200vh] flex gap-[2vw] padding-[2vw]">
          <Column
            images={[
              "/images/project-1.png",
              "/images/project-2.png",
              "/images/project-3.png",
            ]}
            y={y}
          />

          <Column
            images={[
              "/images/project-4.png",
              "/images/project-5.png",
              "/images/project-3.png",
            ]}
            y={y2}
          />

          <Column
            images={[
              "/images/project-2.png",
              "/images/project-1.png",
              "/images/project-5.png",
            ]}
            y={y3}
          />

          <Column
            images={[
              "/images/project-4.png",
              "/images/project-2.png",
              "/images/project-1.png",
            ]}
            y={y4}
          />
        </div>
      </div>

      <div className="h-[100vh]"></div>
    </>
  );
};

// Define the Column component
const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="relative h-[100%] w-[25%] min-w-[250px] flex gap-[2vw] whitespace-nowrap"
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="absolute h-[33%] w-[100%] rounded-[1vw] overflow-hidden"
          >
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

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

// Export the ParallaxScroll component as the default export
export default ParallaxScroll;
