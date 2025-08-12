import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:p-2 focus:bg-card focus:text-foreground">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Clubroom
        </div>
      </footer>
    </div>
  );
}
