import React from 'react'
import { motion } from "framer-motion";
import { assets, experienceData } from '@/assets/assets'

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // ✅ only animate once
            id="experience"
            className="w-full px-[12%] py-10 scroll-mt-20 mb-20"
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }} // ✅ only animate once
                className="text-center text-5xl font-Ovo"
            >
                Experience
            </motion.h2>

            {/* Timeline Container */}
            <div className="relative mt-10">
                {/* Middle Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gray-300 hidden sm:block"></div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-10">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }} // ✅ only animate once
                            className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white sm:block hidden"></div>

                            {/* Experience Box */}
                            <div
                                className={`w-full sm:w-[45%] bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-300 dark:border-gray-700 ${index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-left"}`}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {exp.role}
                                </h3>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    {exp.company}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    {exp.timePeriod}
                                </p>

                                {/* Work Description */}
                                <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                                    {exp.description.map((task, idx) => (
                                        <li key={idx} className="text-md">{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
