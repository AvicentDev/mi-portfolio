import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para aplicar estilos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aplicar tema al body
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen transition-colors bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-black/90 backdrop-blur-sm border-b border-black/10 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 py-4 mx-auto md:px-6 md:py-6 max-w-screen-2xl">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-semibold transition-colors md:text-xl hover:text-cyan-400"
            >
              Álvaro Vicent López
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className="items-center hidden gap-6 lg:flex xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </button>
              ))}

              {/* RESUME BUTTON */}
              <a
                href="/CV_FullStack_AlvaroVicent.docx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm transition border rounded-lg border-border bg-card hover:bg-cyan-400 hover:text-black"
              >
                Resume
              </a>

              {/* THEME TOGGLE */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 transition border rounded-lg border-border hover:bg-cyan-400 hover:text-black"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* MOBILE MENU BUTTONS */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* THEME TOGGLE MOBILE */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 transition border rounded-lg border-border hover:bg-cyan-400 hover:text-black"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <MoonIcon className="w-4 h-4" />
                )}
              </button>

              {/* HAMBURGER MENU */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center p-2 transition border rounded-lg border-border hover:bg-accent"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-sm z-40">
            <div className="flex flex-col h-full px-6 py-8 space-y-6 overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="py-3 text-lg font-medium text-left transition-colors border-b border-border hover:text-cyan-400"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="/CV_FullStack_AlvaroVicent.docx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 font-medium text-center transition border rounded-lg border-border bg-card hover:bg-cyan-400 hover:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>
    </div>
  );
}
