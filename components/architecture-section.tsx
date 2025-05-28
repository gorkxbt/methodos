'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  Workflow, 
  Shield, 
  Cloud, 
  Database, 
  Network,
  Monitor,
  Zap
} from 'lucide-react'

const architectureLayers = [
  {
    id: 'presentation',
    title: 'AI Interface Layer',
    description: 'Intelligent user interfaces with natural language processing and adaptive UX.',
    icon: Brain,
    technologies: ['React', 'Natural Language Processing', 'Adaptive UI'],
    color: 'from-purple-500 to-hack',
    gridArea: 'ai-interface',
  },
  {
    id: 'business',
    title: 'Workflow Engine',
    description: 'Automated business logic and workflow orchestration with AI-driven decision making.',
    icon: Workflow,
    technologies: ['Workflow Automation', 'Business Rules', 'AI Decision Engine'],
    color: 'from-blue-500 to-hack',
    gridArea: 'workflow',
  },
  {
    id: 'application',
    title: 'AI Core',
    description: 'Core artificial intelligence and machine learning processing engine.',
    icon: Monitor,
    technologies: ['Machine Learning', 'Neural Networks', 'AI Processing'],
    color: 'from-hack to-green-400',
    gridArea: 'ai-core',
  },
  {
    id: 'security',
    title: 'Security Layer',
    description: 'End-to-end encryption, authentication, and access control systems.',
    icon: Shield,
    technologies: ['Zero-Trust Security', 'Encryption', 'Identity Management'],
    color: 'from-red-500 to-hack',
    gridArea: 'security',
  },
  {
    id: 'deployment',
    title: 'AI-Powered Deployment Pipeline',
    description: 'Automated deployment and scaling with intelligent resource management.',
    icon: Cloud,
    technologies: ['Docker', 'Kubernetes', 'Auto-scaling', 'CI/CD'],
    color: 'from-orange-500 to-hack',
    gridArea: 'deployment',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Layer',
    description: 'Distributed computing infrastructure with edge computing capabilities.',
    icon: Database,
    technologies: ['Microservices', 'Edge Computing', 'Load Balancing'],
    color: 'from-gray-500 to-hack',
    gridArea: 'infrastructure',
  }
]

export default function ArchitectureSection() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const gridRef = useRef<HTMLDivElement>(null)

  return (
    <section id="architecture" ref={ref} className="py-32 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-900/20" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-hack/10 border border-hack/30 rounded-full px-6 py-2 mb-8"
          >
            <Network className="h-5 w-5 text-hack" />
            <span className="text-hack font-mono text-sm">System Architecture</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Modular </span>
            <span className="text-gradient">Intelligence</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A sophisticated, layered architecture designed for enterprise scalability and AI-driven automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Architecture Visualization - CLEAN NODE LAYOUT */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-lg mx-auto bg-card/20 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden p-8"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-hack/5 via-transparent to-purple-500/5" />
              
              {/* Subtle Grid Background for Context */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 25%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 25% 75%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.05) 0%, transparent 50%)
                  `
                }} />
              </div>
              
              {/* Clean Grid Architecture Layout */}
              <div 
                ref={gridRef}
                className="relative w-full h-[560px]"
              >
                <div 
                  className="grid w-full h-full gap-6 p-4 relative"
                  style={{
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(4, 1fr)',
                    gridTemplateAreas: `
                      ". ai-interface ."
                      "workflow . ai-core"
                      "security . deployment"
                      ". infrastructure ."
                    `
                  }}
                >
                  {/* Architecture Nodes with Enhanced Visual Effects */}
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={layer.id}
                      className="flex flex-col items-center justify-center cursor-pointer relative z-10"
                      style={{ gridArea: layer.gridArea }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                    >
                      {/* Node Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at center, rgba(0, 255, 65, 0.1) 0%, transparent 70%)`,
                          transform: 'scale(1.5)',
                        }}
                        animate={{
                          opacity: selectedLayer === layer.id ? 0.6 : 0.2,
                          scale: selectedLayer === layer.id ? 2 : 1.5,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div
                        className={`relative w-20 h-20 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 flex items-center justify-center mb-3 ${
                          selectedLayer === layer.id 
                            ? 'bg-hack/20 border-hack shadow-xl shadow-hack/40' 
                            : 'bg-card/60 border-gray-600 hover:border-hack/60 hover:bg-hack/10'
                        }`}
                        whileHover={{ 
                          boxShadow: selectedLayer === layer.id 
                            ? '0 20px 40px rgba(0, 255, 65, 0.4)' 
                            : '0 10px 20px rgba(0, 255, 65, 0.15)' 
                        }}
                      >
                        <layer.icon className={`h-8 w-8 transition-colors duration-300 ${
                          selectedLayer === layer.id ? 'text-hack' : 'text-white'
                        }`} />
                        
                        {/* Pulse effect */}
                        {selectedLayer === layer.id && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-hack"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 1.4, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        
                        {/* Data Flow Indicator */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-hack rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6] 
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.3 
                          }}
                        />
                      </motion.div>
                      
                      {/* Label */}
                      <div className={`text-xs font-medium text-center leading-tight max-w-[90px] ${
                        selectedLayer === layer.id ? 'text-hack' : 'text-gray-300'
                      }`}>
                        <div className="line-clamp-2">
                          {layer.title}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating Data Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-hack/40 rounded-full"
                    initial={{ 
                      x: Math.random() * 400, 
                      y: Math.random() * 300,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: Math.random() * 400,
                      y: Math.random() * 300,
                      opacity: [0, 0.6, 0] 
                    }}
                    transition={{ 
                      duration: Math.random() * 8 + 4,
                      repeat: Infinity,
                      delay: Math.random() * 4
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Layer Details Panel */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {selectedLayer ? (
                (() => {
                  const layer = architectureLayers.find(l => l.id === selectedLayer)
                  return layer ? (
                    <motion.div
                      key={selectedLayer}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-card/40 backdrop-blur-sm border border-hack/30 rounded-xl p-8"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-center`}>
                          <layer.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                          <span className="text-hack font-mono text-sm">Core Component</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {layer.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center space-x-2">
                          <Monitor className="h-4 w-4 text-hack" />
                          <span>Key Technologies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 bg-hack/10 border border-hack/30 rounded-lg text-hack text-sm font-mono"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                })()
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card/20 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
                >
                  <div className="text-center">
                    <Network className="h-16 w-16 text-hack/50 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Explore the Architecture
                    </h3>
                    <p className="text-gray-400">
                      Click on any component to learn more about its role in the MethodOS ecosystem.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 