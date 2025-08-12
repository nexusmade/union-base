import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Clubroom and our mission to empower student clubs." />
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Clubroom</h1>
        <p className="mt-4 text-muted-foreground">We help student clubs organize and grow. More info coming soon.</p>
      </section>
    </>
  );
}
