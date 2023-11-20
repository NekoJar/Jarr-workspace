import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImEmbed2 } from "react-icons/im";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[var(--red-5)] relative">
      <footer className="footer  ">
        <div className="container p-8 flex  items-center justify-between space-x-4 sm:space-x-0">
          <Link href="/" className="ml-0 sm:ml-12">
            <Image src={logo} alt="logo" width={32} height={32} />
          </Link>
          <small className="text-[var(--red-11)]">
            &copy; Copyright 2023, JarrWorkspace. All Rights Reserved
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
