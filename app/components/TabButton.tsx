import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./context/DarkModeContext";

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
  const { isDarkMode } = useDarkMode();
  const buttonClasses = active
    ? `${isDarkMode ? "text-white" : "text-[var(--red-8)]"}`
    : "text-[var(--red-9)] ";

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
        className="h-1 bg-[var(--red-10)]  mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
