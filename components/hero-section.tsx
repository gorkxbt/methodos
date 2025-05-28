'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Play, Download, ArrowRight, Cpu, Code, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'

const realCodeExamples = [
  {
    language: 'CLI',
    title: 'Quick Start with MethodOS',
    code: `$ methodos init ai-webapp
✓ Creating project structure...
✓ Setting up AI workflows...
✓ Configuring deployment pipeline...

$ methodos generate api "user-auth" --ai-enhanced
✓ AI analyzing requirements...
✓ Generated REST API with security...
✓ Created tests and documentation...

$ methodos deploy --environment production
✓ Running AI code review...
✓ Deploying with zero downtime...
✓ Monitoring activated automatically...

🚀 Your AI-powered app is live!`
  },
  {
    language: 'Workflow YAML',
    title: 'AI-Powered Deployment Pipeline',
    code: `# methodos-workflow.yaml
name: "Smart Deploy Pipeline"
version: "2.0"

ai_config:
  model: "gpt-4"
  context: "production-deployment"
  
triggers:
  - git_push: { branch: "main" }
  - schedule: { cron: "0 2 * * *" }

stages:
  ai_review:
    prompt: "Review code for security and performance"
    auto_fix: true
    
  smart_test:
    ai_test_generation: enabled
    coverage_target: 90%
    
  intelligent_deploy:
    strategy: ai_optimized
    rollback_threshold: "error_rate > 0.1%"
    monitoring: comprehensive

notifications:
  slack: "#deployments"
  email: ["team@company.com"]`
  },
  {
    language: 'TypeScript SDK',
    title: 'MethodOS SDK Integration',
    code: `import { MethodOS } from '@methodos/sdk'

// Initialize MethodOS with AI capabilities
const os = new MethodOS({
  apiKey: process.env.METHODOS_API_KEY,
  aiEnabled: true
})

// AI-powered code generation
const generateAPI = async () => {
  const api = await os.ai.generateCode({
    prompt: "Create a secure user authentication API",
    language: "typescript",
    framework: "express",
    features: ["jwt", "bcrypt", "rate-limiting"]
  })
  
  return api.deploy({ environment: "staging" })
}

// Intelligent workflow orchestration
const workflow = os.workflow()
  .onPush('main')
  .aiCodeReview({ model: 'gpt-4' })
  .smartTest({ aiGenerated: true })
  .deploy({ strategy: 'blue-green' })
  .monitor({ aiAnomalyDetection: true })

await workflow.start()`
  }
]

export function HeroSection() {
  const [currentExample, setCurrentExample] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const example = realCodeExamples[currentExample]
    let index = 0
    setDisplayedCode('')
    setIsTyping(true)

    const typeCode = () => {
      if (index < example.code.length) {
        setDisplayedCode(example.code.slice(0, index + 1))
        index++
        setTimeout(typeCode, 25)
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setCurrentExample((prev) => (prev + 1) % realCodeExamples.length)
        }, 4000)
      }
    }

    const timeout = setTimeout(typeCode, 1000)
    return () => clearTimeout(timeout)
  }, [currentExample])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Simple Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-hack/5" />
      </div>
      
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Binary Rain Effect */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-mono text-xs text-hack/20 select-none"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} className="mb-4">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-hack/10 border border-hack/30 rounded-full px-6 py-3 w-fit"
            >
              <Zap className="h-4 w-4 text-hack flex-shrink-0" />
              <span className="text-hack font-mono text-sm whitespace-nowrap">AI-Driven Workflow OS</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Method</span>
                <span className="text-hack terminal-glow">OS</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed"
              >
                The next-generation operating system that revolutionizes software development with{' '}
                <span className="text-hack font-semibold">AI-powered automation</span>{' '}
                and intelligent orchestration.
              </motion.div>
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Code, text: 'AI Code Synthesis', desc: 'Intelligent code generation' },
                { icon: Cpu, text: 'Smart Orchestration', desc: 'Automated workflows' },
                { icon: Terminal, text: 'One-Click Deploy', desc: 'Seamless deployment' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-card/30 border border-gray-800 hover:border-hack/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="h-8 w-8 text-hack mx-auto mb-2" />
                  <div className="font-mono text-sm text-white font-medium">{feature.text}</div>
                  <div className="text-xs text-gray-400">{feature.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://github.com/methodos" target="_blank" rel="noopener noreferrer">
                <Button variant="glow" size="lg" className="group w-full sm:w-auto">
                  <Play className="h-5 w-5 mr-2" />
                  Start Building
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <Link href="/docs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Documentation
                </Button>
              </Link>
            </motion.div>

            {/* Minimal Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-8 pt-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-hack rounded-full animate-pulse" />
                <span>10x Faster Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-hack rounded-full animate-pulse" />
                <span>90% Error Reduction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Terminal Window with Enhanced Design */}
              <div className="bg-card/80 backdrop-blur-sm border-2 border-hack/30 rounded-xl shadow-2xl shadow-hack/10 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-900/50 border-b border-hack/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-gray-300 font-mono text-sm">
                      {realCodeExamples[currentExample].title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {realCodeExamples.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentExample ? 'bg-hack' : 'bg-gray-600'
                        }`}
                        onClick={() => setCurrentExample(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 min-h-[500px] font-mono text-sm relative overflow-hidden">
                  <div className="text-hack/70 mb-3 text-xs uppercase tracking-wider">
                    {realCodeExamples[currentExample].language}
                  </div>
                  <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {displayedCode}
                    {isTyping && (
                      <motion.span 
                        className="text-hack"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        █
                      </motion.span>
                    )}
                  </pre>

                  {/* Animated Elements */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-3 h-3 bg-hack rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-hack/2 rounded-xl blur-xl -z-10" />
              <motion.div
                className="absolute inset-0 bg-hack/5 rounded-xl blur-lg -z-10"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-hack/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-hack rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 