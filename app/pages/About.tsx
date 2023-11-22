"use client";
import React, {
  useTransition,
  useState,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import Reveal from "../components/utils/Reveal";
import { Container, Text } from "@radix-ui/themes";
import { useScroll, useTransform, motion } from "framer-motion";
import Magnetic from "../components/utils/Magnetic";
import CustomSlide from "../components/slide";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-sm lg:text-base">
        <li>I can Create a Portolio Website</li>
        <li>I can Create an E-Commerce Website</li>
        <li>I can Create a Dashboard Website</li>
        <li>I can Convert a Page Router into an App Router in Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm lg:text-base">
        <li>Telkom University, Indonesia</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2 text-sm lg:text-base">
        <li>Drawing</li>
        <li>Cosplaying</li>
        <li>Playing video games</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: String) => {
    startTransition(() => {
      setTab(id as SetStateAction<string>);
    });
  };

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
  return (
    <section className="text-white relative bg-neutral-950" id="about">
      {renderText && (
        <div className="relative flex h-24 items-center justify-center bg-[var(--red-5)]">
          <Reveal>
            <Text className=" uppercase text-[var(--red-11)] text-2xl">
              About
            </Text>
          </Reveal>
        </div>
      )}
      <Container>
        <div className="md:grid md:grid-cols-2 gap-8 items-center  px-8 xl:gap-16  py-28 sm:py-36 sm:px-8 md:px-16 space-y-8 sm:space-y-0 ">
          <Magnetic>
            <Image
              src="/images/about-img.png"
              width={500}
              height={500}
              alt="about-img"
              className="relative rounded-xl"
            />
          </Magnetic>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-[var(--red-11)]  mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-sm lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, TypeScript, React, Redux, Node.js,
              Firebase, Supabase, PostgreSQL, MySql, Next.js, Tailwind CSS, and
              Git. I am a quick learner and I am always looking to expand my
              knowledge and skill set. I am a team player and I am excited to
              work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                {" "}
                Hobbies{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)!.content}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
