import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/variants";
import { TypeingText } from "./TypeingText";
const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, mount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto "
      >
        <TypeingText title="| About Metaversus" textStyle="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/assets/arrow-down.svg"
          className="w-[18px] h-[30px] mx-auto object-contain mt-[30px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
