'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Rocket, 
  GitBranch, 
  Database, 
  Cloud, 
  Shield, 
  Bot,
  Zap,
  Code
} from 'lucide-react'

const useCases = [
  {
    category: 'Development',
    icon: Code,
    title: 'Accelerated Application Development',
    description: 'Rapid prototyping and iterative development with AI-assisted coding and automated testing.',
    benefits: ['10x faster development', 'Automated code review', 'Smart testing'],
    example: 'Build a complete microservice with AI-generated code, automated tests, and deployment pipeline in minutes.'
  },
  {
    category: 'Data Engineering',
    icon: Database,
    title: 'Automated Data Pipelines',
    description: 'Streamline ETL workflows with AI-generated scripts and orchestrated data processing tasks.',
    benefits: ['Smart data transformation', 'Auto-scaling pipelines', 'Real-time monitoring'],
    example: 'Process terabytes of data with auto-generated ETL scripts and intelligent error handling.'
  },
  {
    category: 'DevOps',
    icon: GitBranch,
    title: 'Intelligent CI/CD Automation',
    description: 'Create smart pipelines with error detection, automated remediation, and deployment optimization.',
    benefits: ['Zero-downtime deployments', 'Auto-rollback', 'Predictive scaling'],
    example: 'Deploy to production with AI-powered canary releases and automated rollback on anomaly detection.'
  },
  {
    category: 'AI/ML',
    icon: Bot,
    title: 'ML Model Lifecycle Management',
    description: 'Deploy, monitor, and update custom AI models within production workflows seamlessly.',
    benefits: ['Model versioning', 'A/B testing', 'Performance monitoring'],
    example: 'Deploy ML models with automated retraining, version management, and performance optimization.'
  },
  {
    category: 'Cloud',
    icon: Cloud,
    title: 'Multi-Cloud Management',
    description: 'Unified deployment and monitoring across heterogeneous cloud environments with cost optimization.',
    benefits: ['Cost optimization', 'Vendor independence', 'Auto-failover'],
    example: 'Orchestrate applications across AWS, Azure, and GCP with intelligent workload distribution.'
  },
  {
    category: 'Security',
    icon: Shield,
    title: 'Compliance Automation',
    description: 'Ensure security standards and regulatory compliance through automated checks and reporting.',
    benefits: ['Continuous compliance', 'Automated audits', 'Risk assessment'],
    example: 'Maintain SOC2 compliance with automated security scans, audit trails, and remediation workflows.'
  }
]

export function UseCasesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="use-cases" ref={ref} className="py-24 relative overflow-hidden">
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
            <Rocket className="h-5 w-5 text-hack" />
            <span className="text-hack font-mono">Use Cases</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Real-World </span>
            <span className="text-gradient">Applications</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how MethodOS transforms workflows across industries with 
            intelligent automation and AI-driven optimization.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-gray-700 rounded-lg p-6 hover:border-hack/50 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-hack bg-hack/10 px-2 py-1 rounded">
                  {useCase.category}
                </span>
                <useCase.icon className="h-6 w-6 text-hack" />
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-hack transition-colors">
                {useCase.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {useCase.description}
              </p>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-hack rounded-full" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example */}
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <h4 className="text-xs font-semibold text-hack mb-1">Example:</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {useCase.example}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-hack/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 