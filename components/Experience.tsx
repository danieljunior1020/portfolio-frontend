import React from 'react'
import { motion } from 'framer-motion'
import CardExperience from './CardExperience'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col
    text-lft md:flex-row'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400
     text-2xl max-w-full px-10 justify-evenly mx-auto items-center'>
          Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-y-scroll
        p-10 snap-x snap-mandatory'>
            <CardExperience />
            <CardExperience />
            <CardExperience />
        </div>
    </motion.div>
  )
}

export default Experience