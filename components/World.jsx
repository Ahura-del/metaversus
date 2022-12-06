import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/variants";
import { TitleText, TypeingText } from "./TypeingText";
const World = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypeingText title="| People on the World" textStyle="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyle="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/assets/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/assets/people-01.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/assets/people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="/assets/people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/4 right-[250px] w-[180px] h-[115px] bg-gradient-to-b from-[rgba(85,85,85,.8)] to-[rgba(85,85,85,0.8)] p-[6px] rounded-[24px] ">
            <div className="relative w-full h-full bg-[url('/assets/1624.png')] bg-no-repeat bg-cover rounded-[24px]">
             
              <div className="flex items-center h-full justify-between px-4">
                <img src="/assets/groupuser.png" alt="group user" />
                <p className="text-white text-[10px] font-thin">
                  +264 has joined
                </p>
              </div>
              <div className="absolute top-0 w-full h-full flex items-end justify-center ">
                <p className="text-white text-[16px]">Hawkins Labs</p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-[200px] w-[180px] h-[115px] bg-gradient-to-b from-[rgba(85,85,85,.8)] to-[rgba(85,85,85,0.8)] p-[6px] rounded-[24px] ">
            <div className="relative w-full h-full bg-[url('/assets/2351.png')] bg-no-repeat bg-cover rounded-[24px]">
              <div className="flex items-center h-full justify-between px-4">
                <img src="/assets/groupuser.png" alt="group user" />
                <p className="text-white text-[10px] font-thin">
                  +264 has joined
                </p>
              </div>
              <div className="absolute top-0 w-full h-full flex items-end justify-center ">
                <p className="text-white">The upside down</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
