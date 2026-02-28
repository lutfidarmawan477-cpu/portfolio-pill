import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "id" | "en";

const translations = {
  // Navbar
  nav_home: { id: "Beranda", en: "Home" },
  nav_about: { id: "Tentang", en: "About" },
  nav_skills: { id: "Keahlian", en: "Skills" },
  nav_projects: { id: "Proyek", en: "Projects" },
  nav_certs: { id: "Sertifikat", en: "Certificates" },
  nav_contact: { id: "Kontak", en: "Contact" },

  // Certificates
  certs_label: { id: "Sertifikat", en: "Certificates" },
  certs_title: { id: "Sertifikat Saya", en: "My Certificates" },

  // Hero
  hero_greeting: { id: "Hello, It's Me", en: "Hello, It's Me" },
  hero_iam: { id: "And I'm a ", en: "And I'm a " },
  hero_desc: {
    id: "Mahasiswa yang sedang terus belajar pembuatan dan pembangunan Website yang Interaktif dan Responsif.",
    en: "A student who is continuously learning to create and build Interactive and Responsive Websites.",
  },
  hero_projects: { id: "Lihat Proyek", en: "View Projects" },
  hero_contact: { id: "Hubungi Saya", en: "Contact Me" },

  // About
  about_label: { id: "Tentang Saya", en: "About Me" },
  about_title: { id: "Hello!", en: "Hello!" },
  about_p1: {
    id: "Saya Lutfi Darmawan, mahasiswa STMIK JAKARTA Jurusan Sistem Informasi yang memiliki minat pada Pembuatan Website serta Pengembangan Website dan desain antarmuka pengguna. Saya yakin dengan adanya minat Saya pada ini, dapat berkembang dengan pesat dan baik.",
    en: "I'm Lutfi Darmawan, a student at STMIK JAKARTA majoring in Information Systems with a passion for Web Development and user interface design. I believe with my interest in this field, I can grow rapidly and well.",
  },
  about_p2: {
    id: "Tujuan karir saya adalah menjadi Full-Stack Developer profesional yang mampu membuat Website yang interaktif dan responsif bagi pengguna.",
    en: "My career goal is to become a professional Full-Stack Developer capable of creating interactive and responsive websites for users.",
  },
  about_projects: { id: "Proyek", en: "Projects" },
  about_years: { id: "Tahun Coding", en: "Years Coding" },
  about_certs: { id: "Sertifikasi", en: "Certifications" },
  about_download: { id: "Download CV", en: "Download CV" },

  // Skills
  skills_label: { id: "Keahlian", en: "Skills" },
  skills_title: { id: "Skill's yang Saya Kuasai", en: "Skills I Master" },

  // Projects
  projects_label: { id: "Proyek", en: "Projects" },
  projects_title: { id: "Proyek Terbaru Saya", en: "My Latest Projects" },
  projects_valentine_desc: {
    id: "Website khusus untuk hari Valentine yang membuat pasangan kita semakin berbunga-bunga.",
    en: "A special Valentine's Day website that makes your partner feel even more in love.",
  },
  projects_celsius_desc: {
    id: "Website yang membantu kita dalam mengkonversikan suhu dalam Celsius ke Fahrenheit, Reamur dan Kelvin.",
    en: "A website that helps us convert temperature from Celsius to Fahrenheit, Reamur, and Kelvin.",
  },
  projects_portfolio_desc: {
    id: "Website portofolio responsif dengan animasi halus dan desain modern untuk menampilkan karya profesional.",
    en: "A responsive portfolio website with smooth animations and modern design to showcase professional work.",
  },

  // Contact
  contact_label: { id: "Kontak", en: "Contact" },
  contact_title: { id: "Hubungi Saya", en: "Contact Me" },
  contact_desc: {
    id: "Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, peluang kolaborasi, atau sekadar ingin berdiskusi tentang teknologi.",
    en: "Don't hesitate to contact me if you have questions, collaboration opportunities, or just want to discuss technology.",
  },
  contact_name: { id: "Nama Lengkap", en: "Full Name" },
  contact_email: { id: "Email", en: "Email" },
  contact_message: { id: "Tulis pesan Anda...", en: "Write your message..." },
  contact_send: { id: "Kirim Pesan", en: "Send Message" },
  contact_toast_title: { id: "Pesan Dikirim!", en: "Message Sent!" },
  contact_toast_desc: {
    id: "Anda akan diarahkan ke WhatsApp.",
    en: "You will be redirected to WhatsApp.",
  },

  // Footer
  footer_rights: { id: "All rights reserved.", en: "All rights reserved." },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("id");

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
