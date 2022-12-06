import React from 'react'
import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/variants';
import { TitleText, TypeingText } from './TypeingText';
import { insights } from '../constants';
import InsightCard from './InsightCard';
const Insights = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'
    >
      <TypeingText title="Insight" textStyle="text-center" />
      <TitleText title="Insight about metaverse" textStyle="text-center" />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
    {insights.map((insight , index)=>(
      <InsightCard key={`insight-${index}`} index={index +1 } {...insight} />
    ))}
      </div>
    </motion.div>
        
    </section>
  )
}

export default Insights