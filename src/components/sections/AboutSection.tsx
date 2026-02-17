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
            
            {/* Holographic blueprint bg */}
            <motion.div
              className="absolute -inset-8 rounded-2xl border border-primary/10"
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile frame (PUT YOUR IMAGE HERE) */}
            <div className="w-64 h-72 rounded-2xl glass-panel neon-glow overflow-hidden flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Ashutosh Mohapatra"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cute Robot holding the frame */}
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
          <div className="glass-panel rounded-xl p-5 relative scanline">
            <h3 className="font-heading text-lg text-primary mb-3">About Me</h3>

            <p className="text-card-foreground font-body leading-relaxed text-sm">
              Hey! I’m Ashutosh Mohapatra — a Full Stack Software Developer who enjoys turning ideas into reliable, scalable applications. Currently, I work at Cyberjeet Pvt Ltd, where I design and build web applications, APIs, and system features that solve real business problems.
            </p>

            <p className="text-card-foreground font-body leading-relaxed text-sm mt-3">
              I completed my Master of Computer Applications in 2024 from Centurion University of Technology and Management, Bhubaneswar, and since then I’ve been continuously exploring better ways to write clean, efficient code and architect maintainable systems.
            </p>

            <p className="text-card-foreground font-body leading-relaxed text-sm mt-3">
              Outside of development, I enjoy experimenting with new technologies and improving my problem-solving skills — always curious about how things work under the hood.
            </p>
          </div>

          {/* <div className="glass-panel rounded-xl p-6">
            <h3 className="font-heading text-sm text-accent mb-3">Core Technologies</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "React.js",
                "Node.js",
                "Express.js",
                "My SQL",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "REST APIs",
                "Firebase",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-body px-3 py-1 rounded-full border border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}

          {/* <div className="flex items-center gap-4">
            <div className="glass-panel rounded-lg px-4 py-2 text-center">
              <p className="font-heading text-lg text-primary">MCA</p>
              <p className="text-xs text-muted-foreground">8.82 CGPA</p>
            </div>

            <div className="glass-panel rounded-lg px-4 py-2 text-center">
              <p className="font-heading text-lg text-accent">AWS</p>
              <p className="text-xs text-muted-foreground">Certified</p>
            </div>
          </div> */}
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
