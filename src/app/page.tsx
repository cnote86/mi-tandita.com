import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a2e1a] overflow-x-hidden">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(127,222,88,0.03)_0%,_transparent_50%)]" />
      
      {/* Scrolling Content */}
      <div className="relative z-10">
        
        {/* Hero Section - Full viewport with prominent logo */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          
          {/* Large Logo - The Statement */}
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mb-12">
            <Image
              src="/Mi -Tandita-logo.png"
              alt="Mi Tandita"
              width={600}
              height={600}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Tagline - BOLD */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-black leading-tight tracking-tight">
              Organiza tus tandas.
              <span className="text-[#7fde58]"> Sin complicaciones.</span>
            </h1>
            <p className="mt-8 text-white/50 text-sm tracking-widest uppercase">
              Plataforma de coordinacion
            </p>
            
            {/* Coming Soon Badge */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-[#7fde58] text-xs tracking-[0.3em] uppercase font-bold">
                Proximamente
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">App Store</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">Google Play</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll hint */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-px h-16 bg-gradient-to-b from-[#7fde58]/60 to-transparent" />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr,2px,1fr] gap-12 md:gap-16 items-center">
              <div>
                <span className="text-[#7fde58] text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Nuestra promesa</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none">
                  No manejamos<br />tu dinero.
                </h2>
              </div>
              <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-[#7fde58]/40 to-transparent" />
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Somos una herramienta de organizacion. Las aportaciones se realizan 
                directamente entre participantes, a traves de los medios que ustedes elijan.
              </p>
            </div>
          </div>
        </section>

        {/* Features - Refined grid */}
        <section className="py-32 px-6 bg-[#162816]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[#7fde58] text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Funcionalidad</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Que hace la plataforma
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-[#3d5a3d]/30">
              {[
                {
                  num: "01",
                  title: "Grupos de ahorro",
                  desc: "Organiza grupos entre personas de confianza con reglas claras"
                },
                {
                  num: "02",
                  title: "Calendarios",
                  desc: "Define fechas y montos de aportacion para cada ciclo"
                },
                {
                  num: "03",
                  title: "Registro",
                  desc: "Lleva el seguimiento de pagos realizados entre participantes"
                },
                {
                  num: "04",
                  title: "Notificaciones",
                  desc: "Recordatorios automaticos y seguimiento de cumplimiento"
                }
              ].map((item) => (
                <div 
                  key={item.num}
                  className="bg-[#162816] p-10 md:p-14 group hover:bg-[#1d331d] transition-colors duration-500"
                >
                  <span className="text-[#7fde58] text-sm font-bold tracking-wider">{item.num}</span>
                  <h3 className="text-2xl text-white mt-4 mb-3 font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Usage - Compliance section */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-[#7fde58] pl-8 md:pl-12">
              <span className="text-[#7fde58] text-xs tracking-[0.3em] uppercase font-bold mb-6 block">Transparencia</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
                Uso de la plataforma
              </h2>
              
              <div className="space-y-8 text-white/70 font-light text-lg leading-relaxed">
                <p>
                  La plataforma puede cobrar una cuota por el uso del software 
                  de organizacion y coordinacion.
                </p>
                <p>
                  Esta cuota corresponde unicamente al 
                  <span className="text-white font-semibold"> acceso y mantenimiento </span>
                  de la plataforma tecnologica.
                </p>
                <p>
                  No recibimos, administramos ni participamos en las aportaciones 
                  economicas de las tandas.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-[#3d5a3d]">
                <p className="text-white/40 text-sm italic">
                  El uso de la plataforma es independiente de los acuerdos economicos entre los participantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 px-6 bg-[#162816]">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#7fde58] text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Hablemos
              </h2>
              <p className="text-white/50 font-light">
                Tienes preguntas? Envianos un mensaje.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-[#3d5a3d]/50">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Brand */}
              <div>
                <Image
                  src="/Mi -Tandita-logo.png"
                  alt="Mi Tandita"
                  width={120}
                  height={120}
                  className="w-24 h-auto mb-6 opacity-80"
                />
                <p className="text-white/40 text-sm font-light">
                  Plataforma de organizacion<br />y coordinacion de tandas.
                </p>
              </div>
              
              {/* Legal */}
              <div>
                <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-6">Legal</h4>
                <div className="space-y-4">
                  <Link 
                    href="/terminos" 
                    className="block text-white/50 hover:text-[#7fde58] transition-colors text-sm font-light"
                  >
                    Terminos y Condiciones
                  </Link>
                  <Link 
                    href="/privacidad" 
                    className="block text-white/50 hover:text-[#7fde58] transition-colors text-sm font-light"
                  >
                    Aviso de Privacidad
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="pt-8 border-t border-[#3d5a3d]/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-xs">
                © 2026 Mi Tandita. Todos los derechos reservados. | Designed by{" "}
                <a 
                  href="https://codevostudio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#7fde58] transition-colors"
                >
                  CodevoStudio
                </a>
              </p>
              <p className="text-white/20 text-xs">
                Hecho en Mexico
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
