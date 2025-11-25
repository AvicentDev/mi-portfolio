import { Award, Download, ExternalLink, X } from "lucide-react";
import { useState } from "react";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Fundamentos de React",
      issuer: "OpenWebinars",
      issuedBy: "Issued By: OpenWebinars.net",
      period: "21 noviembre 2025",
      hours: "6 horas",
      instructor: "Manuel Agudo",
      certificateUrl: "https://openwebinars.net/cert/66rm",
      pdfPath: "/certificates/fundamentos-react.pdf",
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-500"
    },
    {
      id: 2,
      title: "Introducción a Docker",
      issuer: "OpenWebinars",
      issuedBy: "Issued By: OpenWebinars.net",
      period: "21 noviembre 2025",
      hours: "18 horas",
      instructor: "Manuel Agudo",
      certificateUrl: "https://openwebinars.net/cert/JmgN",
      pdfPath: "/certificates/introduccion-docker.pdf",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500"
    }
  ];

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section id="certifications" className="px-4 py-12 md:px-6 md:py-20 bg-background">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mt-4 mb-4 text-3xl font-bold text-center md:mt-8 md:mb-8 sm:text-4xl md:text-5xl">
            Certificaciones
          </h2>
          <p className="mb-12 text-center text-muted-foreground md:mb-16">
            Recognized achievements in the field of technology.
          </p>

          <div className="grid max-w-4xl gap-6 mx-auto md:gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`group relative overflow-hidden rounded-xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm"></div>

                <div className="relative p-6 md:p-8">
                  {/* Logo Icon */}
                  <div className={`mb-6 flex justify-center`}>
                    <div className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${cert.color}`}>
                      <Award className={`w-10 h-10 ${cert.iconColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-center text-foreground md:text-2xl">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className={`mb-4 text-sm text-center ${cert.iconColor} font-medium`}>
                    {cert.issuedBy}
                  </p>

                  {/* Period */}
                  <p className="mb-2 text-xs text-center md:text-sm text-muted-foreground">
                    {cert.period}
                  </p>

                  {/* Additional Info */}
                  {cert.hours && (
                    <p className="mb-1 text-xs text-center text-muted-foreground">
                      {cert.hours}
                    </p>
                  )}
                  {cert.instructor && (
                    <p className="mb-6 text-xs text-center text-muted-foreground">
                      Instructor: {cert.instructor}
                    </p>
                  )}

                  {/* View Certificate Button */}
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => openCertificate(cert)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${cert.iconColor} hover:bg-accent group-hover:scale-110`}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para mostrar el certificado */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-200 bg-black/90 backdrop-blur-sm animate-in fade-in"
          onClick={closeCertificate}
        >
          <div
            className="relative w-full max-w-7xl h-[95vh] bg-background rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur-sm">
              <div>
                <h3 className="text-lg font-semibold md:text-xl text-foreground">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {selectedCert.issuer}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Botón de descarga */}
                <a
                  href={selectedCert.pdfPath}
                  download
                  className="p-2 transition rounded-lg hover:bg-accent"
                  title="Download certificate"
                >
                  <Download className="w-5 h-5" />
                </a>

                {/* Botón para abrir en nueva pestaña */}
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition rounded-lg hover:bg-accent"
                  title="Open in OpenWebinars"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>

                {/* Botón de cerrar */}
                <button
                  onClick={closeCertificate}
                  className="p-2 transition rounded-lg hover:bg-accent"
                  aria-label="Close certificate"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Visor de PDF */}
            <div className="w-full h-[calc(100%-73px)] bg-gray-100 dark:bg-gray-900">
              <object
                data={selectedCert.pdfPath}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                  <Award className={`w-16 h-16 ${selectedCert.iconColor}`} />
                  <p className="text-lg font-semibold text-foreground">
                    PDF Viewer not available
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your browser doesn't support embedded PDFs
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={selectedCert.pdfPath}
                      download
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border border-border ${selectedCert.iconColor} hover:bg-accent`}
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                    <a
                      href={selectedCert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border border-border ${selectedCert.iconColor} hover:bg-accent`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
