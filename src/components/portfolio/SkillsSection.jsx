import { Code2, Database, Layout, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: Code2,
      color: "purple",
      skills: [
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Frameworks & Librerías",
      icon: Layout,
      color: "cyan",
      skills: [
        { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "green",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
      ]
    },
    {
      title: "Herramientas",
      icon: Wrench,
      color: "orange",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { border: "border-purple-500/50", bg: "bg-purple-500/10", text: "text-purple-400" },
      cyan: { border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400" },
      green: { border: "border-green-500/50", bg: "bg-green-500/10", text: "text-green-400" },
      orange: { border: "border-orange-500/50", bg: "bg-orange-500/10", text: "text-orange-400" }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="relative min-h-screen px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="absolute hidden w-3 h-3 bg-purple-500 rounded-full md:block top-32 left-32 animate-pulse"></div>
      <div className="absolute hidden w-3 h-3 rounded-full md:block bottom-20 left-20 bg-cyan-400 animate-pulse"></div>
      <div className="absolute hidden w-3 h-3 bg-orange-500 rounded-full md:block top-20 right-40 animate-pulse"></div>

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center md:mt-8 md:mb-16 sm:text-4xl md:text-5xl">
          Habilidades <span className="text-cyan-400">Técnicas</span>
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`bg-card border ${colorClasses.border} rounded-xl p-4 md:p-6 hover:bg-accent transition-all `}
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className={`p-2 ${colorClasses.bg} rounded-lg`}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-base md:text-xl font-bold ${colorClasses.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-2 p-3 transition-all rounded-lg md:gap-3 md:p-4 bg-accent hover:bg-accent/80 group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="object-contain w-full h-full transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs text-center md:text-sm text-foreground/80">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 mt-8 border md:p-6 md:mt-12 bg-card border-border rounded-xl">
          <h3 className="mb-3 text-lg font-bold md:mb-4 md:text-xl text-purple-400">Buenas Prácticas</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <div className="px-3 py-2 text-xs border rounded-lg md:text-sm md:px-4 bg-purple-500/10 border-purple-500/30">
              <span className="text-purple-300">Clean Code</span>
            </div>
            <div className="px-3 py-2 text-xs border rounded-lg md:text-sm md:px-4 bg-purple-500/10 border-purple-500/30">
              <span className="text-purple-300">Principios SOLID</span>
            </div>
            <div className="px-3 py-2 text-xs border rounded-lg md:text-sm md:px-4 bg-purple-500/10 border-purple-500/30">
              <span className="text-purple-300">Repository Pattern</span>
            </div>
            <div className="px-3 py-2 text-xs border rounded-lg md:text-sm md:px-4 bg-purple-500/10 border-purple-500/30">
              <span className="text-purple-300">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
