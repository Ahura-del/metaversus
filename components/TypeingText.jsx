import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/variants";
export const TypeingText = ({ title, textStyle }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[24px] text-white ${textStyle}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
  >
    {title}
  </motion.h2>
);
