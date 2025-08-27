import { Users, Calendar, MessageSquare, Shield, Palette, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedBackground from './animated-background'

export function EnhancedFeatures() {
    const features = [
        {
            id: 'member-management',
            icon: Users,
            title: 'Member Management',
            description: 'Easily add, remove, and organize club members with role-based permissions and invite codes.',
        },
        {
            id: 'event-planning',
            icon: Calendar,
            title: 'Event Planning',
            description: 'Create events, manage RSVPs, send reminders, and track attendance all in one place.',
        },
        {
            id: 'announcements',
            icon: MessageSquare,
            title: 'Announcements',
            description: 'Share important updates, pin critical messages, and ensure everyone stays informed.',
        },
        {
            id: 'privacy-controls',
            icon: Shield,
            title: 'Privacy Controls',
            description: 'Choose between public or private clubs with secure member verification and access controls.',
        },
        {
            id: 'club-branding',
            icon: Palette,
            title: 'Club Branding',
            description: 'Customize your club page with logos, colors, and descriptions that represent your organization.',
        },
        {
            id: 'student-focused',
            icon: GraduationCap,
            title: 'Student-Focused',
            description: 'Built specifically for high school and college clubs with features that matter to students.',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

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
    }

    return (
        <section className="py-12 md:py-20">
            <motion.div 
                className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
                    variants={headerVariants}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">Everything you need to run your student club</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Clubroom provides all the tools and features that modern student organizations need to stay organized, connected, and productive in one centralized platform.</p>
                </motion.div>

                <motion.div 
                    className="relative mx-auto max-w-2xl lg:max-w-4xl"
                    variants={containerVariants}
                >
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <AnimatedBackground
                                    className="rounded-lg bg-muted/50 border h-full"
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                    enableHover
                                >
                                    <div data-id={`feature-${index}`} className="p-8 h-full">
                                        <div className="space-y-3">
                                            <motion.div 
                                                className="flex items-center gap-2"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <feature.icon className="size-5 text-primary" />
                                                <h3 className="text-base font-medium">{feature.title}</h3>
                                            </motion.div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </AnimatedBackground>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
} 