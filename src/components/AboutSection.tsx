import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent/30 card-elevated">
                <img
                  src={profilePhoto}
                  alt="Foto Profil Lutfi Darmawan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>

          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
              {t("about_label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("about_title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("about_p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about_p2")}
            </p>
            <div className="flex gap-8 mb-8">
              {[
                { value: "10+", label: t("about_projects") },
                { value: "1+", label: t("about_years") },
                { value: "5+", label: t("about_certs") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="default" size="lg">
              <a href="/cv-lutfi-darmawan.jpeg" download="CV-Lutfi-Darmawan.jpeg">
                <Download size={18} />
                {t("about_download")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
