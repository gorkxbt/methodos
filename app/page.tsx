import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import ArchitectureSection from '@/components/architecture-section'
import { UseCasesSection } from '@/components/use-cases-section'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <UseCasesSection />
        <Footer />
      </div>
    </main>
  )
} 