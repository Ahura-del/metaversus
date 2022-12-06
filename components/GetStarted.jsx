import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn, planetVariants, staggerContainer } from '../utils/variants';
import { TitleText, TypeingText } from './TypeingText';
import { startingFeatures } from '../constants';
import StartSteps from './StartSteps';
const GetStarted = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 lg:flex-row'
        >
            <motion.div variants={planetVariants('left')} 
            className="flex-1 flex justify-center items-center"
            >
                <img src='/assets/get-started.png' alt="get-started" className='w-[90%] h-[90%] object-contain'  />
            </motion.div>
            <motion.div variants={fadeIn('left' , 'tween' , 0.2,1)}
            className="flex-[0.75] flex justify-center flex-col"
            >
                <TypeingText title="| How Metaverse Works" />
                <TitleText title={<>Get started with just a few clicks.</>} />
                <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                    {startingFeatures.map((feature , index)=>(
                        <StartSteps key={feature} number={index + 1} text={feature} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default GetStarted