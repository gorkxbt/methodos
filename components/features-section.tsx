'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  Workflow, 
  Network, 
  Zap, 
  Shield, 
  Monitor,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Code Synthesis',
    description: 'Context-aware code generation with state-of-the-art LLMs, supporting multiple languages and iterative refinement.',
    highlights: ['GPT-4 Integration', 'Multi-Language', 'Context-Aware'],
    color: 'from-hack to-emerald-400'
  },
  {
    icon: Workflow,
    title: 'Intelligent Orchestration',
    description: 'Event-driven workflow engine with conditional logic, parallel execution, and real-time monitoring.',
    highlights: ['Event-Driven', 'Parallel Processing', 'Real-time'],
    color: 'from-blue-400 to-hack'
  },
  {
    icon: Network,
    title: 'Extensible Framework',
    description: 'Robust plugin architecture supporting custom AI models, third-party integrations, and domain-specific tools.',
    highlights: ['Custom Plugins', 'Third-party APIs', 'Domain-Specific'],
    color: 'from-purple-400 to-hack'
  },
  {
    icon: Zap,
    title: 'Multi-Cloud Deploy',
    description: 'Seamless deployment across hybrid and multi-cloud environments with built-in observability.',
    highlights: ['Kubernetes Native', 'Multi-Cloud', 'Auto-Scaling'],
    color: 'from-orange-400 to-hack'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in compliance checks, audit trails, and secure authentication mechanisms.',
    highlights: ['RBAC', 'Audit Trails', 'Compliance'],
    color: 'from-red-400 to-hack'
  },
  {
    icon: Monitor,
    title: 'Advanced Observability',
    description: 'Integrated logging, metrics, tracing, and alerting for complete operational visibility.',
    highlights: ['Real-time Metrics', 'Distributed Tracing', 'Smart Alerts'],
    color: 'from-cyan-400 to-hack'
  }
]

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="features" ref={ref} className="py-32 relative overflow-hidden">
      {/* Minimalist Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-gray-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
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
            <Brain className="h-5 w-5 text-hack" />
            <span className="text-hack font-mono text-sm">Core Capabilities</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">AI-Powered </span>
            <span className="text-gradient">Automation</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Revolutionary features that transform how you build, deploy, and manage software.
          </p>
        </motion.div>

        {/* Compact Features Grid - Single Horizontal Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <motion.div
                className="relative p-4 bg-card/40 backdrop-blur-sm border border-gray-800 rounded-lg h-full transition-all duration-300 flex flex-col"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(0, 255, 65, 0.3)',
                  boxShadow: '0 5px 15px rgba(0, 255, 65, 0.05)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="relative mb-3"
                  animate={hoveredFeature === index ? { 
                    scale: 1.05
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 inline-block">
                    <feature.icon className="h-5 w-5 text-hack" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-hack transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-gray-400 mb-12 leading-relaxed h-8">
                  {feature.description}
                </p>

                {/* Compact Highlights - Fixed Alignment */}
                <div className="space-y-1 mt-6">
                  {feature.highlights.slice(0, 2).map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-2 text-xs text-gray-500 h-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    >
                      <div className="w-1 h-1 bg-hack rounded-full mt-1.5 flex-shrink-0" />
                      <span className="leading-tight">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle Hover Arrow */}
                <motion.div
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowRight className="h-3 w-3 text-hack" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Code Screenshots - What the OS Does */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* AI Code Generation Screenshot */}
          <div className="bg-gray-950 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-hack/30 transition-colors shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-300 font-mono">Terminal — zsh — 80×24</span>
              <div className="w-16" />
            </div>
            <div className="p-4 font-mono text-xs bg-black text-gray-300 leading-normal">
              <div className="mb-1"><span className="text-green-400">john@macbook-pro</span> <span className="text-white">auth-service</span> <span className="text-blue-400">%</span> npx create-next-app@latest . --typescript --tailwind --eslint --yes</div>
              <div className="text-white mb-1">Creating a new Next.js app in /auth-service...</div>
              <div className="text-white mb-1">Using package manager: npm</div>
              <div className="text-white mb-2">Installing dependencies...</div>
              
              <div className="mb-1"><span className="text-green-400">john@macbook-pro</span> <span className="text-white">auth-service</span> <span className="text-blue-400">%</span> npm install bcryptjs jsonwebtoken</div>
              <div className="text-gray-400 mb-1">+ bcryptjs@2.4.3</div>
              <div className="text-gray-400 mb-2">+ jsonwebtoken@9.0.2</div>
              
              <div className="mb-1"><span className="text-green-400">john@macbook-pro</span> <span className="text-white">auth-service</span> <span className="text-blue-400">%</span> npm run dev</div>
              <div className="text-gray-400 mb-1">&gt; auth-service@0.1.0 dev</div>
              <div className="text-gray-400 mb-1">&gt; next dev</div>
              <div className="text-gray-400 mb-2"></div>
              <div className="text-green-400 mb-1">   ▲ Next.js 14.0.4</div>
              <div className="text-white mb-1">   - Local:        http://localhost:3000</div>
              <div className="text-white mb-1">   - Network:      http://192.168.1.100:3000</div>
              <div className="text-gray-400 mb-2"></div>
              <div className="text-green-400 mb-1"> ✓ Ready in 2.3s</div>
              <div className="text-green-400 mb-1"> ✓ Compiled /api/auth/login in 1.2s</div>
              <div className="text-green-400">   GET /api/auth/login 200 in 45ms</div>
            </div>
          </div>

          {/* GitHub Actions Workflow */}
          <div className="bg-gray-950 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-hack/30 transition-colors shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-300 font-mono">github.com/repo/actions</span>
              <div className="w-16" />
            </div>
            <div className="p-4 font-mono text-xs bg-black text-gray-300 leading-normal">
              <div className="text-orange-400 mb-2">Deploy to Production #1247</div>
              <div className="text-gray-500 mb-1">Triggered by push to main by john-doe</div>
              <div className="text-gray-500 mb-3">Completed successfully in 3m 45s</div>
              
              <div className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="text-green-400 mr-2">✓</div>
                  <span className="text-green-400">Build and Test</span>
                  <span className="text-gray-500 ml-auto">1m 23s</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-green-400 mr-2">✓</div>
                  <span className="text-green-400">Security Scan</span>
                  <span className="text-gray-500 ml-auto">45s</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-green-400 mr-2">✓</div>
                  <span className="text-green-400">Deploy to Staging</span>
                  <span className="text-gray-500 ml-auto">28s</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-green-400 mr-2">✓</div>
                  <span className="text-green-400">Deploy to Production</span>
                  <span className="text-gray-500 ml-auto">1m 9s</span>
                </div>
              </div>
              
              <div className="bg-gray-900 p-2 rounded text-xs">
                <div className="text-gray-400">2024-12-15T14:25:33.123Z</div>
                <div className="text-green-400">✓ Docker image built successfully</div>
                <div className="text-green-400">✓ Pushed to registry</div>
                <div className="text-green-400">✓ Kubernetes deployment updated</div>
                <div className="text-green-400">✓ Health checks passed</div>
                <div className="text-green-400">✓ Traffic switched to new version</div>
                <div className="text-white">Deployment complete! 🎉</div>
              </div>
            </div>
          </div>

          {/* Docker & Kubernetes */}
          <div className="bg-gray-950 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-hack/30 transition-colors shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-300 font-mono">k8s-prod-cluster</span>
              <div className="w-16" />
            </div>
            <div className="p-4 font-mono text-xs bg-black text-gray-300 leading-normal">
              <div className="mb-1"><span className="text-green-400">admin@k8s-master</span> <span className="text-blue-400">~</span> $ kubectl get pods -n production</div>
              <div className="text-gray-400 mb-1">NAME                                   READY   STATUS    RESTARTS   AGE</div>
              <div className="text-green-400 mb-1">auth-api-7b8f9d5c4-8xh2p             1/1     Running   0          2d</div>
              <div className="text-green-400 mb-1">auth-api-7b8f9d5c4-k9m3t             1/1     Running   0          2d</div>
              <div className="text-green-400 mb-3">auth-api-7b8f9d5c4-n7q8w             1/1     Running   0          2d</div>
              
              <div className="mb-1"><span className="text-green-400">admin@k8s-master</span> <span className="text-blue-400">~</span> $ kubectl get svc -n production</div>
              <div className="text-gray-400 mb-1">NAME       TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)        AGE</div>
              <div className="text-white mb-3">auth-api   LoadBalancer   10.0.45.123    34.123.45.67    80:30080/TCP   2d</div>
              
              <div className="mb-1"><span className="text-green-400">admin@k8s-master</span> <span className="text-blue-400">~</span> $ kubectl top nodes</div>
              <div className="text-gray-400 mb-1">NAME              CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%</div>
              <div className="text-cyan-400 mb-1">node-1-us-east   234m         12%    1847Mi          23%</div>
              <div className="text-cyan-400 mb-1">node-2-us-east   198m         10%    1623Mi          20%</div>
              <div className="text-cyan-400 mb-3">node-3-us-west   156m         8%     1234Mi          15%</div>
              
              <div className="mb-1"><span className="text-green-400">admin@k8s-master</span> <span className="text-blue-400">~</span> $ kubectl logs auth-api-7b8f9d5c4-8xh2p --tail=3</div>
              <div className="text-green-400">2024-12-15T14:25:56Z INFO: Authentication successful</div>
              <div className="text-green-400">2024-12-15T14:26:18Z INFO: Health check passed</div>
              <div className="text-green-400">2024-12-15T14:26:23Z INFO: Request processed successfully</div>
            </div>
          </div>

          {/* Security Monitoring */}
          <div className="bg-gray-950 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-hack/30 transition-colors shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-300 font-mono">security-monitor.log</span>
              <div className="w-16" />
            </div>
            <div className="p-4 font-mono text-xs bg-black text-gray-300 leading-normal">
              <div className="mb-1"><span className="text-green-400">security@monitor</span> <span className="text-blue-400">~</span> $ snyk test</div>
              <div className="text-white mb-1">Testing /auth-service for known vulnerabilities...</div>
              <div className="text-green-400 mb-1">✓ Tested 247 dependencies for known issues</div>
              <div className="text-green-400 mb-3">✓ No vulnerabilities found</div>
              
              <div className="mb-1"><span className="text-green-400">security@monitor</span> <span className="text-blue-400">~</span> $ docker scan auth-service:latest</div>
              <div className="text-white mb-1">Testing auth-service:latest...</div>
              <div className="text-green-400 mb-1">✓ Base image: node:18-alpine</div>
              <div className="text-green-400 mb-3">✓ No high or critical vulnerabilities found</div>
              
              <div className="mb-1"><span className="text-green-400">security@monitor</span> <span className="text-blue-400">~</span> $ tail -f /var/log/access.log</div>
              <div className="text-gray-400 mb-1">Dec 15 14:20:12 [INFO] GET /api/health - 200 - 5ms</div>
              <div className="text-gray-400 mb-1">Dec 15 14:20:45 [INFO] POST /api/auth/login - 200 - 23ms</div>
              <div className="text-gray-400 mb-1">Dec 15 14:21:03 [INFO] GET /api/user/profile - 200 - 12ms</div>
              <div className="text-gray-400 mb-3">Dec 15 14:21:15 [INFO] PUT /api/user/settings - 200 - 18ms</div>
              
              <div className="mb-1"><span className="text-green-400">security@monitor</span> <span className="text-blue-400">~</span> $ systemctl status nginx</div>
              <div className="text-green-400 mb-1">● nginx.service - A high performance web server</div>
              <div className="text-green-400 mb-1">   Loaded: loaded (/lib/systemd/system/nginx.service)</div>
              <div className="text-green-400">   Active: active (running) since Mon 2024-12-15 09:00:00 UTC</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 