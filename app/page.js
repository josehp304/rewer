'use client'

import { useState } from 'react'
import { Menu, X, Code2, Smartphone, Globe2, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-[#fff4ce]">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Navigation */}
      <nav className="bg-[#fff4ce] shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="/images/favicon.png" alt="Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold text-[#f3be1a]">REWER</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#2f3744] hover:text-[#f3be1a]">Services</a>

              <a href="#contact" className="text-[#2f3744] hover:text-[#f3be1a]">Contact</a>
              <button onClick={() => setIsModalOpen(true)} className="bg-[#f3be1a] text-[#2f3744] px-6 py-2 rounded-full hover:bg-[#acb5bc] transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#2f3744] hover:text-[#f3be1a]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fff4ce] shadow-lg">
              <a href="#services" className="block px-3 py-2 text-[#2f3744] hover:text-[#f3be1a]">Services</a>
              {/* <a href="#work" className="block px-3 py-2 text-[#2f3744] hover:text-[#f3be1a]">Our Work</a> */}
              <a href="#contact" className="block px-3 py-2 text-[#2f3744] hover:text-[#f3be1a]">Contact</a>
              <button onClick={() => setIsModalOpen(true)} className="w-full text-left px-3 py-2 text-[#f3be1a] font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff4ce] to-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2f3744] mb-6">
              Transforming Ideas into
              <span className="text-[#f3be1a]"> Digital Reality</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#2f3744] mb-8 max-w-2xl mx-auto">
              We're a team of passionate creators building exceptional digital experiences
              for forward-thinking companies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#f3be1a] text-[#2f3744] px-8 py-3 rounded-full hover:bg-[#acb5bc] transition-colors flex items-center justify-center">
                Start Your Project <ChevronRight className="ml-2 h-5 w-5" />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2f3744] mb-4">Our Services</h2>
            <p className="text-[#2f3744] max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#ffffff] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#acb5bc]"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-[#2f3744]">{service.title}</h3>
                <p className="text-[#2f3744]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2f3744] mb-4">Let's Work Together</h2>
            <p className="text-[#2f3744] max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with us today.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#f3be1a] text-[#2f3744] px-8 py-4 rounded-full hover:bg-[#acb5bc] transition-colors text-lg font-medium">
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
              {/* <a href="#work" className="text-[#acb5bc] hover:text-white">Work</a> */}
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