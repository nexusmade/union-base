import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Clubroom and our mission to empower student clubs." />
      <div className="bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 tracking-tight">
              About Clubroom
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We're on a mission to transform how student clubs organize, connect, and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
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
            </div>
            <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl p-8 border border-black/[0.08] dark:border-white/[0.08]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Founded for Students
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Built by students who understand the unique challenges of running campus organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Purpose-Built
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Every feature is designed specifically for the needs of student clubs and organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Growing Together
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    We're committed to evolving with the needs of modern student organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Join thousands of student clubs already using Clubroom to stay organized, 
              connected, and focused on what matters most.
            </p>
            <a 
              href="/signup" 
              className="inline-flex items-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              Start Your Club for Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
