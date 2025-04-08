import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="mywork"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-center text-5xl font-Ovo'
            >
                My latest work
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-14'
            >
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                        key={index}
                        className='relative rounded-xl shadow-lg bg-white dark:bg-[#1f1f1f] overflow-hidden flex flex-col justify-between h-full border border-gray-200 dark:border-gray-700 group'
                    >
                        {/* Image */}
                        <div className='relative h-48 w-full'>
                            <Image
                                src={project.bgImage}
                                alt={project.title}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-t-xl'
                            />
                        </div>

                        {/* Description */}
                        <div className='p-5 flex flex-col gap-2 z-0'>
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-sm text-gray-700 dark:text-gray-300 line-clamp-4'>
                                {project.description}
                            </p>

                            <a
                                href={project.githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 bg-black text-white dark:bg-lime-400 dark:text-black text-center py-2 px-4 rounded-full text-sm font-medium hover:opacity-90 transition duration-300 w-max'
                            >
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Work
