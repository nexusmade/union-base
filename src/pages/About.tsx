import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <SEO title="About" description="Learn about Clubroom and our mission to empower student clubs." />
      <div className="bg-white dark:bg-black">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={headerVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">
              About Clubroom
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We're on a mission to transform how student clubs organize, connect, and grow together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Student clubs are the heart of campus life, but managing them shouldn't be a hassle. 
                We believe that organizing members, events, and announcements should be simple, 
                intuitive, and powerful.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Clubroom centralizes everything your club needs in one place—no more scattered 
                group chats, lost documents, or missed announcements. From high school debate teams 
                to college engineering societies, we're here to help every student organization thrive.
              </p>
            </motion.div>
            <motion.div 
              className="bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl p-8 border border-black/[0.08] dark:border-white/[0.08]"
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Founded for Students
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Built by students who understand the unique challenges of running campus organizations.
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Purpose-Built
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Every feature is designed specifically for the needs of student clubs and organizations.
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Growing Together
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    We're committed to evolving with the needs of modern student organizations.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Join thousands of student clubs already using Clubroom to stay organized, 
              connected, and focused on what matters most.
            </p>
            <motion.a 
              href="/signup" 
              className="inline-flex items-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Club for Free
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
