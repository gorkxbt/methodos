'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Cpu, Zap, Menu, X, BookOpen } from 'lucide-react'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Documentation', href: '/docs' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-glass border-b border-hack/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Terminal className="h-8 w-8 text-hack" />
                <div className="absolute inset-0 h-8 w-8 bg-hack/10 rounded-full blur-md animate-pulse" />
              </div>
              <span className="text-xl font-bold font-mono">
                <span className="text-white">Method</span>
                <span className="text-hack terminal-glow">OS</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-hack transition-colors duration-200 font-mono text-sm relative group flex items-center space-x-1"
                  >
                    {item.name === 'Documentation' && <BookOpen className="h-4 w-4" />}
                    <span>{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hack transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-hack transition-colors duration-200 font-mono text-sm relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hack transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/methodos" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="font-mono">
                <Cpu className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </a>
            <a href="https://github.com/methodos" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="sm" className="font-mono">
                <Zap className="h-4 w-4 mr-2" />
                Install
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-hack transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-glass border border-hack/20 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith('/') ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-hack transition-colors font-mono text-sm flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name === 'Documentation' && <BookOpen className="h-4 w-4" />}
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-hack transition-colors font-mono text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 px-3 py-2">
                <a href="https://github.com/methodos" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="font-mono w-full">
                    <Cpu className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </a>
                <a href="https://github.com/methodos" target="_blank" rel="noopener noreferrer">
                  <Button variant="glow" size="sm" className="font-mono w-full">
                    <Zap className="h-4 w-4 mr-2" />
                    Install
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
} 