import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const skillCategories = [
  {
    name: "Frontend",
    color: "hsl(187 100% 50%)",
    techs: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    name: "Backend",
    color: "hsl(268 100% 58%)",
    techs: ["Java", "Spring Boot", "Node.js", "Express.js", "Hibernate", "JDBC"],
  },
  {
    name: "Databases",
    color: "hsl(160 100% 45%)",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    name: "Cloud & Tools",
    color: "hsl(40 100% 55%)",
    techs: ["AWS", "Git", "Postman", "VS Code", "Eclipse IDE", "pgAdmin",],
  },
];

const SkillOrb = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Central orb */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: expanded ? 1.1 : 1,
        }}
        transition={{ y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" } }}
        className="relative w-28 h-28 rounded-full cursor-pointer flex items-center justify-center z-10"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${category.color}33, ${category.color}11)`,
          border: `1px solid ${category.color}44`,
          boxShadow: expanded ? `0 0 30px ${category.color}44` : `0 0 15px ${category.color}22`,
        }}
      >
        <span className="font-heading text-xs text-center leading-tight" style={{ color: category.color }}>
          {category.name}
        </span>
      </motion.div>

      {/* Orbiting techs */}
      <AnimatePresence>
        {expanded &&
          category.techs.map((tech, i) => {
            const angle = (i / category.techs.length) * 360;
            const radius = 85;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="absolute px-2.5 py-1 rounded-full text-[10px] font-body whitespace-nowrap z-20"
                style={{
                  background: `${category.color}15`,
                  border: `1px solid ${category.color}33`,
                  color: category.color,
                }}
              >
                {tech}
              </motion.div>
            );
          })}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Holographic Skills" subtitle="Hover the orbs to explore">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 py-8">
      {skillCategories.map((cat, i) => (
        <div key={cat.name} className="flex justify-center">
          <SkillOrb category={cat} index={i} />
        </div>
      ))}
    </div>

    {/* Typing robot */}
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        {/* Bot body */}
        <rect x="25" y="5" width="30" height="22" rx="6" fill="hsl(240 30% 15%)" stroke="hsl(187 100% 50% / 0.3)" strokeWidth="1" />
        <circle cx="35" cy="16" r="3" fill="hsl(187 100% 50%)" />
        <circle cx="45" cy="16" r="3" fill="hsl(187 100% 50%)" />
        {/* Keyboard */}
        <rect x="10" y="35" width="60" height="10" rx="3" fill="hsl(240 30% 12%)" stroke="hsl(268 100% 58% / 0.3)" strokeWidth="1" />
        {/* Typing fingers */}
        <motion.rect
          x="25" y="28" width="4" height="8" rx="2"
          fill="hsl(240 30% 18%)"
          animate={{ y: [28, 32, 28] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <motion.rect
          x="45" y="28" width="4" height="8" rx="2"
          fill="hsl(240 30% 18%)"
          animate={{ y: [28, 32, 28] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.7, delay: 0.2 }}
        />
        {/* Holographic display particles */}
        {[20, 35, 50, 65].map((x, i) => (
          <motion.circle
            key={i}
            cx={x} cy={50}
            r="1.5"
            fill="hsl(187 100% 50%)"
            animate={{ y: [50, 45, 50], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </motion.div>
  </SectionWrapper>
);

export default SkillsSection;
