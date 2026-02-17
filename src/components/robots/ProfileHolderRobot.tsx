import { motion } from "framer-motion";

export default function ProfileHolderRobot() {
  return (
    <motion.div
      className="absolute -left-20 bottom-2 w-32 h-40"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.svg
        viewBox="0 0 120 160"
        className="w-full h-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body */}
        <rect x="30" y="70" width="60" height="60" rx="14" fill="#141427" stroke="#00f0ff66" strokeWidth="2"/>

        {/* Head */}
        <rect x="35" y="20" width="50" height="40" rx="10" fill="#141427" stroke="#8a2eff99" strokeWidth="2"/>

        {/* Eyes */}
        <motion.circle cx="50" cy="40" r="5" fill="#00f0ff"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="70" cy="40" r="5" fill="#8a2eff"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Antenna */}
        <line x1="60" y1="20" x2="60" y2="10" stroke="#00f0ff" strokeWidth="2" />
        <motion.circle cx="60" cy="8" r="3" fill="#00f0ff"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Arms holding frame */}
        <motion.rect
          x="10" y="85" width="25" height="8" rx="4" fill="#141427" stroke="#00f0ff88"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ originX: "35px", originY: "90px" }}
        />
        <motion.rect
          x="85" y="85" width="25" height="8" rx="4" fill="#141427" stroke="#8a2eff88"
          animate={{ rotate: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ originX: "85px", originY: "90px" }}
        />

        {/* Feet */}
        <rect x="42" y="130" width="12" height="8" rx="3" fill="#00f0ff55" />
        <rect x="66" y="130" width="12" height="8" rx="3" fill="#8a2eff55" />
      </motion.svg>
    </motion.div>
  );
}
