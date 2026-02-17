import { motion } from "framer-motion";

type RobotProps = {
  type?: "idle" | "scan" | "deliver";
  className?: string;
};

const Robot = ({ type = "idle", className }: RobotProps) => {
  return (
    <motion.svg
      viewBox="0 0 120 140"
      className={className}
      animate={type === "idle" ? { y: [0, -6, 0] } : {}}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* BODY */}
      <rect x="30" y="60" width="60" height="60" rx="16" fill="#141427" stroke="#00f0ff55" strokeWidth="2" />

      {/* HEAD */}
      <rect x="35" y="20" width="50" height="40" rx="12" fill="#141427" stroke="#8a2eff88" strokeWidth="2" />

      {/* EYES */}
      <motion.circle
        cx="50"
        cy="40"
        r="6"
        fill="#00f0ff"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="70"
        cy="40"
        r="6"
        fill="#8a2eff"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* ANTENNA */}
      <line x1="60" y1="20" x2="60" y2="8" stroke="#00f0ff" strokeWidth="2" />
      <motion.circle
        cx="60"
        cy="6"
        r="3"
        fill="#00f0ff"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* ARMS */}
      <rect x="15" y="75" width="18" height="8" rx="4" fill="#141427" stroke="#00f0ff55" />
      <rect x="87" y="75" width="18" height="8" rx="4" fill="#141427" stroke="#8a2eff55" />

      {/* WHEELS FOR DELIVERY MODE */}
      {type === "deliver" && (
        <>
          <circle cx="48" cy="125" r="6" fill="#1f1f38" stroke="#00f0ff55" />
          <circle cx="72" cy="125" r="6" fill="#1f1f38" stroke="#8a2eff55" />

          {/* ENVELOPE */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <rect x="92" y="70" width="22" height="14" rx="3" fill="#8a2eff33" stroke="#8a2eff88" />
            <path d="M92 70 L103 78 L114 70" stroke="#8a2effaa" strokeWidth="1.2" fill="none" />
          </motion.g>
        </>
      )}

      {/* SCANNING MODE */}
      {type === "scan" && (
        <motion.line
          x1="85"
          y1="40"
          x2="120"
          y2="40"
          stroke="#00f0ff"
          strokeWidth="2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </motion.svg>
  );
};

export default Robot;
