import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/variants";
import { TypeingText , TitleText } from "./TypeingText";
import {exploreWorlds} from '../constants'
import ExploreCard from "./ExploreCard";
const Explore = () => {
    const [active, setActive] = useState('world-2')
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, mount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >

        <TypeingText title="| The World" textStyle="text-center" />
        <TitleText title={<>choose the world you want <br className="md:block hidden"/> to explore.</>} textStyle="text-center" />
     
     <div className="mt-[50px] flex md:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((world , index)=>(
            <ExploreCard key={world.id} {...world} index={index} handleClick={setActive} active={active} />
        ))}
     </div>
     
     
     
      </motion.div>
    </section>
  );
};

export default Explore;
