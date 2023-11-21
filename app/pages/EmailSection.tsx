import React, { useState, SyntheticEvent, useRef, useEffect } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/utils/Reveal";
import { Container, Text } from "@radix-ui/themes";
import { motion, useScroll, useTransform } from "framer-motion";
import toast from "react-hot-toast";

import { useFormStatus } from "react-dom";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "../api/send/sendEmail";

const EmailSection: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 1]);

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
  const renderText = windowWidth >= 768;

  return (
    <>
      {renderText ? (
        <motion.div style={{ y }} ref={container}>
          <div className=" bg-neutral-950">
            <div className="relative flex h-24 items-center justify-center bg-[var(--red-5)]">
              <Reveal>
                <Text className="uppercase text-[var(--red-11)] text-2xl">
                  Contact
                </Text>
              </Reveal>
            </div>
            <Container>
              <section
                className="grid md:grid-cols-2 my-8 md:my-12 py-12 sm:py-24 gap-4  px-8 sm:px-8 lg:px-0 "
                id="contact"
              >
                <div>
                  <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                  </h5>
                  <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                  </p>
                  <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/NekoJar" target="_blank">
                      <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    {/* <Link href="linkedin.com" target="_blank">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link> */}
                    <Link
                      href="https://instagram.com/wrkspace.jarr"
                      target="_blank"
                    >
                      <Image src={InstagramIcon} alt="Instagram Icon" />
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
                        className="text-white block mb-2 text-sm font-medium"
                      >
                        Your email
                      </label>
                      <input
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 transition-all"
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
                        className="text-white block text-sm mb-2 font-medium"
                      >
                        Your messages
                      </label>
                      <textarea
                        className="h-52  bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 transition-all"
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
        </motion.div>
      ) : (
        <div>
          <div className="relative  bg-neutral-950">
            <div className="relative flex h-24 items-center justify-center bg-[var(--red-5)]">
              <Reveal>
                <Text className="uppercase text-[var(--red-11)] text-2xl">
                  Contact
                </Text>
              </Reveal>
            </div>
            <Container>
              <section
                className="grid md:grid-cols-2 my-8 md:my-12 py-12 sm:py-24 gap-4 relative px-8 sm:px-8 lg:px-0 "
                id="contact"
              >
                <div className="z-10">
                  <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                  </h5>
                  <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                  </p>
                  <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/NekoJar" target="_blank">
                      <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    {/* <Link href="linkedin.com" target="_blank">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link> */}
                    <Link
                      href="https://instagram.com/wrkspace.jarr"
                      target="_blank"
                    >
                      <Image src={InstagramIcon} alt="Instagram Icon" />
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
                        className="text-white block mb-2 text-sm font-medium"
                      >
                        Your email
                      </label>
                      <input
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 transition-all"
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
                        className="text-white block text-sm mb-2 font-medium"
                      >
                        Your messages
                      </label>
                      <textarea
                        className="h-52  bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 transition-all"
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
      )}
    </>
  );
};

export default EmailSection;
