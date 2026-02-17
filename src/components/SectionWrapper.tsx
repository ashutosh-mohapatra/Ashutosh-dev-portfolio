import { motion } from "framer-motion";

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary neon-text mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
