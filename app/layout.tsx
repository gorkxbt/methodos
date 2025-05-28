import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MethodOS - Next-Generation AI-Driven Workflow Automation',
  description: 'A purpose-built operating system designed to revolutionize software engineering workflows by integrating state-of-the-art AI-driven code generation, intelligent orchestration, and seamless deployment management.',
  keywords: ['AI', 'workflow automation', 'code generation', 'DevOps', 'operating system', 'software engineering'],
  authors: [{ name: 'MethodOS Team' }],
  creator: 'MethodOS',
  publisher: 'MethodOS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://methodos.dev'),
  openGraph: {
    title: 'MethodOS - Next-Generation AI-Driven Workflow Automation',
    description: 'Revolutionizing software engineering workflows with AI-powered automation.',
    url: 'https://methodos.dev',
    siteName: 'MethodOS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MethodOS - Next-Generation AI-Driven Workflow Automation',
    description: 'Revolutionizing software engineering workflows with AI-powered automation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 