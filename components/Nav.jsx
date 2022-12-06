import { motion } from "framer-motion";
import React from "react";
import { navVariant } from "../utils/variants";

function Nav() {
  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      whileInView="show"
      className="py-8 px-12 relative "
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <img
          src="/assets/search.svg"
          alt="search icon"
          className="object-contain w-[24px] h-[24px] "
        />
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          METAVERSE
        </h2>
        <img
          src="/assets/menu.svg"
          alt="menu icon"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
}

export default Nav;
