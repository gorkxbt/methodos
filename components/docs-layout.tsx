'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Code, 
  Terminal, 
  Play, 
  Copy, 
  Check,
  ChevronRight,
  ArrowLeft,
  Search,
  Download,
  Github,
  Zap
} from 'lucide-react'
import Link from 'next/link'

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    pages: [
      { id: 'installation', title: 'Installation', icon: Download },
      { id: 'quick-start', title: 'Quick Start', icon: Play },
      { id: 'first-workflow', title: 'Your First Workflow', icon: Terminal }
    ]
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    icon: Code,
    pages: [
      { id: 'ai-code-gen', title: 'AI Code Generation', icon: Code },
      { id: 'deployment', title: 'Deployment Pipeline', icon: Terminal },
      { id: 'monitoring', title: 'Monitoring Setup', icon: BookOpen }
    ]
  },
  {
    id: 'examples',
    title: 'Code Examples',
    icon: Terminal,
    pages: [
      { id: 'basic-workflow', title: 'Basic Workflow', icon: Code },
      { id: 'ai-integration', title: 'AI Integration', icon: Code },
      { id: 'advanced-features', title: 'Advanced Features', icon: Code }
    ]
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    icon: Github,
    pages: [
      { id: 'current-version', title: 'Current Version', icon: Zap },
      { id: 'upcoming-features', title: 'Upcoming Features', icon: Code },
      { id: 'future-vision', title: 'Future Vision', icon: BookOpen }
    ]
  }
]

