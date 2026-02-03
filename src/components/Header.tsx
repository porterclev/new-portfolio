import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when pathname OR hash changes (handle same-page anchor clicks)
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-display font-semibold tracking-tight transition-opacity duration-200 hover:opacity-80"
          >
            Porter Clevidence
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          <button
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-200 ease-spring" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200 ease-spring" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-soft animate-fade-in">
          <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4">
            <NavLinks mobile />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | "">(
    location.hash ? location.hash.replace("#", "") : ""
  );

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
  ];

  // Update active when location.hash changes (e.g., via navigation)
  useEffect(() => {
    setActiveSection(location.hash ? location.hash.replace("#", "") : "");
  }, [location.hash]);

  // IntersectionObserver to set the active section while scrolling
  useEffect(() => {
    const sectionIds = links
      .map((l) => (l.path.includes("#") ? l.path.split("#")[1] : null))
      .filter(Boolean) as string[];

    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with largest intersectionRatio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        } else {
          // If scrolled to top (no section intersecting), show Home
          if (window.scrollY < 80) setActiveSection("");
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {links.map((link) => {
        const [path, hash] = link.path.split("#");
        const hashName = hash || "";
        const isHome = link.path === "/";
        const isActive = isHome
          ? activeSection === ""
          : activeSection === hashName;

        const toProp = hash ? { pathname: path, hash: `#${hashName}` } : link.path;

        const handleClick = (e: React.MouseEvent) => {
          if (isHome) {
            // If already on home route, smooth scroll to top and clear hash
            if (location.pathname === "/") {
              e.preventDefault();
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }
            return;
          }

          if (hash && location.pathname === path) {
            // same-route anchor click: navigate to update location.hash and smooth scroll
            e.preventDefault();
            navigate(`${path}#${hashName}`);
            const el = document.getElementById(hashName);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(hashName);
          }
        };

        return (
          <Link
            key={link.name}
            to={toProp}
            onClick={handleClick}
            className={cn(
              "relative font-medium text-sm transition-all duration-200",
              mobile ? "py-2 px-4 block w-full hover:bg-secondary rounded-md" : "hover:opacity-80",
              isActive && "font-semibold"
            )}
          >
            {link.name}
            {isActive && !mobile && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Header;
