import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "hey, am daniel junior",
            "Designer UI",
            "Web developer",
            "<Create new web things/>"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center
        justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="" />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-300 pb-2 
                tracking-[15px]'>
                    System Enginner
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='green' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                     <button className='heroBtn'>About</button>
                    </Link>

                    <Link href='#experience'>
                      <button className='heroBtn'>Experience</button>
                    </Link>

                    <Link href='#myskills'>
                      <button className='heroBtn'>My Skills</button>
                    </Link>

                    <Link href='#projects'>
                      <button className='heroBtn'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}