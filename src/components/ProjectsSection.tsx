import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Valentine Website",
    description:
      "Website khusus untuk hari Valentine yang membuat pasangan kita semakin berbunga-bunga.",
    tech: ["HTML", "CSS"],
    demo: "https://lutfidarmawan477-cpu.github.io/valentine/",
  },
  {
    title: "Konversi Suhu Celsius Website",
    description:
      "Website yang membantu kita dalam mengkonversikan suhu dalam Celsius ke Fahrenheit, Reamur dan Kelvin.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://lutfidarmawan477-cpu.github.io/celsius/",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portofolio responsif dengan animasi halus dan desain modern untuk menampilkan karya profesional.",
    tech: ["React", "Framer Motion", "Tailwind"],
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyek" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
            Proyek
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proyek Terbaru Saya
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-xl border border-border card-elevated overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-accent to-accent/40" />
              <div className="p-7">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="default" variant="default" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
