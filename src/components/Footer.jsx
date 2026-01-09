import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-4 py-8 border-t md:px-6 md:py-12 border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold md:text-xl">Álvaro Vicent López</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Desarrollador Full-Stack con pasión por crear soluciones innovadoras, escalables y de alto rendimiento.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold md:text-lg">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-sm transition-colors text-muted-foreground hover:text-cyan-400">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experience')} className="text-sm transition-colors text-muted-foreground hover:text-cyan-400">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-sm transition-colors text-muted-foreground hover:text-cyan-400">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-sm transition-colors text-muted-foreground hover:text-cyan-400">
                  Skills
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold md:text-lg">Conecta</h4>
       <div className="flex gap-3 md:gap-4">
          <a
            href="https://linkedin.com/in/alvaro-vicent"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all border rounded-lg bg-card hover:bg-cyan-400/20 border-border hover:border-cyan-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:avicent.dev@gmail.com"
            className="p-2 transition-all border rounded-lg bg-card hover:bg-cyan-400/20 border-border hover:border-cyan-400"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/AvicentDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all border rounded-lg bg-card hover:bg-cyan-400/20 border-border hover:border-cyan-400"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

          </div>
        </div>

        <div className="pt-6 text-center border-t md:pt-8 border-border">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Álvaro Vicent. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}