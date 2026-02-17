import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import ProfileHolderRobot from "../robots/ProfileHolderRobot";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="Identity Terminal" subtitle="System Profile Loaded">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left — Profile with cute robot */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            
            {/* holographic blueprint bg */}
            <motion.div
              className="absolute -inset-8 rounded-2xl border border-primary/10"
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile frame */}
            <div className="w-64 h-72 rounded-2xl glass-panel neon-glow overflow-hidden flex items-center justify-center hover-lift glow-card">
              <img
                src="/profile.jpeg"
                alt="Ashutosh Mohapatra"
                className="w-full h-full object-cover"
              />
            </div>

            <ProfileHolderRobot />

          </div>
        </motion.div>

        {/* Right — Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass-panel rounded-xl p-5 relative scanline hover-lift glow-card">
            <h3 className="font-heading text-lg text-primary mb-3">About Me</h3>

            <p className="text-card-foreground font-body leading-relaxed text-sm">
              Hey! I’m <strong>Ashutosh Mohapatra</strong> — a <strong>Full Stack Software Developer</strong> who enjoys turning ideas into reliable, scalable applications. Currently, I work at <strong>Cyberjeet Pvt Ltd</strong>, where I design and build web applications, APIs, and system features that solve real business problems.
            </p>

            <p className="text-card-foreground font-body leading-relaxed text-sm mt-3">
              I completed my <strong>Master of Computer Applications</strong> in 2024 from Centurion University of Technology and Management, Bhubaneswar, and since then I’ve been continuously exploring better ways to write clean, efficient code and architect maintainable systems.
            </p>

            <p className="text-card-foreground font-body leading-relaxed text-sm mt-3">
              Outside of development, I enjoy experimenting with new technologies and improving my problem-solving skills — always curious about how things work under the hood.
            </p>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