const codeExamples = {
  installation: `# Install MethodOS CLI
curl -fsSL https://install.methodos.dev/cli | sh

# Or using npm
npm install -g @methodos/cli

# Verify installation
methodos --version`,

  'quick-start': `# Initialize new MethodOS project
methodos init my-ai-project
cd my-ai-project

# Generate your first AI-powered workflow
methodos generate workflow "deploy-ml-model" \\
  --trigger git-push \\
  --ai-enabled \\
  --stages "validate,test,deploy"

# Start the workflow engine
methodos start`,

  'first-workflow': `# my-ai-project/workflows/deploy-ml-model.yaml
name: "AI-Powered ML Model Deployment"
version: "1.0"

triggers:
  - type: git-push
    branch: main
  - type: schedule
    cron: "0 2 * * *"

ai:
  enabled: true
  model: "gpt-4"
  context: "ml-deployment"

stages:
  validate:
    ai_tasks:
      - name: "code-review"
        prompt: "Review ML model code for best practices"
      - name: "security-scan"
        prompt: "Scan for security vulnerabilities"
    
  test:
    ai_tasks:
      - name: "generate-tests"
        prompt: "Generate comprehensive unit tests"
      - name: "performance-analysis"
        prompt: "Analyze model performance metrics"
    
  deploy:
    ai_tasks:
      - name: "deployment-strategy"
        prompt: "Choose optimal deployment strategy"
      - name: "monitoring-setup"
        prompt: "Configure monitoring and alerts"

notifications:
  slack: "#ml-deployments"
  email: ["team@company.com"]`,

  'ai-code-gen': `// Using MethodOS AI Code Generation API
import { MethodOS } from '@methodos/sdk'

const os = new MethodOS({
  apiKey: process.env.METHODOS_API_KEY
})

// Generate code with AI assistance
async function generateOptimizedFunction() {
  const result = await os.ai.generateCode({
    prompt: "Create an optimized database query function",
    language: "typescript",
    context: {
      framework: "node.js",
      database: "postgresql",
      performance: "high"
    }
  })
  
  return result.code
}

// AI-powered code refactoring
async function refactorLegacyCode(sourceCode: string) {
  const refactored = await os.ai.refactor({
    code: sourceCode,
    improvements: [
      "performance",
      "readability", 
      "security",
      "modern-patterns"
    ]
  })
  
  return refactored
}`,

  deployment: `# methodOS deployment configuration
# deploy.methodos.yaml
apiVersion: methodos.dev/v1
kind: Deployment
metadata:
  name: ai-web-app
  
spec:
  replicas: 3
  strategy:
    type: BlueGreen
    ai_optimization: enabled
    
  containers:
    - name: web-app
      image: myapp:latest
      ai_scaling:
        enabled: true
        min_replicas: 2
        max_replicas: 10
        cpu_threshold: 70
        
  ai_features:
    auto_rollback: true
    performance_monitoring: true
    cost_optimization: true
    
  health_checks:
    ai_anomaly_detection: enabled
    custom_metrics: true`,

  monitoring: `// MethodOS Monitoring Configuration
import { MethodOS } from '@methodos/sdk'

const monitoring = new MethodOS.Monitoring({
  alerts: {
    slack: '#ops-alerts',
    email: ['team@company.com']
  }
})

// AI-powered anomaly detection
monitoring.enableAIAnomalyDetection({
  metrics: ['cpu', 'memory', 'latency', 'error_rate'],
  sensitivity: 'medium',
  autoRemediation: true
})

// Custom metrics tracking
monitoring.track('user_workflow_completion', {
  dimensions: ['environment', 'workflow_type'],
  unit: 'count'
})

// Intelligent alerting
monitoring.addAlert({
  name: 'High Error Rate',
  condition: 'error_rate > 5%',
  aiAnalysis: true,
  autoInvestigate: true
})`,

  'basic-workflow': `// Basic MethodOS Workflow Example
const workflow = {
  name: "CI/CD Pipeline",
  version: "1.0",
  
  triggers: [
    { type: "git-push", branch: "main" },
    { type: "schedule", cron: "0 2 * * *" }
  ],
  
  stages: {
    build: {
      image: "node:18",
      commands: [
        "npm install",
        "npm run build",
        "npm test"
      ]
    },
    
    deploy: {
      image: "deployer:latest",
      commands: [
        "kubectl apply -f k8s/",
        "kubectl rollout status deployment/app"
      ],
      conditions: ["build.success"]
    }
  },
  
  notifications: {
    success: ["slack:#deployments"],
    failure: ["email:team@company.com"]
  }
}`,

  'ai-integration': `// Advanced AI Integration Example
import { MethodOS } from '@methodos/sdk'

const workflow = new MethodOS.Workflow({
  name: "Smart Code Review & Deploy",
  aiEnabled: true
})

// AI Code Review Stage
workflow.addStage('ai-review', {
  ai: {
    model: 'gpt-4',
    prompt: \`
      Review this code for:
      - Security vulnerabilities
      - Performance issues
      - Best practices compliance
      - Documentation quality
    \`,
    autoFix: true,
    confidence: 0.8
  }
})

// AI Test Generation
workflow.addStage('ai-testing', {
  ai: {
    generateTests: true,
    coverage: 90,
    testTypes: ['unit', 'integration', 'e2e']
  }
})

// Smart Deployment Strategy
workflow.addStage('smart-deploy', {
  ai: {
    chooseStrategy: true,
    options: ['blue-green', 'canary', 'rolling'],
    factors: ['traffic', 'risk', 'resources']
  }
})`,

  'advanced-features': `// Advanced MethodOS Features
import { MethodOS } from '@methodos/sdk'

// Multi-cloud orchestration
const orchestrator = new MethodOS.Orchestrator({
  providers: ['aws', 'gcp', 'azure'],
  costOptimization: true,
  autoFailover: true
})

// Intelligent resource allocation
orchestrator.enableSmartScaling({
  predictive: true,
  metrics: ['cpu', 'memory', 'network'],
  algorithms: ['linear', 'exponential', 'ai-driven']
})

// Advanced workflow chaining
const complexWorkflow = MethodOS.chain([
  'data-ingestion',
  'ai-processing',
  'validation',
  'deployment'
])
.withErrorHandling('retry-with-backoff')
.withMonitoring('comprehensive')
.withSecurity('enterprise-grade')

// Real-time collaboration
const collaboration = new MethodOS.Collaboration({
  realTimeEditing: true,
  conflictResolution: 'ai-assisted',
  permissions: 'role-based'
})`,

  'current-version': `# MethodOS v2.1.0 - Current Release

## 🚀 New Features
- **AI-Powered Code Generation**: GPT-4 integration for intelligent code synthesis
- **Smart Workflow Orchestration**: Automated dependency resolution and optimization
- **Multi-Cloud Deployment**: Seamless deployment across AWS, GCP, and Azure
- **Real-time Monitoring**: AI-driven anomaly detection and auto-remediation

## 🔧 Improvements
- 40% faster workflow execution
- Reduced memory footprint by 25%
- Enhanced security with zero-trust architecture
- Improved CLI experience with auto-completion

## 🐛 Bug Fixes
- Fixed race conditions in parallel workflow execution
- Resolved memory leaks in long-running processes
- Corrected timezone handling in scheduled workflows
- Fixed edge cases in AI model integration

## 📊 Performance Metrics
- **Deployment Speed**: 10x faster than traditional CI/CD
- **Error Reduction**: 90% fewer deployment failures
- **Resource Efficiency**: 60% better resource utilization
- **Developer Productivity**: 75% faster development cycles`,

  'upcoming-features': `# MethodOS Roadmap - Upcoming Features

## Q1 2024
### 🤖 Advanced AI Integration
- **GPT-5 Support**: Next-generation AI model integration
- **Custom AI Models**: Train domain-specific models for your workflows
- **Natural Language Workflows**: Create workflows using plain English
- **AI Pair Programming**: Real-time AI coding assistance

### 🔄 Enhanced Orchestration
- **Visual Workflow Builder**: Drag-and-drop workflow creation
- **Workflow Templates**: Pre-built templates for common patterns
- **Dynamic Scaling**: AI-driven auto-scaling based on predictions
- **Cross-Platform Integration**: Native support for 50+ tools

## Q2 2024
### 🌐 Edge Computing
- **Edge AI**: Run AI models at the edge for low-latency processing
- **IoT Integration**: Native support for IoT device management
- **Distributed Workflows**: Execute workflows across edge locations
- **Offline Capabilities**: Work without internet connectivity

### 🔐 Enterprise Security
- **Zero Trust Architecture**: Complete zero-trust security model
- **Compliance Automation**: Automated SOC2, HIPAA, PCI compliance
- **Secret Management**: Advanced secret rotation and management
- **Audit Trail**: Complete audit trail for all operations`,

  'future-vision': `# MethodOS Future Vision - 2025 and Beyond

## 🎯 Our Mission
"To create an operating system that doesn't just automate workflows, but truly understands and anticipates developer needs, making software development as intuitive as having a conversation."

## 🚀 Long-term Goals

### Quantum Computing Integration (2025)
- **Quantum Workflows**: Native support for quantum computing tasks
- **Hybrid Processing**: Seamless integration of classical and quantum computing
- **Quantum AI**: Leverage quantum computing for AI model training
- **Research Partnerships**: Collaborate with leading quantum research institutions

### Autonomous Development (2026)
- **Self-Healing Code**: AI that automatically fixes bugs and optimizations
- **Predictive Development**: AI predicts and implements features before requested
- **Autonomous Testing**: Complete test automation with AI-generated test cases
- **Code Evolution**: AI continuously improves and refactors codebases

### Universal Integration (2027)
- **Any-to-Any Connectivity**: Connect any tool, service, or platform
- **Universal Protocols**: Create new standards for workflow interoperability
- **Ecosystem Orchestration**: Manage entire technology ecosystems
- **Global Workflow Network**: Worldwide network of interconnected workflows

## 🔬 Research Initiatives
- **Quantum computing integration research**
- **Advanced AI model training for code generation**
- **Edge AI deployment capabilities**
- **Sustainable computing optimizations**

## 💭 Vision Statement
"Our vision is to create an operating system that doesn't just automate workflows, but truly understands and anticipates developer needs, making software development as intuitive as having a conversation." - MethodOS Team`
}

