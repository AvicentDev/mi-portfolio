import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { Linkedin, Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_2dd923h",      // 👉 pon tu Service ID
        "template_xmutf69",     // 👉 pon tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "VW_rSt3rzTnYth43T"       // 👉 pon tu Public Key
      );

      toast.success("Mensaje enviado correctamente!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar el mensaje.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="absolute hidden w-3 h-3 rounded-full md:block top-40 right-20 bg-cyan-400 animate-pulse"></div>

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center md:mt-8 md:mb-16 sm:text-4xl md:text-5xl">
          Contáctame
        </h2>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Ponte en Contacto</h3>
            <p className="mb-6 text-sm md:mb-8 md:text-base text-muted-foreground">
              No dudes en contactarme para cualquier trabajo o sugerencia.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:avicent.dev@gmail.com"
                className="flex items-center gap-3 p-4 transition-all border rounded-lg md:gap-4 bg-card border-border hover:bg-accent group"
              >
                <div className="p-2 transition-colors rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                  <p className="text-sm md:text-base text-foreground">avicent.dev@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/alvaro-vicent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 transition-all border rounded-lg md:gap-4 bg-card border-border hover:bg-accent group"
              >
                <div className="p-2 transition-colors rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-sm break-all md:text-base text-foreground">linkedin.com/in/alvaro-vicent</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

              <div>
                <label htmlFor="name" className="block mb-2 text-xs md:text-sm text-muted-foreground">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="text-sm md:text-base text-foreground bg-card border-border placeholder:text-muted-foreground focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-xs md:text-sm text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu email"
                  className="text-sm md:text-base text-foreground bg-card border-border placeholder:text-muted-foreground focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-xs md:text-sm text-muted-foreground">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  rows={6}
                  className="text-sm resize-none md:text-base text-foreground bg-card border-border placeholder:text-muted-foreground focus:border-cyan-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 text-base font-semibold text-black md:py-6 md:text-lg bg-cyan-400 hover:bg-cyan-500"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 md:w-5 md:h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 md:w-5 md:h-5" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
