import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem"; // Import komponen NavItem

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      x: -100,
      width: 1000,
      overflow: "hidden",
      transition: {
        duration: 0.4,
      },
    },
    visible: {
      opacity: 1,
      height: 180,
      x: -100,
      width: 1000,
      overflow: "hidden",
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <nav className="sticky top-0 block w-full px-4 py-2 mx-auto text-white bg-gray-950 shadow-md lg:px-8 lg:py-3 z-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a href="#" className="mr-4 block cursor-pointer py-1.5 text-base text-white font-semibold">
          Taman Sari Futsal N Basket
        </a>
        {/* Mobile Menu Button */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
        </button>

        {/* Menu Items */}
        <div
          className={`lg:relative lg:block w-full lg:w-auto lg:mt-0 z-10`}
          style={{
            position: "relative",
          }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                className="lg:hidden flex flex-col gap-2 items-center bg-black p-4"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  width: "100%",
                }}
              >
                <NavItem label="Home" href="#hero" mobileClass={true} />
                <NavItem label="About" href="#snippet" mobileClass={true} />
                <NavItem label="Booking" mobileClass={true} href="#booking" />
                <NavItem label="Devices" mobileClass={true} href="#access" />
                <NavItem label="Fasility" mobileClass={true} href="#supercharge" />
              </motion.ul>
            )}
          </AnimatePresence>
          <ul className="hidden lg:flex flex-row gap-1s items-center bg-black">
            <NavItem label="Home" href="#hero" mobileClass={true} />
            <NavItem label="About" href="#snippet" mobileClass={true} />
            <NavItem label="Booking" mobileClass={true} href="#booking" />
            <NavItem label="Devices" mobileClass={true} href="#access" />
            <NavItem label="Fasility" mobileClass={true} href="#supercharge" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
