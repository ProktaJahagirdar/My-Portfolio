import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion" // ✅ use framer-motion not "motion/react"

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // ✅ animate once
            id="services"
            className='w-full px-8 sm:px-[12%] py-10 scroll-mt-20'
        >
            {/* Section Header */}
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }} // ✅ animate once
                className='text-center text-5xl font-Ovo'
            >
                My Skills
            </motion.h2>

            {/* Services Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }} // ✅ animate once
                className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'
            >
                {serviceData.map(({ icon, title, skills }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='border border-gray-400 rounded-3xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                    >
                        {/* Title and Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={icon} alt={`${title} icon`} className="w-8 h-8" />
                            <h3 className="text-lg text-gray-700 dark:text-white">{title}</h3>
                        </div>

                        {/* Skills list */}
                        <div className="flex flex-wrap justify-start gap-2 mt-6 w-full">
                            {(skills || []).map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="bg-[#F3E8FF] text-[#11001F] py-2 px-5 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
