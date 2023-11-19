import React from "react";
import NavLinks from "./NavLinks";

interface Link {
  label: string;
  href: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: Link, index: number) => (
        <li key={index}>
          {/* Assuming NavLinks has 'path' and 'title' props */}
          <NavLinks href={link.href} title={link.label} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
