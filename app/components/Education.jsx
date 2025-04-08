import React from 'react'
import { motion } from "framer-motion" // corrected import path
import { assets, educationData } from '@/assets/assets'

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // ✅ animate once
            id="education"
            className='w-full px-8 sm:px-[12%] py-10 scroll-mt-20 mb-20'
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }} // ✅ animate once
                className='text-center text-5xl font-Ovo'
            >
                Education
            </motion.h2>

            {/* Timeline Container */}
            <div className="relative mt-10">
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gray-300"></div>

                {/* Education Cards */}
                <div className="flex flex-col gap-10">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }} // ✅ animate once
                            className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                        >
                            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white z-10"></div>

                            <div
                                className={`w-full sm:w-[45%] bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-300 dark:border-gray-700 ${index % 2 === 0 ? "sm:ml-auto sm:text-left" : "sm:mr-auto sm:text-left"}`}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {edu.degree}
                                </h3>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    {edu.university}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    {edu.timePeriod}
                                </p>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    Related Coursework:
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {edu.coursework.map((course, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-purple-100 text-purple-900 py-1 px-3 rounded-full text-sm font-medium"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
