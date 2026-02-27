import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = "6208989110355";
    const text = `Halo, saya ${form.name} (${form.email}).%0A%0A${form.message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    toast({
      title: "Pesan Dikirim!",
      description: "Anda akan diarahkan ke WhatsApp.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontak" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
            Kontak
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hubungi Saya
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <Input
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card"
            />
            <Textarea
              placeholder="Tulis pesan Anda..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card resize-none"
            />
            <Button type="submit" className="w-full" size="lg">
              <Send size={16} />
              Kirim Pesan
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, peluang kolaborasi, atau sekadar ingin berdiskusi tentang teknologi.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:lutfidarmawan477@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                lutfidarmawan477@gmail.com
              </a>
              <a
                href="https://wa.me/6208989110355"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                08989110355
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
