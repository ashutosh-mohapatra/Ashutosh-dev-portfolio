import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

const professionalProjects = [
  {
    title: "Asset Management Tool",
    desc: "Multi-tenant SaaS application for tracking IT assets across organizations. Features asset lifecycle management, audit logs, JWT auth, automated email notifications, and PDF/Excel exports.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
    live: "http://amt.cyberjeet.com:8089/",
    code: "#",
  },
  {
    title: "Barbershop Web Application",
    desc: "Full-stack app for a local barbershop with real-time appointment booking, secure authentication, Razorpay payment integration, and automated email notifications.",
    tech: ["React.js", "Node.js", "Firebase", "GCP", "REST APIs", "Razorpay"],
    live: "https://mybarber.co.in/login",
    code: "#",
  },
  {
    title: "Company Portal – Cyberjeet",
    desc: "Official company website with responsive UI, optimized performance, secure backend, and cross-browser compatibility. Deployed and managed on GoDaddy.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Cloudflare CDN"],
    live: "https://cyberjeet.com/",
    code: "#",
  },
];

const personalProjects = [
  {
    title: "Quiz Application",
    desc: "RESTful Quiz App enabling users to create quizzes, fetch randomized questions by category, and submit answers for evaluation. Built with Spring Boot layered architecture.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Maven", "REST APIs"],
    live: "#",
    code: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof professionalProjects)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="glass-panel rounded-xl overflow-hidden group relative"
  >
    {/* Scanline on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <motion.div
        className="absolute left-0 right-0 h-px bg-primary/40"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>

    {/* Neon border on hover */}
    <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300 group-hover:neon-glow pointer-events-none" />

    <div className="p-6 relative z-10">
      <h3 className="font-heading text-lg text-primary mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-body px-2 py-0.5 rounded-full border border-accent/20 text-accent bg-accent/5"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.live}
          className="flex items-center gap-1.5 text-xs font-heading text-primary hover:text-primary/80 transition-colors glow-button px-3 py-1.5 rounded-md border border-primary/20"
        >
          <ExternalLink size={12} /> Live
        </a>
        {/* <a
          href={project.code}
          className="flex items-center gap-1.5 text-xs font-heading text-accent hover:text-accent/80 transition-colors px-3 py-1.5 rounded-md border border-accent/20"
        >
          <Github size={12} /> Code
        </a> */}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [tab, setTab] = useState<"professional" | "personal">("professional");
  const projects =
    tab === "professional" ? professionalProjects : personalProjects;

  return (
    <SectionWrapper
      id="projects"
      title="Research Lab"
      subtitle="Project Archives"
    >
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="glass-panel rounded-lg p-1 flex gap-1">
          {(["professional", "personal"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-md text-xs font-heading transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t === "professional" ? "Professional" : "Personal"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        className={`grid gap-6 ${
          tab === "personal" && projects.length === 1
            ? "max-w-md mx-auto"
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Rover robot */}
      <motion.div
        className="mt-10 flex justify-center"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
          <rect
            x="5"
            y="5"
            width="40"
            height="15"
            rx="5"
            fill="hsl(240 30% 15%)"
            stroke="hsl(187 100% 50% / 0.3)"
            strokeWidth="1"
          />
          <circle cx="12" cy="12" r="3" fill="hsl(187 100% 50%)" />
          <circle cx="38" cy="12" r="3" fill="hsl(187 100% 50%)" />
          <circle
            cx="10"
            cy="24"
            r="4"
            fill="hsl(240 30% 18%)"
            stroke="hsl(268 100% 58% / 0.3)"
            strokeWidth="1"
          />
          <circle
            cx="25"
            cy="24"
            r="4"
            fill="hsl(240 30% 18%)"
            stroke="hsl(268 100% 58% / 0.3)"
            strokeWidth="1"
          />
          <circle
            cx="40"
            cy="24"
            r="4"
            fill="hsl(240 30% 18%)"
            stroke="hsl(268 100% 58% / 0.3)"
            strokeWidth="1"
          />
          <motion.rect
            x="20"
            y="2"
            width="10"
            height="3"
            rx="1"
            fill="hsl(268 100% 58% / 0.5)"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