const pageDescriptions = {
  installation: "Get MethodOS up and running in minutes",
  'quick-start': "Your first MethodOS workflow in 5 minutes",
  'first-workflow': "Create your first AI-powered automation",
  'ai-code-gen': "Leverage AI for intelligent code generation",
  deployment: "Deploy with AI-optimized strategies",
  monitoring: "Set up intelligent monitoring and alerts",
  'basic-workflow': "Understanding MethodOS workflow structure",
  'ai-integration': "Integrate AI capabilities into your workflows",
  'advanced-features': "Explore advanced MethodOS features",
  'current-version': "Current features and recent updates",
  'upcoming-features': "Planned features and release timeline",
  'future-vision': "Long-term vision and research initiatives"
}

export function DocsLayout() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [activePage, setActivePage] = useState('installation')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Debounced section click handler to prevent rapid clicking issues
  const handleSectionClick = useCallback((sectionId: string) => {
    if (isTransitioning) return // Prevent clicks during transitions
    
    if (activeSection === sectionId) {
      return // Keep the section open
    }
    
    setIsTransitioning(true)
    setActiveSection(sectionId)
    
    // Set the first page of the new section as active
    const newSection = docSections.find(s => s.id === sectionId)
    if (newSection && newSection.pages.length > 0) {
      setActivePage(newSection.pages[0].id)
    }
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300)
  }, [activeSection, isTransitioning])

  // Debounced page click handler
  const handlePageClick = useCallback((pageId: string) => {
    if (isTransitioning || activePage === pageId) return
    
    setIsTransitioning(true)
    setActivePage(pageId)
    
    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 200)
  }, [activePage, isTransitioning])

  const currentExample = codeExamples[activePage as keyof typeof codeExamples] || codeExamples.installation
  const currentDescription = pageDescriptions[activePage as keyof typeof pageDescriptions] || pageDescriptions.installation

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(activePage)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Generate floating particles only on client side
  const generateFloatingParticles = () => {
    if (!isClient) return []
    
    return Array.from({ length: 15 }, (_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute text-hack/10 font-mono text-xs pointer-events-none"
        initial={{ 
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        }}
        animate={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        {['await', 'async', 'const', 'function', 'import', 'export', 'class', 'interface'][Math.floor(Math.random() * 8)]}
      </motion.div>
    ))
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Optimized Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 grid-bg opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        {/* Floating Code Particles - Client Side Only */}
        {generateFloatingParticles()}

        {/* Optimized Pulsing Orbs */}
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 border-b border-gray-800 bg-background/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <ArrowLeft className="h-5 w-5 text-hack group-hover:-translate-x-1 transition-transform" />
                <span className="text-hack font-mono">Back to Home</span>
              </Link>
              <div className="text-gray-600">/</div>
              <h1 className="text-2xl font-bold">
                <span className="text-white">Method</span>
                <span className="text-hack">OS</span>
                <span className="text-gray-400 ml-2">Documentation</span>
              </h1>
            </div>
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-hack focus:outline-none"
                />
              </div>

              {/* Navigation - Fixed Accordion Behavior */}
              <nav className="space-y-2">
                {docSections.map((section) => (
                  <div key={`section-${section.id}`}>
                    <motion.button
                      onClick={() => handleSectionClick(section.id)}
                      disabled={isTransitioning}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-hack/20 border border-hack/30 text-hack'
                          : 'text-gray-300 hover:bg-gray-800'
                      } ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
                      whileHover={!isTransitioning ? { scale: 1.02 } : {}}
                      whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                    >
                      <section.icon className="h-5 w-5" />
                      <span className="font-medium">{section.title}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`} />
                    </motion.button>
                    
                    <AnimatePresence mode="wait">
                      {activeSection === section.id && (
                        <motion.div
                          key={`section-content-${section.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-8 mt-2 space-y-1 overflow-hidden"
                        >
                          {section.pages.map((page) => (
                            <motion.button
                              key={`page-${page.id}`}
                              onClick={() => handlePageClick(page.id)}
                              disabled={isTransitioning}
                              className={`w-full flex items-center space-x-2 p-2 rounded text-left text-sm transition-colors ${
                                activePage === page.id
                                  ? 'text-hack bg-hack/10'
                                  : 'text-gray-400 hover:text-white'
                              } ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
                              whileHover={!isTransitioning ? { x: 4 } : {}}
                            >
                              <page.icon className="h-4 w-4" />
                              <span>{page.title}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              {/* Page Header - Fixed key to prevent duplication */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`header-${activePage}`} // Unique key prevents duplication
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-4 capitalize">
                    {activePage.replace(/[-_]/g, ' ')}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {currentDescription}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Code Example - Fixed key to prevent duplication */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`code-${activePage}`} // Unique key prevents duplication
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Example Code</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(currentExample)}
                      className="flex items-center space-x-2"
                    >
                      {copiedCode === activePage ? (
                        <Check className="h-4 w-4 text-hack" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span>{copiedCode === activePage ? 'Copied!' : 'Copy'}</span>
                    </Button>
                  </div>

                  <div className="code-block relative">
                    <pre className="text-hack font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {currentExample}
                    </pre>
                    
                    {/* Animated Scan Line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-hack to-transparent"
                      animate={{
                        y: [0, 400, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Tutorial Steps - Fixed key to prevent duplication */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tutorial-${activePage}`} // Unique key prevents duplication
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-8 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Step-by-Step Guide</h3>
                  {activePage === 'installation' && (
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
                        <div>
                          <p className="text-white font-medium">Install the CLI</p>
                          <p className="text-gray-400 text-sm">Download and install the MethodOS command-line interface</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
                        <div>
                          <p className="text-white font-medium">Verify Installation</p>
                          <p className="text-gray-400 text-sm">Check that MethodOS is properly installed and configured</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">3</div>
                        <div>
                          <p className="text-white font-medium">Set Up Authentication</p>
                          <p className="text-gray-400 text-sm">Configure API keys and authentication credentials</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activePage === 'quick-start' && (
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
                        <div>
                          <p className="text-white font-medium">Initialize Project</p>
                          <p className="text-gray-400 text-sm">Create a new MethodOS project with AI capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
                        <div>
                          <p className="text-white font-medium">Generate Workflow</p>
                          <p className="text-gray-400 text-sm">Use AI to generate your first automated workflow</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">3</div>
                        <div>
                          <p className="text-white font-medium">Start Engine</p>
                          <p className="text-gray-400 text-sm">Launch the MethodOS workflow engine</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activePage === 'first-workflow' && (
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
                        <div>
                          <p className="text-white font-medium">Create Workflow File</p>
                          <p className="text-gray-400 text-sm">Set up your first YAML workflow configuration</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
                        <div>
                          <p className="text-white font-medium">Configure AI Tasks</p>
                          <p className="text-gray-400 text-sm">Define AI-powered stages for validation, testing, and deployment</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hack rounded-full flex items-center justify-center text-black text-sm font-bold">3</div>
                        <div>
                          <p className="text-white font-medium">Deploy & Monitor</p>
                          <p className="text-gray-400 text-sm">Execute your workflow and monitor results</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Add default message for other pages */}
                  {!['installation', 'quick-start', 'first-workflow'].includes(activePage) && (
                    <div className="text-gray-400">
                      <p>Detailed step-by-step instructions for this topic are coming soon. Check the code example above to get started!</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 