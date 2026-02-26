import { Github, Mail, Instagram } from "lucide-react";
import { Music2 } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/lutfidarmawan477", label: "GitHub" },
  { icon: Music2, href: "https://tiktok.com/@pilllll_23", label: "TikTok" },
  { icon: Instagram, href: "https://instagram.com/pill_23", label: "Instagram" },
  { icon: Mail, href: "mailto:lutfidarmawan477@gmail.com", label: "Email" },
];

const Footer = () => {
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
          © {new Date().getFullYear()} Lutfi Darmawan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
