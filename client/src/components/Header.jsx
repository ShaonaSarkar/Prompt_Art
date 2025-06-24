import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }
        else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-17'
        initial = {{opacity: 0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
    >
        <motion.div 
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-300'
        initial = {{opacity: 0, y:-20}}
        transition={{delay:0.2, duration:0.8}}
        animate={{opacity:1, y:0}}
        >
            <p>Where Words Become Art</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 
        className='text-5xl max-w-[390px] sm:text-6xl sm:max-w-[690px] mx-auto mt-10 text-center'
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{delay: 0.4, duration: 2}}
        >Turn Your <span className='text-blue-600'>Words</span> into Stunning Images</motion.h1>

        <motion.p className='text-center max-w-[400px] sm:max-w-xl mx-auto mt-5'
        initial = {{opacity: 0, y:20}}
        animate = {{opacity: 1, y:0}}
        transition={{delay: 0.6, duration: 0.8}}
        >Type a prompt, and let our AI transform your imagination into vivid visuals. Fast, creative, and powerful.</motion.p>

        <motion.button 
        onClick={onClickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{default:{ duration: 0.5 }, opacity: { delay: 0.8, duration: 1 }}}
        >
            <img src={assets.star_group} alt="" className='h-5'/>
            Generate Now 
            <img src={assets.star_group} alt="" className='h-5'/>
        </motion.button>

        <motion.div className='flex flex-wrap justify-center mt-12 gap-3'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1, duration:1 }}
        >
            {Array(6).fill('').map((item, index)=>(
                <motion.img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-15'
                whileHover={{scale:1.05, duration: 0.1}}
                src={index%2 == 0 ? assets.sample_img_1 : assets.sample_img_2} 
                alt="sample image 1" 
                key={index} width={70}/>
            ))}
        </motion.div>

        <motion.p className='mt-2 text-neutral-600'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: 1.2, duration:0.8}}
        >Generated Images by using promptart</motion.p>
    </motion.div>
  )
}

export default Header