'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2, Smartphone, Globe2, ChevronRight } from 'lucide-react'
import { circOut, motion, type } from 'framer-motion'
import ContactModal from './ContactModal'
import { testConnection } from './supabaseinit'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-[#f3be1a]" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#f3be1a]" />,
      title: "Mobile App Development",
      description: "Innovative mobile applications for iOS and Android platforms"
    },
    {
      icon: <Globe2 className="w-12 h-12 text-[#f3be1a]" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence"
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1,
      x: 0,
      transition:{
        delay:0.5,
        default:{type:"spring"},
        duration:0
      }
    }
  }
  const ballVariant = {
    animate:{ x: 100, y: 100, rotate:  180 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Navigation */}
        <nav className="bg-black shadow-sm fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/favicon.png" alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-[#f3be1a] font-sans">REWER</span>
          </div>
          
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-[#f3be1a]">Services</a>
              <a href="#contact" className="text-white hover:text-[#f3be1a]">Contact</a>
              <motion.button whileHover={{rotate:5,scale:1.05}} onClick={() => setIsModalOpen(true)} className="bg-[#f3be1a] text-black px-6 py-2 rounded-full transition-colors">
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#f3be1a]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black shadow-lg">
              <a href="#services" className="block px-3 py-2 text-white hover:text-[#f3be1a]">Services</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#f3be1a]">Contact</a>
              <button onClick={() => setIsModalOpen(true)} className="w-full text-left px-3 py-2 text-[#f3be1a] font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>ī

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
      <motion.div className='absolute top-[300px] left-[200px] h-[100px] w-[100px] bg-gradient-to-r from-[#f5a002] to-[#000000] rounded-full z-0'  ></motion.div>
      <motion.div className='absolute top-[20px] left-400 h-[100px] w-[100px] bg-gradient-to-r from-[#f5a002] to-[#000000] rounded-full z-0'></motion.div>
      <div className="relative max-w-7xl mx-auto z-1">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {!isModalOpen && (<Typewriter options={{
                                    strings:["Transform Idea into Digital Reality","We Build Exceptional Digital Experiences","We Create Digital Excellence"],
                                    loop:true,
                                    autoStart:true, 
              }} className={isModalOpen?"inline hidden ":"inline"}/>)}
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
              We're a team of passionate creators building exceptional digital experiences
              for forward-thinking companies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button whileHover={isModalOpen?{}:{rotate:5,scale:1.05}} exit={{opacity:0}} whileTap={{scale:0.99}} transition={isModalOpen?{duration:0}:{duration:0.1}} onClick={() => setIsModalOpen(true)} className={`${isModalOpen?"":""}  bg-[#f3be1a] text-black px-8 py-3 rounded-full hover:bg-[#acb5bc] transition-colors flex items-center justify-center`}>
                Start Your Project <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-700"
                initial="hidden"
                whileInView="visible"
                whileHover={{scale:1.05,rotate:5}}
                transition={{delay:index*0.2}}
                variants={cardVariants}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-white max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with us today.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#f3be1a] text-black px-8 py-4 rounded-full hover:bg-[#acb5bc] transition-colors text-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f3744] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold">REWER</span>
              <p className="mt-2 text-[#acb5bc]">Creating digital excellence</p>
            </div>
            <div className="flex space-x-8">
              <a href="#services" className="text-[#acb5bc] hover:text-white">Services</a>
              <a href="#contact" className="text-[#acb5bc] hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#acb5bc] text-center text-[#acb5bc]">
            <p>&copy; {new Date().getFullYear()} REWER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}