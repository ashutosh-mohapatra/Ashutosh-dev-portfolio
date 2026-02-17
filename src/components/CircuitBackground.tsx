import { motion } from "framer-motion";

const CircuitBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Grid */}
    <div className="absolute inset-0 circuit-bg" />
    
    {/* Floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Gradient overlays */}
    <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-accent/5 to-transparent" />
  </div>
);

export default CircuitBackground;
