export default function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador Backend en Prácticas",
      company: "Tainforma Consultoría Informática",
      location: "Alicante, España",
      period: "Marzo 2025 – Junio 2025",
      color: "cyan",
      bullets: [
        "Desarrollé una plataforma para la gestión de propiedades y apartamentos turísticos, para facilitar la automatización de las reservas que realizan los inquilinos.",
        "Diseño y optimización de la arquitectura de datos con SQL Server.",
        "Implementación de Autenticación y Autorización con Identity.",
        "Uso de Repository Pattern y Class Libraries para modularizar la lógica de la aplicación.",
        "Trabajo 100% en remoto y gestión de Tareas a través de Microsoft Teams."
      ]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="absolute hidden w-3 h-3 rounded-full md:block top-40 right-32 bg-cyan-400 animate-pulse"></div>
      <div className="absolute hidden w-3 h-3 bg-orange-500 rounded-full md:block bottom-40 right-20 animate-pulse"></div>

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center md:mt-8 md:mb-16 sm:text-4xl md:text-5xl">
          Experiencia <span className="text-cyan-400">Profesional</span>
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-border"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-12 pl-6 md:pb-16 md:pl-16 last:pb-0">
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-2.5 top-0 w-3 h-3 rounded-full ${
                exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-orange-500'
              } ring-4 ring-background`}></div>

              <div className="p-4 transition-all border md:p-6 bg-card border-border rounded-xl hover:bg-accent">
                <div className="flex flex-col mb-4 space-y-3 md:space-y-0 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl text-foreground">{exp.title}</h3>
                    <p className="text-base md:text-lg text-cyan-400">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm md:text-base text-muted-foreground">{exp.location}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 text-sm md:gap-3 md:text-base text-foreground/80">
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
