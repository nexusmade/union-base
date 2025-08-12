import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Everything you need to run your student club</h2>
                    <p>Clubroom provides all the tools and features that modern student organizations need to stay organized, connected, and productive in one centralized platform.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Lightning Fast</h3>
                        </div>
                        <p className="text-sm">Instant access to announcements, events, and member updates with real-time notifications.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Smart Management</h3>
                        </div>
                        <p className="text-sm">Powerful tools for managing members, roles, and permissions with ease.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Secure & Private</h3>
                        </div>
                        <p className="text-sm">Enterprise-grade security with private club settings and member verification.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">Easy Customization</h3>
                        </div>
                        <p className="text-sm">Customize your club page, branding, and workflows to match your organization.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Full Control</h3>
                        </div>
                        <p className="text-sm">Complete control over your club's content, members, and administrative settings.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Built for Students</h3>
                        </div>
                        <p className="text-sm">Designed specifically for student organizations with features that matter most.</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 