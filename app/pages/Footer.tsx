import Link from "next/link";
import React from "react";
import { ImEmbed2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[var(--red-5)] relative">
      <footer className="footer z-10 ">
        <div className="container p-8 flex  items-center justify-between">
          <Link href="/" className="ml-0 sm:ml-12">
            <ImEmbed2 />
          </Link>
          <p className="text-[var(--red-11)]">jarrwokspace @2023.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
