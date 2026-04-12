"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Terminal, Cpu, Layers } from "lucide-react"

const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "C Programming", "Java"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "React"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    category: "Data Analysis",
    icon: Database,
    items: ["Pandas", "NumPy", "Data Manipulation", "CSV/Excel Processing"],
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    items: ["Git", "VS Code", "Kaggle", "Jupyter"],
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    category: "Computer Science",
    icon: Cpu,
    items: ["Data Structures", "Algorithms", "Problem Solving"],
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
  },
  {
    category: "Soft Skills",
    icon: Layers,
    items: ["Communication", "Leadership", "Team Collaboration", "Adaptability"],
    color: "from-sky-500/20 to-indigo-500/20",
    borderColor: "border-sky-500/30",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function SkillsSection() {
  return (
    <section className="relative py-24 px-4" id="skills">
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
            <span className="text-foreground">Technical</span>{" "}
            <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuously learning and expanding my skillset to stay at the forefront of technology
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={item}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} backdrop-blur-sm border ${skill.borderColor} hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-card/50 border border-border group-hover:border-primary/30 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-foreground">
                  {skill.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((skillItem) => (
                  <span
                    key={skillItem}
                    className="px-3 py-1.5 text-sm rounded-full bg-card/60 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
