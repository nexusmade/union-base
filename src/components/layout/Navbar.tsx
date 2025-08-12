import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"} transition-colors`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-base">Clubroom</span>
        </Link>

        <div className="hidden md:flex items-center gap-1" aria-label="Primary">
          <NavLink to="/features" className={navLinkClass} end>
            Features
          </NavLink>
          <NavLink to="/pricing" className={navLinkClass} end>
            Pricing
          </NavLink>
          <NavLink to="/about" className={navLinkClass} end>
            About
          </NavLink>
          <NavLink to="/blog" className={navLinkClass} end>
            Blog
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <NavLink to="/login" className="hidden sm:inline-block">
            <Button variant="outline" size="sm" aria-label="Log in">
              Log in
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button size="sm" aria-label="Join free">
              Join free
            </Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
