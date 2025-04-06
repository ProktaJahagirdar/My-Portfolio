import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="mywork"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                My latest work
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-14'
            >
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
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

                        {/* Gradient Overlay
                        <div className="absolute inset-0 pointer-events-none z-10">
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#4B0082] via-[#4B0082cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        </div> */}

                        {/* Tech Stack Popup */}
                        {/* <motion.div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-auto"
                        > */}
                        {/* Dim Background */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082cc] to-transparent rounded-xl" /> */}

                        {/* Popup Content */}
                        {/* <div className="text-center text-white px-6 z-10">
                                <span className='font-bold text-xl block mb-3'>Tech Stack</span>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {Array.isArray(project.techStack) && project.techStack.length > 0 ? (
                                        project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-100 text-[#11001F] text-sm px-3 py-1 rounded-full dark:bg-purple-300 dark:text-[#11001F] font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-300">No tech stack provided</span>
                                    )}
                                </div>
                            </div>
                        </motion.div> */}

                        {/* Description */}
                        < div className='p-5 flex flex-col gap-2 z-0' >
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-sm text-gray-700 dark:text-gray-300 line-clamp-4'>{project.description}</p>

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
                ))
                }
            </motion.div >

            {/* <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href='#'
                className='w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
            >
                Show More
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt='Right arrow'
                    className='w-4'
                />
            </motion.a> */}
        </motion.div >
    )
}

export default Work

