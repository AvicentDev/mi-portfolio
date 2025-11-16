import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center md:mt-8 md:mb-16 sm:text-4xl md:text-5xl">
          Educación
        </h2>

        <div className="relative pl-6 md:pl-16">
          <div className="absolute left-0 md:left-2.5 top-0 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-background"></div>

          <div className="p-4 transition-all border md:p-6 bg-card border-border rounded-xl hover:bg-accent">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="p-3 rounded-lg bg-cyan-400/10 w-fit">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col mb-4 space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl text-foreground">
                      Grado Superior en Desarrollo de Aplicaciones Web
                    </h3>
                    <p className="text-base md:text-lg text-cyan-400">IGFormacion</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm md:text-base text-muted-foreground">Alicante, España</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Mayo 2023 - Junio 2025</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-foreground/80">
                  Formación completa en desarrollo de aplicaciones web con especialización en backend y frontend.
                  Experiencia práctica en proyectos reales aplicando metodologías ágiles y mejores prácticas de desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
