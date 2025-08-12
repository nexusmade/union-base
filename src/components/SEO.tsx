import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ title, description, canonical, structuredData }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} • Clubroom`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) setMeta("description", description);
    setOG("og:title", fullTitle);
    if (description) setOG("og:description", description);
    setOG("og:type", "website");

    // Canonical
    document.querySelectorAll('link[rel="canonical"]').forEach((n) => n.parentNode?.removeChild(n));
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonical ?? window.location.origin + location.pathname);
    document.head.appendChild(link);

    // Structured Data
    let script: HTMLScriptElement | null = null;
    if (structuredData) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, canonical, structuredData, location.pathname]);

  return null;
}
