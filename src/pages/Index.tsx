import SEO from "@/components/SEO";
import { Hero } from "@/components/ui/animated-hero";

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
        description="Run your student club in one place. Centralize members, announcements, events, and resources with Clubroom."
        structuredData={orgLd}
      />
      <Hero />
    </>
  );
};

export default Index;
