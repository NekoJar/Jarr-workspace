"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./components/NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ImEmbed2 } from "react-icons/im";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import MenuOverlay from "./components/MenuOverlay";
import Magnetic from "./components/utils/Magnetic";
import logo from "../public/logo.svg";
import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";
import { useDarkMode } from "./components/context/DarkModeContext";

export const links = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const currentPath = usePathname();

  return (
    <nav className=" fixed sm:relative mx-auto top-0 left-0 right-0 z-10 p-8 sm:p-0 sm:pt-16 sm:px-16 sm:border-0 border border-[var(--bg-primary)] sm:bg-transparent bg-[var(--navbar-primary)] bg-opacity-100">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Magnetic>
            <Link href="/">
              <Image src={logo} alt="logo" width={32} height={30} />
            </Link>
          </Magnetic>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <div className="flex flex-row space-x-4">
              <span className="text-3xl pt-1 ">
                <DarkModeToggle />
              </span>
              <button
                onClick={() => setNavbarOpen(true)}
                className={
                  isDarkMode
                    ? "text-neutral-300 border-neutral-300 hover:text-red-200 transition-colors flex items-center px-3 py-2 border rounded"
                    : "text-neutral-700 border-neutral-700 hover:text-red-600 transition-colors flex items-center px-3 py-2 border rounded"
                }
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-row space-x-4">
              <span className="text-3xl pt-1 ">
                <DarkModeToggle />
              </span>
              <button
                onClick={() => setNavbarOpen(false)}
                className={
                  isDarkMode
                    ? "text-neutral-300 border-neutral-300 hover:text-red-200 transition-colors flex items-center px-3 py-2 border rounded"
                    : "text-neutral-700 border-neutral-700 hover:text-red-600 transition-colors flex items-center px-3 py-2 border rounded"
                }
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link) => (
              <li key={link.href}>
                <Magnetic>
                  <Link
                    href={link.href}
                    className={
                      isDarkMode
                        ? "text-neutral-300 hover:text-red-200 transition-colors block"
                        : "text-neutral-700 hover:text-red-600 transition-colors block"
                    }
                  >
                    {link.label}
                  </Link>
                </Magnetic>
              </li>
            ))}
            <div className="text-xl">
              <Magnetic>
                <DarkModeToggle />
              </Magnetic>
            </div>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={links} /> : null}
    </nav>
  );
};

export default NavBar;
