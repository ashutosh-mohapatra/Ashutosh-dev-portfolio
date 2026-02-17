import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const badges = [
  {
    src: "/certifications/aws-sa.png",
    title: "AWS Solutions Architect Associate",
    link: "https://www.credly.com/badges/b5288f39-c0e0-4f63-8b29-7f043fbaa54b/public_url",
  },
  {
    src: "/certifications/aws-security.png",
    title: "AWS Cloud Security Foundations",
    link: "https://www.credly.com/badges/26fd25bc-71c0-471d-a4a9-848a8db0e6cf/public_url",
  },
  {
    src: "/certifications/aws-foundation.png",
    title: "AWS Cloud Foundations",
    link: "https://www.credly.com/badges/49cadf47-aa9b-47a5-8fa7-ebc5fe531247/public_url",
  },
  {
    src: "/certifications/aws-developer.png",
    title: "AWS Cloud Developing",
    link: "https://www.credly.com/badges/8544ccee-b604-45a7-be43-e1a085879e1b/public_url",
  },
];

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" title="Badge Vault" subtitle="Verified Credentials">
      <div className="relative flex flex-col items-center">

        {/* Rotating holographic rings */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* BADGES ROW */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

          {badges.map((badge, i) => (
            <motion.a
              key={i}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open credential for ${badge.title}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.96 }}
              className="relative group cursor-pointer"
            >
              {/* holographic glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* scanning beam */}
              <motion.div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                />
              </motion.div>

              {/* Badge */}
              <div className="relative glass-panel p-6 rounded-xl neon-glow">
                <img
                  src={badge.src}
                  alt={badge.title}
                  className="w-48 h-auto object-contain mx-auto pointer-events-none"
                />

                <p className="text-xs text-center text-muted-foreground mt-4 font-body">
                  {badge.title}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* SCANNING ROBOT */}
        <motion.div
          className="absolute -bottom-10"
          animate={{ x: [-300, 300, -300] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <svg width="70" height="50" viewBox="0 0 70 50">
            <rect x="10" y="20" width="40" height="20" rx="6" fill="#141427" stroke="#00f0ff66"/>
            <circle cx="22" cy="30" r="5" fill="#00f0ff"/>
            <circle cx="38" cy="30" r="5" fill="#8a2eff"/>

            <motion.line
              x1="50" y1="30" x2="70" y2="30"
              stroke="#00f0ff"
              strokeWidth="2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
