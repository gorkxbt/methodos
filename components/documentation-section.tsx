'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  FileText, 
  Code, 
  Cog, 
  Rocket, 
  Users, 
  ChevronRight,
  Download,
  ExternalLink,
  Search
} from 'lucide-react'

const docSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: BookOpen,
    description: 'Overview of MethodOS and its revolutionary approach to workflow automation',
    content: `Method OS is a purpose-built operating system designed to revolutionize software engineering workflows by integrating state-of-the-art AI-driven code generation, intelligent orchestration, and seamless deployment management into a unified platform.

Key Benefits:
• 10x faster development cycles
• 90% reduction in manual errors  
• 24/7 automated operations
• Enterprise-grade security`
  },
  {
    id: 'architecture',
    title: 'Technical Architecture',
    icon: Cog,
    description: 'Deep dive into the modular, scalable system architecture',
    content: `MethodOS is architected as a layered, modular system designed for scalability, flexibility, and security.

Core Components:
• AI Code Synthesis Module - Powered by state-of-the-art LLMs
• Workflow Orchestration Engine - Event-driven automation
• Plugin Framework - Extensible integrations
• Deployment Suite - Multi-cloud orchestration
• Monitoring & Security - Enterprise observability`
  },
  {
    id: 'features',
    title: 'Key Features',
    icon: Code,
    description: 'Comprehensive overview of MethodOS capabilities',
    content: `MethodOS delivers unprecedented automation through:

AI-Augmented Development:
• Context-aware code generation
• Multi-language support (Python, JS, Go, Java+)
• Iterative refinement capabilities
• Security & compliance checks

Unified Workflow Automation:
• Declarative pipeline definitions
• Event-driven triggers
• Parallel & sequential execution
• Visual pipeline designer`
  },
  {
    id: 'use-cases',
    title: 'Use Cases',
    icon: Rocket,
    description: 'Real-world applications and implementation scenarios',
    content: `MethodOS excels in diverse scenarios:

Development Acceleration:
• Rapid prototyping with AI assistance
• Automated code review & optimization
• Smart testing & deployment

DevOps Automation:
• Intelligent CI/CD pipelines
• Infrastructure as Code generation
• Automated monitoring & alerting

Enterprise Integration:
• Legacy system modernization
• Multi-cloud migrations
• Compliance automation`
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    icon: Users,
    description: 'Future developments and community collaboration',
    content: `MethodOS Development Timeline:

Q3 2024: Core AI & Workflow Engine
• Basic code synthesis capabilities
• Workflow orchestration foundation
• Plugin architecture framework

Q4 2024: Multi-Cloud & Marketplace
• Kubernetes native deployment
• Plugin marketplace launch
• Advanced monitoring suite

Q1 2025: AI Enhancement & Collaboration
• Reinforcement learning optimization
• Team collaboration features
• Security & compliance tools`
  }
]

export function DocumentationSection() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [searchQuery, setSearchQuery] = useState('')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const activeDoc = docSections.find(doc => doc.id === activeSection)

  return (
    <section id="docs" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-hack/10 border border-hack/30 rounded-full px-6 py-2 mb-6"
          >
            <BookOpen className="h-5 w-5 text-hack" />
            <span className="text-hack font-mono">Documentation</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Complete </span>
            <span className="text-gradient">Documentation</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, API references, and implementation examples 
            to help you build with MethodOS.
          </p>
        </motion.div>

        {/* Documentation Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-hack focus:outline-none"
                />
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {docSections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-hack/20 border border-hack/30 text-hack'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <section.icon className="h-5 w-5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{section.title}</div>
                      <div className="text-xs text-gray-400 truncate">
                        {section.description}
                      </div>
                    </div>
                    {activeSection === section.id && (
                      <ChevronRight className="h-4 w-4 text-hack" />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="ghost" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  API Reference
                </Button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-gray-700 rounded-lg p-8 min-h-[600px]"
            >
              {/* Content Header */}
              <div className="flex items-center space-x-3 mb-6">
                {activeDoc && (
                  <>
                    <activeDoc.icon className="h-8 w-8 text-hack" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeDoc.title}</h3>
                      <p className="text-gray-400">{activeDoc.description}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Content Body */}
              <div className="prose prose-invert max-w-none">
                {activeDoc && (
                  <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                    {activeDoc.content}
                  </div>
                )}
              </div>

              {/* Code Example */}
              {activeSection === 'introduction' && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Start Example</h4>
                  <div className="code-block">
                    <pre className="text-hack font-mono text-sm">
{`# Install MethodOS
curl -fsSL https://install.methodos.dev | sh

# Initialize new project
methodos init my-ai-project

# Generate workflow
methodos create-workflow "Deploy ML Model" \\
  --trigger git-push \\
  --stage test,build,deploy

# Start automation
methodos start`}
                    </pre>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    Edit on GitHub
                  </Button>
                  <Button variant="terminal" size="sm">
                    Try Example
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'API Reference',
              description: 'Complete API documentation with examples',
              icon: Code,
              link: '#api'
            },
            {
              title: 'Tutorials',
              description: 'Step-by-step guides for common workflows',
              icon: BookOpen,
              link: '#tutorials'
            },
            {
              title: 'Community',
              description: 'Join our developer community',
              icon: Users,
              link: '#community'
            }
          ].map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group bg-card border border-gray-700 rounded-lg p-6 hover:border-hack/50 transition-all duration-300 cursor-pointer"
            >
              <resource.icon className="h-8 w-8 text-hack mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-hack transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              <div className="flex items-center text-hack text-sm font-mono">
                Learn more
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 