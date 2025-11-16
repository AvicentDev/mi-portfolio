import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Gestor de Tiempos",
      subtitle: "API RESTful",
      period: "2025",
      description: "Desarrollo de una API RESTful con Laravel para el registro y gestión de tiempos de proyecto como Toggl.",
      technologies: ["Laravel", "React", "MySQL", "Sanctum"],
      color: "cyan",
      bullets: [
        "Frontend SPA con React consumiendo la API.",
        "Modelado de datos en MySQL, optimizando las consultas y paginación de resultados.",
        "Autenticación de usuarios con Laravel Sanctum y control de roles."
      ],
      showLiveDemo: true,
      demoUrl: "https://frontend-desk-timer.vercel.app/"
    },
    {
      title: "Plataforma Gestión Propiedades",
      subtitle: "Sistema de Reservas",
      period: "Marzo 2025 - Junio 2025",
      description: "Plataforma completa para la gestión de propiedades y apartamentos turísticos con automatización de reservas.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Identity"],
      color: "purple",
      bullets: [
        "Arquitectura modular con Repository Pattern.",
        "Implementación completa de autenticación y autorización.",
        "Optimización de base de datos con SQL Server."
      ],
      showLiveDemo: false
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="absolute hidden w-3 h-3 bg-purple-500 rounded-full md:block top-20 left-20 animate-pulse"></div>
      <div className="absolute hidden w-3 h-3 rounded-full md:block bottom-32 right-40 bg-cyan-400 animate-pulse"></div>

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center md:mt-8 md:mb-16 sm:text-4xl md:text-5xl">
          Proyectos <span className="text-purple-400">Personales</span>
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-4 overflow-hidden transition-all border md:p-6 bg-card border-border rounded-xl hover:bg-accent group"
            >
              {/* Decorative dot */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                project.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-500'
              }`}></div>

              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold md:text-2xl text-foreground">{project.title}</h3>
                <p className={`text-xs md:text-sm ${project.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                  {project.subtitle}
                </p>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground">Período: {project.period}</p>
              </div>

              <p className="mb-4 text-sm md:text-base text-foreground/80">{project.description}</p>

              <ul className="mb-6 space-y-2">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 text-xs md:text-sm text-foreground/70">
                    <span className={`flex-shrink-0 ${project.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs text-foreground bg-accent border-border hover:bg-accent/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.showLiveDemo && project.demoUrl && (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-sm md:w-auto text-foreground border-border hover:bg-accent"
                    asChild
                  >
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
