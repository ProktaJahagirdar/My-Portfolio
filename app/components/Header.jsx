import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion" // ✅ ensure using 'framer-motion'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

      {/* Profile Image Animation */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }} // ✅ animate once
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>

      {/* Greeting Animation */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }} // ✅ animate once
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm Prokta Jahagirdar
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      {/* Job Title Animation */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }} // ✅ animate once
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Software Developer
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }} // ✅ animate once
        className='max-w-2xl mx-auto font-Ovo'
      >
        As a Software Engineer with a keen eye for visual communication, I'm passionate about incorporating tech and design to create top-notch applications.
      </motion.p>

      {/* Links Section */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        {/* Github Link */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }} // ✅ animate once
          href="https://github.com/ProktaJahagirdar"
          target="_blank"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          Github
        </motion.a>

        {/* LinkedIn Link */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }} // ✅ animate once
          href="https://www.linkedin.com/in/jprokta/"
          target="_blank"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          LinkedIn
        </motion.a>

        {/* Resume Link */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }} // ✅ animate once
          href="/Prokta Jahagirdar_Software Engineer"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          Resume
        </motion.a>
      </div>
    </div>
  )
}

export default Header
