import React from 'react'
import image from "../assets/ImageMe.png"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react';

const Header = () => {
    return (
        <div className='lg:flex'>
            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='flex items-start mt-10 justify-center lg:flex-1 lg:order-2'
            >
                <img
                    src={image}
                    alt=""
                    className='outline outline-white/20 shadow-2xl shadow-black lg:h-[500px] lg:w-[500px] lg:rounded-full object-cover object-top hover:scale-105 transition duration-700'
                />
            </motion.div>

            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className='space-y-6 mt-16 lg:flex-1'
            >
                <div className="text-5xl font-bold leading-tight lg:text-7xl">
                    <h1 className="transition-all duration-500 ease-out hover:[letter-spacing:1px]">
                        Meet Black Aro
                    </h1>
                    <h1 className="transition-all duration-500 ease-out hover:[letter-spacing:1px]">
                        The Developer <br /> Behind This
                    </h1>
                </div>
                <p className="text-xl lg:text-xl text-gray-300 leading-relaxed">
                    I'm Arbaz Ali also known as Black Aro a passionate MERN-Stack developer
                    focused on building clean, modern and performance-driven digital experiences.
                </p>

                <a
                    href="/Arbaz_Resume2025.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 mt-2 bg-gradient-to-r from-white/10 to-white/20 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                    <Download size={20} /> Download Resume
                </a>

                <div className='flex flex-col gap-4 mb-10 mt-6'>
                    <p className='font-semibold text-gray-300'>Follow Me By These:</p>
                    <ul className='flex gap-6'>
                        <a href="https://www.instagram.com/arbaz_ali8253/" target="_blank" rel="noopener noreferrer">
                            <li className='hover:scale-110 transition cursor-pointer'><Instagram size={30} /></li>
                        </a>
                        <a href="https://www.linkedin.com/in/arbaz-ali-290917325/" target="_blank" rel="noopener noreferrer">
                            <li className='hover:scale-110 transition cursor-pointer'><Linkedin size={30} /></li>
                        </a>
                        <a href="https://www.youtube.com/@AroXperience" target="_blank" rel="noopener noreferrer">
                            <li className='hover:scale-110 transition cursor-pointer' ><Youtube size={30} /></li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100067117656822" target="_blank" rel="noopener noreferrer">
                            <li className='hover:scale-110 transition cursor-pointer'><Facebook size={30} /></li>
                        </a>
                    </ul>
                </div>
            </motion.div>

        </div>
    )
}

export default Header
