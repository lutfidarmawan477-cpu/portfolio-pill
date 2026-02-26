import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["PHP", "Node.js", "MySQL", "REST API"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
    color: "from-accent/15 to-primary/10",
  },
];

const SkillsSection = () => {
  return (
    <section id="keahlian" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
            Keahlian
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Teknologi yang Saya Kuasai
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 card-elevated border border-border"
            >
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6`}
              >
                <cat.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
