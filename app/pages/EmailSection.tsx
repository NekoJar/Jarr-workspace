import { Container, Text } from "@radix-ui/themes";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import GithubIconBlack from "../../public/github-icon-blck.svg";
import GithubIcon from "../../public/github-icon.svg";
import InstagramIconBlack from "../../public/instagram-icon-blck.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import Reveal from "../components/utils/Reveal";

import { sendEmail } from "../api/send/sendEmail";
import SubmitBtn from "../components/SubmitBtn";
import { useDarkMode } from "../components/context/DarkModeContext";

const EmailSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { isDarkMode } = useDarkMode();

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
  const renderText = windowWidth > 768;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 1]);

  return (
    <div>
      <div
        className={
          isDarkMode ? "relative bg-neutral-950" : "relative bg-neutral-200"
        }
      >
        <div className="relative flex h-24 items-center justify-center bg-[var(--red-5)]">
          <Reveal>
            <Text className="uppercase text-[var(--red-11)] text-2xl">
              Contact
            </Text>
          </Reveal>
        </div>
        <Container className="">
          <section
            className="grid md:grid-cols-2 my-8 md:my-12 py-12 sm:py-24 gap-4 relative px-8 sm:px-8 lg:px-32 "
            id="contact"
          >
            <div>
              <Text className="text-xl sm:text-4xl font-bold text-[var(--red-11)] my-5">
                Let&apos;s Connect
              </Text>
              <p
                className={
                  isDarkMode
                    ? "text-neutral-400 my-4 max-w-md"
                    : "text-neutral-600 my-4 max-w-md"
                }
              >
                I&apos;m currently looking for new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
              <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/NekoJar" target="_blank">
                  <Image
                    src={isDarkMode ? GithubIcon : GithubIconBlack}
                    alt="Github Icon"
                  />
                </Link>

                <Link
                  href="https://instagram.com/wrkspace.jarr"
                  target="_blank"
                >
                  <Image
                    src={isDarkMode ? InstagramIcon : InstagramIconBlack}
                    alt="Instagram Icon"
                  />
                </Link>
              </div>
            </div>
            <div>
              <form
                className="mt-10 sm:mt-0 flex flex-col dark:text-black"
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                    toast.error(error);
                    return;
                  }

                  toast.success("Email sent successfully!");
                }}
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-[var(--text-primary)] block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    className="bg-[var(--email-box)] border border-[#33353F] placeholder-[#9CA2A9] text-[var(--text-primary)] text-sm rounded-lg block w-full p-2.5 transition-all"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="messages"
                    className="text-[var(--text-primary)] block text-sm mb-2 font-medium"
                  >
                    Your messages
                  </label>
                  <textarea
                    className="h-52  bg-[var(--email-box)] border border-[#33353F] placeholder-[#9CA2A9] text-[var(--text-primary)] text-sm rounded-lg block w-full p-2.5 transition-all"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                  />
                </div>
                <SubmitBtn />
              </form>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default EmailSection;
