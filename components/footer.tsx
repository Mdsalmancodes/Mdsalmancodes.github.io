"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-salman-a-15856a2ba",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/mdsalman",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:mdsalmancodeson@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-xl font-bold text-primary font-heading">MS</span>
            </div>
            <span className="text-xl font-bold text-foreground font-heading">MD Salman A</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by MD Salman A</span>
            <span className="text-border">•</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-foreground transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
