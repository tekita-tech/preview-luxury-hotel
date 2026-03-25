import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar Component - Cyberpunk Minimalist Design
 * 
 * Features:
 * - Animated scroll response: blurs and shrinks on scroll down
 * - Logo display with company name
 * - Navigation menu (placeholder for future sections)
 * - Neon cyan accent with smooth transitions
 */

interface NavbarProps {
  logoUrl: string;
  companyName: string;
}

export default function Navbar({ logoUrl, companyName }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsScrolled(currentScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate navbar properties based on scroll
  const navbarVariants = {
    initial: {
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderBottomColor: 'rgba(0, 217, 255, 0)',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
    scrolled: {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderBottomColor: 'rgba(0, 217, 255, 0.2)',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  };

  const logoVariants = {
    initial: { scale: 1, opacity: 1 },
    scrolled: { scale: 0.85, opacity: 0.9 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-300"
      animate={isScrolled ? 'scrolled' : 'initial'}
      variants={navbarVariants}
      initial="initial"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <motion.div
            className="flex items-center gap-3"
            animate={isScrolled ? 'scrolled' : 'initial'}
            variants={logoVariants}
          >
            <img
              src={logoUrl}
              alt={companyName}
              className="h-10 w-auto transition-all duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-white font-mono tracking-wider">
                {companyName}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Teknologi Kita
              </span>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <motion.a
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ letterSpacing: '0.05em' }}
            >
              Services
            </motion.a>
            <motion.a
              href="#portfolio"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ letterSpacing: '0.05em' }}
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ letterSpacing: '0.05em' }}
            >
              About
            </motion.a>
            <motion.button
              className="px-6 py-2 text-sm font-mono font-bold text-black bg-cyan-400 rounded hover:bg-cyan-300 transition-colors duration-200 glow-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
