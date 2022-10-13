import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function AboutMe({}: Props) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className='flex flex-col relative h-screen text-center md:text-left
     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
    <h3
     className='absolute top-24 uppercase tracking-[20px] text-gray-400
     text-2xl'
    >
        About
    </h3>

       <motion.img
         initial={{
            x: -200,
            opacity: 0,
         }}
         transition={{
            duration: 1.2,
         }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         src='https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&w=400'
         className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
         object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px]
         xl:h-[600px]'
       />

       <div className='space-y-10 py-4 md:px-10'>
         <h4 className='text-4xl font-semibold'>
            here is at <span className='underline
            decoration-[gold]/40'>little</span> {" "}  bio of me
         </h4>

         <p className='text-base'>
            I,m daniel j. martinez im devolopers begginer for UI designer frontend 
            development am learning more about this technologies for future create innovate
            web pages and real time to backend sites this technologies like reactjs, next, 
            express, typescript, nodejs, jsonwebtoken, bcrypt, etc. for the data and requesting
            fetch on the server API ✔️⭐💯 let,s for more learning about info TI, cybersecurity, and
            basics networks, I should now about I must know more about information technology in general 
            to generate many contributions to high-level and intermediate companies im convert in at future
            systems enginner.
         </p>
       </div>
    </motion.div>
  )
}