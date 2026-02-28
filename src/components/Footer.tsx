import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Phone, href: "https://wa.me/628989110355", label: "WhatsApp" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lutfi-darmawan-886ba33b3?utm_source=share&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/pilll_23", label: "Instagram" },
  { icon: Mail, href: "mailto:lutfidarmawan477@gmail.com", label: "Email" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Lutfi Darmawan. {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
