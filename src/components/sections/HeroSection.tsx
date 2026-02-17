import { motion } from "framer-motion";
import { FolderGit2, Mail, FileText } from "lucide-react";

// Cute floating assistant robot SVG
const HeroRobot = () => (
  <motion.div
    className="relative"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna */}
      <motion.circle
        cx="60"
        cy="8"
        r="5"
        fill="hsl(187 100% 50%)"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <line
        x1="60"
        y1="13"
        x2="60"
        y2="30"
        stroke="hsl(187 100% 50% / 0.5)"
        strokeWidth="2"
      />

      {/* Head */}
      <rect
        x="30"
        y="28"
        width="60"
        height="40"
        rx="12"
        fill="hsl(240 30% 15%)"
        stroke="hsl(187 100% 50% / 0.4)"
        strokeWidth="1.5"
      />

      {/* Eyes */}
      <motion.circle
        cx="45"
        cy="48"
        r="6"
        fill="hsl(187 100% 50%)"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.circle
        cx="75"
        cy="48"
        r="6"
        fill="hsl(187 100% 50%)"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />

      {/* Mouth */}
      <path
        d="M48 58 Q60 65 72 58"
        stroke="hsl(268 100% 58%)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect
        x="35"
        y="72"
        width="50"
        height="35"
        rx="8"
        fill="hsl(240 30% 15%)"
        stroke="hsl(268 100% 58% / 0.3)"
        strokeWidth="1.5"
      />

      {/* Chest light */}
      <motion.circle
        cx="60"
        cy="88"
        r="4"
        fill="hsl(268 100% 58%)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Arms */}
      <motion.g
        animate={{ rotate: [0, 15, 0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "35px", originY: "80px" }}
      >
        <rect
          x="15"
          y="76"
          width="18"
          height="8"
          rx="4"
          fill="hsl(240 30% 18%)"
          stroke="hsl(187 100% 50% / 0.3)"
          strokeWidth="1"
        />
      </motion.g>
      <rect
        x="87"
        y="76"
        width="18"
        height="8"
        rx="4"
        fill="hsl(240 30% 18%)"
        stroke="hsl(187 100% 50% / 0.3)"
        strokeWidth="1"
      />

      {/* Legs */}
      <rect
        x="42"
        y="109"
        width="10"
        height="16"
        rx="4"
        fill="hsl(240 30% 18%)"
        stroke="hsl(268 100% 58% / 0.2)"
        strokeWidth="1"
      />
      <rect
        x="68"
        y="109"
        width="10"
        height="16"
        rx="4"
        fill="hsl(240 30% 18%)"
        stroke="hsl(268 100% 58% / 0.2)"
        strokeWidth="1"
      />

      {/* Laser beam */}
      <motion.line
        x1="75"
        y1="48"
        x2="140"
        y2="48"
        stroke="hsl(187 100% 50%)"
        strokeWidth="1"
        opacity="0.6"
        animate={{ x2: [130, 160, 130], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />
    </svg>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-heading text-accent mb-4 tracking-widest uppercase"
          >
            Welcome to my Lab
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            <span className="text-primary neon-text">Building Intelligent</span>
            <br />
            <span className="text-card-foreground">Software for the</span>
            <br />
            <span className="text-accent neon-text-purple">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-muted-foreground mb-8 font-body"
          >
            Full Stack Developer | MERN Stack | Java & Spring Boot | AWS Cloud
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-heading text-sm font-semibold bg-primary text-primary-foreground glow-button flex items-center gap-2"
            >
              <FolderGit2 size={16} />
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-heading text-sm font-semibold border border-primary/30 text-primary hover:bg-primary/10 glow-button flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-heading text-sm font-semibold border border-accent/40 text-accent hover:bg-accent/10 glow-button flex items-center gap-2"
            >
              <FileText size={16} />
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-shrink-0 z-10"
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl" />
            <HeroRobot />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
