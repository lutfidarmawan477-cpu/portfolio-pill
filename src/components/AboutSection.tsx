import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
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
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent/30 card-elevated">
                <img
                  src={profilePhoto}
                  alt="Foto Profil Ahmad Fauzan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
              Tentang Saya
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mengenal Lebih Dekat
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Saya Ahmad Fauzan, mahasiswa Teknologi Informasi semester 6 yang memiliki passion kuat dalam pengembangan web dan desain antarmuka pengguna. Saya percaya bahwa teknologi dapat menjadi jembatan untuk menciptakan solusi yang berdampak positif.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tujuan karier saya adalah menjadi seorang Full-Stack Developer profesional yang mampu membangun aplikasi web modern dan scalable. Saya terus belajar dan mengembangkan keterampilan melalui proyek-proyek nyata.
            </p>
            <div className="flex gap-8">
              {[
                { value: "10+", label: "Proyek" },
                { value: "2+", label: "Tahun Coding" },
                { value: "5+", label: "Sertifikasi" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
