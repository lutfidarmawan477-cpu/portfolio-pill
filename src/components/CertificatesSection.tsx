import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certificates = [
  {
    title: "Web Development Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "JavaScript Programming",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    title: "Database Management",
    issuer: "Oracle Academy",
    year: "2023",
  },
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
  },
];

const CertificatesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sertifikat" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
            {t("certs_label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("certs_title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 card-elevated border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Award className="text-accent" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
