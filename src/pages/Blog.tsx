import SEO from "@/components/SEO";

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Resources and stories for student club leaders and members." />
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-muted-foreground">Articles and updates will appear here.</p>
      </section>
    </>
  );
}
