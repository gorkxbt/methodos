'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Github, Twitter, Mail, ExternalLink, X, Code, Zap, Database } from 'lucide-react'

const footerSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Architecture', href: '#architecture' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Pricing', href: '#pricing' }
    ]
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '#api-reference', action: 'openApiModal' },
      { name: 'GitHub', href: 'https://github.com/methodos', external: true },
      { name: 'SDK Examples', href: '/docs#sdk' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Tutorials', href: '/docs#tutorials' },
      { name: 'Best Practices', href: '/docs#best-practices' },
      { name: 'Support', href: '#support' },
      { name: 'Status', href: 'https://status.methodos.dev', external: true }
    ]
  }
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/methodos' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/methodosai' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@methodos.dev' }
]

const apiEndpoints = [
  {
    method: 'POST',
    endpoint: '/api/v1/workflows',
    description: 'Create a new workflow',
    example: `{
  "name": "Deploy React App",
  "triggers": ["push"],
  "steps": [
    {
      "name": "Build",
      "action": "build",
      "config": { "framework": "react" }
    }
  ]
}`
  },
  {
    method: 'GET',
    endpoint: '/api/v1/workflows/{id}',
    description: 'Get workflow details',
    example: `{
  "id": "wf_12345",
  "status": "running",
  "created_at": "2024-01-15T10:30:00Z",
  "steps": [...]
}`
  },
  {
    method: 'POST',
    endpoint: '/api/v1/ai/generate',
    description: 'Generate code using AI',
    example: `{
  "prompt": "Create a React component for user authentication",
  "framework": "react",
  "language": "typescript"
}`
  }
]

export function Footer() {
  const [isApiModalOpen, setIsApiModalOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLinkClick = (link: any, e: React.MouseEvent) => {
    if (link.action === 'openApiModal') {
      e.preventDefault()
      setIsApiModalOpen(true)
    }
  }

  return (
    <>
      <footer className="relative bg-background border-t border-gray-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <Terminal className="h-8 w-8 text-hack" />
                  <div className="absolute inset-0 h-8 w-8 bg-hack/20 rounded-full blur-lg animate-pulse" />
                </div>
                <span className="text-2xl font-bold font-mono">
                  <span className="text-white">Method</span>
                  <span className="text-hack terminal-glow">OS</span>
                </span>
              </motion.div>
              
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Revolutionizing software engineering workflows with AI-driven automation, 
                intelligent orchestration, and seamless deployment management.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-card border border-gray-700 rounded-lg text-gray-400 hover:text-hack hover:border-hack/50 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="text-white font-semibold mb-4"
                >
                  {section.title}
                </motion.h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(link, e)}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-hack transition-colors duration-200 flex items-center space-x-1 group cursor-pointer"
                      >
                        <span>{link.name}</span>
                        {link.external && (
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card border border-gray-700 rounded-lg p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">
                  Get the latest updates on MethodOS development and releases.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-background border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-hack focus:outline-none min-w-[250px]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-hack text-black font-mono font-semibold rounded-lg hover:bg-hack/90 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 MethodOS. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-hack transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-hack transition-colors">
                  Terms of Service
                </a>
                <a href="#security" className="text-gray-400 hover:text-hack transition-colors">
                  Security
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <span className="text-hack">❤️</span>
              <span>for developers</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Elements - Only on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-hack/10 font-mono text-xs select-none"
                initial={{ 
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200, 
                  y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
                  opacity: 0 
                }}
                animate={{ 
                  y: -50, 
                  opacity: [0, 0.3, 0] 
                }}
                transition={{ 
                  duration: Math.random() * 15 + 20,
                  repeat: Infinity,
                  delay: Math.random() * 10
                }}
              >
                {['</>', 'npm install', 'git push', 'kubectl apply', 'docker run'][i]}
              </motion.div>
            ))}
          </div>
        )}
      </footer>

      {/* API Reference Modal */}
      <AnimatePresence>
        {isApiModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsApiModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-hack" />
                  <h2 className="text-2xl font-bold text-white">API Reference</h2>
                </div>
                <button
                  onClick={() => setIsApiModalOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                <div className="mb-6">
                  <p className="text-gray-400 mb-4">
                    MethodOS REST API v1.0 - Build powerful automation workflows programmatically
                  </p>
                  <div className="bg-background border border-gray-600 rounded-lg p-4 mb-6">
                    <h3 className="text-hack font-mono font-bold mb-2">Base URL</h3>
                    <code className="text-white font-mono">https://api.methodos.dev/v1</code>
                  </div>
                </div>

                <div className="space-y-6">
                  {apiEndpoints.map((api, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-background border border-gray-600 rounded-lg p-6"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                          api.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                          api.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          {api.method}
                        </span>
                        <code className="text-white font-mono">{api.endpoint}</code>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{api.description}</p>
                      
                      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                        <h4 className="text-hack font-mono text-sm mb-2">Example Response:</h4>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>{api.example}</code>
                        </pre>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-hack/10 border border-hack/30 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="h-5 w-5 text-hack" />
                    <h3 className="text-hack font-semibold">Authentication</h3>
                  </div>
                  <p className="text-gray-400 mb-3">
                    All API requests require an API key in the Authorization header:
                  </p>
                  <code className="bg-background border border-gray-600 rounded px-3 py-2 text-white font-mono text-sm block">
                    Authorization: Bearer your_api_key_here
                  </code>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <motion.a
                    href="/docs"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-hack text-black font-mono font-semibold rounded-lg hover:bg-hack/90 transition-colors"
                  >
                    Full Documentation
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 