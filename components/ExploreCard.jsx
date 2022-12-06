import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
    onClick={()=> handleClick(id)}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="absolute z-0 text-white font-semibold text-[18px] sm:text-[26px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col flex bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] flex justify-center items-center">
            <img src="/assets/headset.svg" alt="headset" />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse.
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white " >{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
