'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Star,
  Rocket,
  Brain,
  Network,
  Shield
} from 'lucide-react'

const roadmapItems = [
  {
    quarter: 'Q3 2024',
    status: 'completed',
    title: 'Core AI & Workflow Engine',
    description: 'Foundation release with basic AI code synthesis and workflow orchestration.',
    features: [
      'AI Code Synthesis Module',
      'Basic Workflow Orchestration',
      'Plugin Architecture Framework',
      'REST API Foundation'
    ],
    icon: Brain,
    color: 'from-hack to-emerald-400'
  },
  {
    quarter: 'Q4 2024',
    status: 'in-progress',
    title: 'Multi-Cloud & Marketplace',
    description: 'Kubernetes native deployment and plugin marketplace launch.',
    features: [
      'Kubernetes Native Support',
      'Plugin Marketplace',
      'Multi-Cloud Deployment',
      'Advanced Monitoring Suite'
    ],
    icon: Network,
    color: 'from-blue-400 to-hack'
  },
  {
    quarter: 'Q1 2025',
    status: 'planned',
    title: 'AI Enhancement & Collaboration',
    description: 'Advanced AI features and team collaboration tools.',
    features: [
      'Reinforcement Learning Optimization',
      'Team Collaboration Features',
      'Advanced Security Tools',
      'Performance Analytics'
    ],
    icon: Shield,
    color: 'from-purple-400 to-hack'
  },
  {
    quarter: 'Q2 2025',
    status: 'planned',
    title: 'Enterprise & Scale',
    description: 'Enterprise features and massive scale optimization.',
    features: [
      'Enterprise SSO Integration',
      'Advanced Compliance Tools',
      'Multi-Tenant Architecture',
      'Global Edge Deployment'
    ],
    icon: Rocket,
    color: 'from-orange-400 to-hack'
  }
]

export function RoadmapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-hack" />
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-400" />
      default:
        return <Star className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-hack bg-hack/10'
      case 'in-progress':
        return 'border-yellow-400 bg-yellow-400/10'
      default:
        return 'border-gray-400 bg-gray-400/10'
    }
  }

  return (
    <section id="roadmap" ref={ref} className="py-24 relative overflow-hidden">
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
            <Calendar className="h-5 w-5 text-hack" />
            <span className="text-hack font-mono">Development Roadmap</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Future </span>
            <span className="text-gradient">Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to continuous innovation and community-driven development 
            guides the evolution of MethodOS.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-hack via-gray-600 to-gray-800" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full border-2 ${getStatusColor(item.status)} flex items-center justify-center backdrop-blur-sm`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-gray-700 rounded-lg p-6 hover:border-hack/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-hack font-mono font-semibold">
                          {item.quarter}
                        </span>
                        {getStatusIcon(item.status)}
                      </div>
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        item.status === 'completed' ? 'bg-hack/20 text-hack' :
                        item.status === 'in-progress' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-gray-400/20 text-gray-400'
                      }`}>
                        {item.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
                      <ul className="space-y-1">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <div className="w-1 h-1 bg-hack rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Progress Bar for Current Quarter */}
                    {item.status === 'in-progress' && (
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: '75%' } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            className="bg-gradient-to-r from-hack to-emerald-400 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-card border border-gray-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Community-Driven Development</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            MethodOS is an open, community-driven project. Join us in shaping the future 
            of AI-powered workflow automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-hack/20 border border-hack/30 text-hack px-6 py-3 rounded-lg font-mono hover:bg-hack/30 transition-colors"
            >
              <Star className="h-4 w-4" />
              <span>Star on GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gray-800 border border-gray-600 text-white px-6 py-3 rounded-lg font-mono hover:bg-gray-700 transition-colors"
            >
              <Network className="h-4 w-4" />
              <span>Join Community</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 