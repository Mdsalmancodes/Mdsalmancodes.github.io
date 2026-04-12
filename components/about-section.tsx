"use client"

import { motion } from "framer-motion"
import { GraduationCap, Heart, Rocket, Target } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.E. Computer Science student at Venkat International Public School, Bengaluru",
  },
  {
    icon: Target,
    title: "Goal",
    description: "To become a skilled software engineer and contribute to innovative tech solutions",
  },
  {
    icon: Rocket,
    title: "Journey",
    description: "Continuously learning and building projects to enhance practical skills",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Eager to embrace new technologies and solve real-world problems through code",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-24 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                <span className="text-foreground">About</span>{" "}
                <span className="text-primary">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Hello!</span> I&apos;m MD Salman A, 
                an aspiring Computer Science Engineering student based in Bengaluru, Karnataka. 
                I&apos;m passionate about technology and dedicated to building a strong foundation 
                in software development.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, which led me 
                to dive deep into programming. I&apos;m proficient in{" "}
                <span className="text-primary font-medium">C programming</span> and actively 
                expanding my skills in{" "}
                <span className="text-primary font-medium">Python</span>,{" "}
                <span className="text-primary font-medium">Java</span>, and{" "}
                <span className="text-primary font-medium">Web Technologies</span>.
              </p>
              <p>
                Beyond coding, I take pride in my strong{" "}
                <span className="text-primary font-medium">communication</span> and{" "}
                <span className="text-primary font-medium">leadership</span> abilities, 
                which help me collaborate effectively in team environments. I believe in 
                continuous learning and am always eager to embrace new challenges.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative pl-6 border-l-4 border-primary/50 italic text-muted-foreground"
            >
              <span className="text-lg">
                &quot;Let&apos;s connect and grow together!&quot;
              </span>
            </motion.blockquote>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
