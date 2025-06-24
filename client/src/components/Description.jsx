import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const 
Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI images</h1>
        <p className='text-gray-500 mb-8 '>Turn your imaginations into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <motion.img src={assets.sample_img_1} alt="sample image 1" className='w-80 xl:w-70 rounded-lg'
            whileHover={{scale:1.05, duration: 0.1}}
            />
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>
                    Introducing the AI powered Text to Image Generator
                </h2>
                <p className='text-gray-600 mb-4'>Welcome to our Text-to-Image Generator — a personal project designed to turn your words into powerful visuals. This website uses advanced AI to create images from simple text prompts. Just describe what you imagine, and watch it transform into a unique, high-quality image within seconds. Whether you’re experimenting for fun, looking for design inspiration, or exploring AI technology, this platform makes creativity easy and accessible.</p>
                <p className='text-gray-600'>No technical skills or artistic background are needed — just type, generate, and explore. Built with passion and curiosity, this project aims to bridge the gap between imagination and visual art through the power of machine learning. Give it a try and see how your ideas can become real, one prompt at a time.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description