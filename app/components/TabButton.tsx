import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-white"
    : "text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-secondary-100 ";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-[var(--red-11)] ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-br from-primary-500 to-secondary-500  mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
