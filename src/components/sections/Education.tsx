import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Centurion University of Technology & Management",
    location: "Bhubaneswar, Odisha",
    period: "2022 – 2024",
    grade: "8.82 CGPA",
    description:
      "Focused on full-stack development, cloud computing, and software engineering principles. Built multiple real-world web applications and academic projects.",
  },
  {
    degree: "Bachelor of Science in Chemistry (Hons.)",
    school: "Baji Rout Memorial Degree College",
    location: "Bhuban, Dhenkanal",
    period: "2019 – 2022",
    grade: "7.96 CGPA",
    description:
      "Studied core chemistry subjects including organic, inorganic, and physical chemistry along with laboratory research and analytical techniques.",
  },
];

const EducationSection = () => (
  <SectionWrapper
    id="education"
    title="Education Pipeline"
    subtitle="Academic Records Loaded"
  >
    <div className="relative max-w-2xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

      {education.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="relative pl-16 pb-12 last:pb-0"
        >
          {/* Timeline Node */}
          <motion.div
            className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center"
            whileInView={{ scale: [0.5, 1.3, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Pulse wave */}
          <motion.div
            className="absolute left-2.5 top-0 w-8 h-8 rounded-full border border-primary/20"
            initial={{ scale: 0, opacity: 0.5 }}
            whileInView={{ scale: 2, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 + 0.3 }}
          />

          {/* Education Card */}
          <div className="glass-panel rounded-xl p-6 hologram-lift">
            {/* Period */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-primary">
                {edu.period}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                {edu.grade}
              </span>
            </div>

            {/* Degree + Icon */}
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-sm text-foreground">
                {edu.degree}
              </h3>
            </div>

            {/* School */}
            <p className="text-sm text-primary font-medium mb-1">
              {edu.school}
            </p>

            {/* Location */}
            <p className="text-xs text-muted-foreground mb-3">
              {edu.location}
            </p>

            {/* Description */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              {edu.description}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Traveling robot */}
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-3"
        initial={{ top: 0 }}
        whileInView={{ top: ["0%", "100%"] }}
        viewport={{ once: true }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="12"
          rx="4"
          fill="hsl(240 30% 15%)"
          stroke="hsl(187 100% 50% / 0.4)"
          strokeWidth="1"
        />
        <circle cx="9" cy="10" r="2" fill="hsl(187 100% 50%)" />
        <circle cx="15" cy="10" r="2" fill="hsl(187 100% 50%)" />
        <circle
          cx="8"
          cy="20"
          r="2.5"
          fill="hsl(240 30% 18%)"
          stroke="hsl(268 100% 58% / 0.3)"
          strokeWidth="0.5"
        />
        <circle
          cx="16"
          cy="20"
          r="2.5"
          fill="hsl(240 30% 18%)"
          stroke="hsl(268 100% 58% / 0.3)"
          strokeWidth="0.5"
        />
      </motion.svg>
    </div>
  </SectionWrapper>
);

export default EducationSection;
