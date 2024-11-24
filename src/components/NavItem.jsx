import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function NavItem({ label, mobileClass, href }) {
  return (
    <motion.li variants={itemVariants} className={`relative flex flex-col items-center p-1 gap-x-2 text-white`}>
      <a
        href={href}
        className="relative flex items-center text-white before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-blue-500 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 px-5 cursor-pointer"
      >
        {label}
      </a>
    </motion.li>
  );
}
