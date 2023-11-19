"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ImEmbed2 } from "react-icons/im";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const links = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <nav className=" mx-auto top-0 left-0 right-0 z-10 pt-16 px-16 bg-transparent">
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Link href="/">
            <ImEmbed2 />
          </Link>
        </Flex>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames({
                    "!text-red-400": link.href === currentPath,
                    "nav-link": true,
                    block: true,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Flex>
    </nav>
  );
};

export default NavBar;
