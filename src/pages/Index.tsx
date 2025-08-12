import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clubroom",
    url: typeof window !== "undefined" ? window.location.origin : "",
  };

  return (
    <>
      <SEO
        title="Home"
        description="All-in-one hub for student clubs: announcements, events, RSVPs, and members."
        structuredData={orgLd}
      />
      <section className="container py-16 md:py-24 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Run your student club in <span className="text-primary">one place</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Centralize members, announcements, events, and resources—no more scattered chats and docs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/signup">
              <Button size="lg" className="hover-scale">Get started for free →</Button>
            </Link>
            <Link to="/features" className="text-sm sm:text-base underline underline-offset-4 text-muted-foreground hover:text-foreground">
              See features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
