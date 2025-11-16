import { Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Desarrollador Full-Stack" ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen px-4 pt-24 pb-12 overflow-hidden md:px-6 md:pt-20 bg-background">
      {/* Decorative dots */}
      <div className="absolute hidden w-3 h-3 rounded-full md:block top-20 right-20 bg-cyan-400 animate-pulse"></div>
      <div className="absolute hidden w-3 h-3 bg-purple-500 rounded-full md:block bottom-40 left-20 animate-pulse"></div>
      <div className="absolute hidden w-2 h-2 bg-orange-500 rounded-full md:block top-1/2 right-1/3 animate-pulse"></div>

      <div className="grid items-center gap-8 mx-auto md:gap-12 max-w-screen-2xl md:grid-cols-2">
        {/* Texto principal */}
        <div className="order-2 md:order-1">
          <h1 className="mb-4 text-3xl font-bold md:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-cyan-400"> </span>
            <span className="text-purple-400">{text}</span>
            <span className="animate-blink">|</span>
          </h1>

          <p className="mb-3 text-base leading-relaxed md:mb-4 md:text-lg text-foreground/80">
            Construyo aplicaciones escalables y de alto rendimiento utilizando{" "}
            <span className="text-cyan-400">ASP.NET Core</span>,{" "}
            <span className="text-cyan-400">C#</span>,{" "}
            <span className="text-cyan-400">PHP/Laravel</span> y{" "}
            <span className="text-cyan-400">React</span>.
          </p>

          <p className="mb-3 text-base leading-relaxed md:mb-4 md:text-lg text-foreground/80">
            Desde crear frontends intuitivos hasta diseñar APIs REST robustas, entrego
            código de calidad aplicando <span className="text-purple-400">Clean Code</span> y principios{" "}
            <span className="text-purple-400">SOLID</span>. Trabajo con MySQL/SQL Server, Git y Docker
            para entregar soluciones escalables y mantenibles.
          </p>

          <p className="mb-6 text-base leading-relaxed md:mb-8 md:text-lg text-foreground/80">
            Apasionado por resolver desafíos complejos en entornos colaborativos.
            Listo para construir algo excepcional juntos.
          </p>

          {/* Ubicación */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Alicante, España</span>
            </div>
          </div>
        </div>

        {/* Imagen + redes sociales */}
        <div className="relative order-1 md:order-2">
          <div className="relative w-full max-w-sm mx-auto md:max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=800&fit=crop"
              alt="Developer workspace"
              className="relative object-cover w-full h-full border shadow-2xl rounded-3xl border-border"
            />
          </div>

          {/* Redes sociales debajo de la imagen */}
          <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <a
              href="mailto:avicent.dev@gmail.com"
              className="p-3 transition-all border rounded-lg bg-card hover:bg-cyan-400/20 border-border hover:border-cyan-400 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/alvaro-vicent"
              className="p-3 transition-all border rounded-lg bg-card hover:bg-cyan-400/20 border-border hover:border-cyan-400 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animación del cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
