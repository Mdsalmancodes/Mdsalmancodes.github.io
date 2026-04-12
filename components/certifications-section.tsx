"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    platform: "Coursera",
    date: "2024",
    description:
      "Built a solid foundation in Python programming, strengthening core programming concepts and best practices.",
    skills: ["Python", "Programming Fundamentals", "Problem Solving"],
    link: "https://coursera.org",
    featured: true,
  },
  {
    title: "Pandas Course",
    issuer: "Kaggle",
    platform: "Kaggle Learn",
    date: "2024",
    description:
      "Gained practical knowledge in data manipulation including creating, reading, writing data, indexing, selecting, grouping, sorting, and handling missing values.",
    skills: ["Pandas", "Data Analysis", "Python", "Data Manipulation"],
    link: "https://kaggle.com",
    featured: true,
  },
]

export function CertificationsSection() {
  return (
    <section className="relative py-24 px-4" id="certifications">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-foreground">Certifications</span>{" "}
            <span className="text-primary">& Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Committed to continuous learning through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 shrink-0">
                      <Award className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold font-heading text-foreground leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{cert.issuer}</span>
                        <span className="text-border">•</span>
                        <span>{cert.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completed {cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 group/link"
                  >
                    <span className="text-sm font-medium">View Certificate</span>
                    <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
