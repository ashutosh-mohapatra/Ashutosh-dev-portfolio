import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { useToast } from "@/hooks/use-toast";
import Robot from "../robots/Robot";

const ContactSection = () => {
  const { toast } = useToast();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:ashutoshmohapatra215@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AFrom: ${formData.email}`;

    window.open(mailtoLink);

    setSubmitted(true);

    toast({
      title: "Message Transmitted!",
      description: "Courier robot is delivering your message 🚀",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Communication Terminal"
      subtitle="Send a transmission"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex justify-center lg:justify-start">
            <Robot type="deliver" className="w-24 h-28" />
          </div>

          <p className="text-muted-foreground font-body">
            Let’s build intelligent systems together.  
            Open communication channel and send a transmission.
          </p>

          <div className="space-y-4 text-sm font-body">
            <a href="mailto:ashutoshmohapatra215@gmail.com" className="flex items-center gap-3 hover:text-primary transition">
              <Mail size={18} className="text-primary" />
              ashutoshmohapatra215@gmail.com
            </a>

            <a href="tel:+919938623628" className="flex items-center gap-3 hover:text-primary transition">
              <Phone size={18} className="text-primary" />
              +91 9938623628
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              Bengaluru, Karnataka
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/mohapatra-ashutosh/" target="_blank" className="glass-panel p-3 rounded-lg hover:text-primary transition">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ashutosh-mohapatra" target="_blank" className="glass-panel p-3 rounded-lg hover:text-primary transition">
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT TERMINAL FORM */}
        <div className="relative">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-xl p-8 space-y-5 relative"
          >
            <div>
              <label className="text-xs font-heading text-primary mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-xs font-heading text-primary mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs font-heading text-primary mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm resize-none focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-lg font-heading text-sm font-semibold bg-primary text-primary-foreground glow-button flex items-center justify-center gap-2"
            >
              <Send size={14} />
              Transmit Message
            </motion.button>
          </motion.form>

          {/* Courier robot animation */}
          <motion.div
            className="flex justify-center mt-6"
            animate={submitted ? { x: [0, 120, 120], opacity: [1, 1, 0] } : {}}
            transition={{ duration: 1.5 }}
          >
            <Robot type="deliver" className="w-16 h-20" />
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
