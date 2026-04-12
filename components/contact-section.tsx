"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-salman-a-15856a2ba",
    handle: "@md-salman-a",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mdsalman",
    handle: "@mdsalman",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mdsalmancodeson@gmail.com",
    handle: "mdsalmancodeson@gmail.com",
  },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("mdsalmancodeson@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-foreground">Get In</span>{" "}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl" />
          
          <div className="relative p-8 md:p-12 rounded-3xl bg-card/80 backdrop-blur-xl border border-border">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Bengaluru, Karnataka, India</span>
            </div>

            {/* Email CTA */}
            <div className="text-center mb-12">
              <p className="text-muted-foreground mb-4">Drop me a line at</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="mailto:mdsalmancodeson@gmail.com"
                  className="group text-2xl md:text-3xl font-bold font-heading text-foreground hover:text-primary transition-colors"
                >
                  mdsalmancodeson@gmail.com
                </a>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyEmail}
                  className="rounded-full border-border hover:border-primary hover:bg-primary/10"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center mt-12"
            >
              <a
                href="mailto:mdsalmancodeson@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
