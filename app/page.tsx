"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Particle Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
