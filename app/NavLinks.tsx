import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLinks = () => {
  const [isactive, setIsActive] = useState();
  const currentPath = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Works", href: "/works/list" },
  ];

  return (
    <ul className="flex space-x-6">
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
  );
};

export default NavLinks;
