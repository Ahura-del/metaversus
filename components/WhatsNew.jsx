import React from 'react'
import {motion} from 'framer-motion'
import { TitleText, TypeingText } from './TypeingText'
import { fadeIn, planetVariants, staggerContainer } from '../utils/variants'
import { newFeatures } from '../constants'
import NewFeatures from './NewFeatures'
const WhatsNew = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 lg:flex-row'
    >
       
        <motion.div variants={fadeIn('left' , 'tween' , 0.2,1)}
        className="flex-[0.75] flex justify-center flex-col"
        >
            <TypeingText title="| Whats New?" />
            <TitleText title={<>Whats's new about Metaverse.</>} />
            <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
                {newFeatures.map((feature , index)=>(
                    <NewFeatures key={feature.title} {...feature } />
                ))}
            </div>
        </motion.div>
        <motion.div variants={planetVariants('right')} 
        className="flex-1 flex justify-center items-center"
        >
            <img src='/assets/whats-new.png' alt="get-started" className='w-[90%] h-[90%] object-contain'  />
        </motion.div>
    </motion.div>
</section>
  )
}

export default WhatsNew