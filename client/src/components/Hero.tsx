import { motion } from 'framer-motion';

/**
 * Hero Section Component - Cyberpunk Minimalist Design
 * 
 * Features:
 * - Full-screen looping video background
 * - Animated text overlay with staggered entrance
 * - Asymmetric layout with off-center positioning
 * - Neon accents and glitch-inspired effects
 * - Call-to-action button with hover effects
 */

interface HeroProps {
  videoUrl: string;
  tagline?: string;
  headline?: string;
  description?: string;
}

export default function Hero({
  videoUrl,
  tagline = 'Welcome to the Future',
  headline = 'Teknologi Kita',
  description = 'Innovative software solutions for tomorrow',
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline with Glitch Effect */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            variants={glitchVariants}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
            <span className="text-sm md:text-base font-mono text-cyan-400 tracking-widest uppercase">
              {tagline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-cyan-400 text-black font-mono font-bold text-lg rounded hover:bg-cyan-300 transition-all duration-300 glow-cyan"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-mono font-bold text-lg rounded hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">SCROLL</span>
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
