import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a2e1a]">
      {/* Fixed Logo Background - Centered with Parallax Effect */}
      <div 
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: "url('/Mi -Tandita-logo.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "clamp(280px, 40vw, 500px)",
          backgroundAttachment: "fixed",
          opacity: 0.15,
        }}
      />

      {/* Scrolling Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 leading-tight">
              Mi Tandita
            </h1>
            
            {/* Critical One-Liner */}
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto border-l-2 border-[#7fde58] pl-6 text-left">
              Plataforma digital para la organización y coordinación de tandas entre usuarios. 
              <span className="text-[#7fde58] font-medium"> No manejamos dinero.</span>
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#7fde58]/50 to-transparent animate-pulse" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-16 text-center tracking-wide">
              Qué hace la aplicación
            </h2>
            
            <div className="grid gap-6 md:gap-8">
              {[
                {
                  title: "Organización de grupos",
                  description: "Organización de grupos de ahorro entre personas conocidas"
                },
                {
                  title: "Reglas y calendarios",
                  description: "Definición de reglas y calendarios de aportación"
                },
                {
                  title: "Registro de pagos",
                  description: "Registro de pagos realizados directamente entre participantes"
                },
                {
                  title: "Seguimiento",
                  description: "Notificaciones y seguimiento de cumplimiento"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 md:p-10 bg-[#243824] border border-[#3d5a3d] rounded-sm hover:border-[#7fde58]/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[#7fde58] text-sm font-mono mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-10 md:p-14 bg-[#243824] border border-[#7fde58]/30 rounded-sm">
              <h2 className="text-xl md:text-2xl font-light text-white mb-8 tracking-wide">
                Qué no hace la aplicación
              </h2>
              <p className="text-white/80 font-light leading-loose text-lg">
                La plataforma <span className="text-[#7fde58] font-medium">no recibe, retiene ni transfiere dinero</span>. 
                Todas las aportaciones se realizan directamente entre los participantes a través de 
                proveedores externos de pago.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-[#3d5a3d]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Company Info */}
              <div>
                <h3 className="text-white font-medium mb-6 tracking-wide">Información Legal</h3>
                <div className="space-y-3 text-white/60 font-light text-sm">
                  <p>País: México</p>
                  <p>
                    Contacto:{" "}
                    <a 
                      href="mailto:contacto@mi-tandita.com" 
                      className="text-white/80 hover:text-[#7fde58] transition-colors"
                    >
                      contacto@mi-tandita.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-white font-medium mb-6 tracking-wide">Documentos Legales</h3>
                <div className="space-y-3 text-sm">
                  <Link 
                    href="/terminos" 
                    className="block text-white/60 hover:text-[#7fde58] transition-colors font-light"
                  >
                    Términos y Condiciones
                  </Link>
                  <Link 
                    href="/privacidad" 
                    className="block text-white/60 hover:text-[#7fde58] transition-colors font-light"
                  >
                    Aviso de Privacidad
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-[#3d5a3d]/50">
              <p className="text-white/40 text-xs font-light text-center">
                © {new Date().getFullYear()} Mi Tandita. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
