import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="services" className='w-full px-8 sm:px-[12%] py-10 scroll-mt-20'>
            {/* <motion.h4 initial ={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:0.3}} className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4> */}
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-Ovo'>My Skills</motion.h2>

            {/* <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am full stack developer with 3+ years of experience in software engineering.</motion.p> */}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }} className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
                {serviceData.map(({ icon, title, skills }, index) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={index} className='border border-gray-400 rounded-3xl px-8 py-12 hover:shadow-black cursor pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>

                        {/* Title with logo */}
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={icon} alt={`${title} icon`} className="w-8 h-8" /> {/* Tiny logo */}
                            <h3 className="text-lg text-gray-700 dark:text-white">{title}</h3>
                        </div>

                        {/* Skills list */}
                        <div className="flex flex-wrap justify-start gap-2 mt-6 w-full">
                            {(skills || []).map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="bg-[#F3E8FF] text-[#11001F] py-2 px-5 rounded-full "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p> */}
                        {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                        </a> */}
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Services

