"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { ImEmbed2 } from "react-icons/im";

const NavBar = () => {
  return (
    <nav className=" py-16 bg-transparent">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Heading className="uppercase">
              <Link href="/">
                <ImEmbed2 />
              </Link>
            </Heading>
          </Flex>
          <NavLinks />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
