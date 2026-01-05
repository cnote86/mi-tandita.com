import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="py-8 px-6 border-b border-neutral-800/50">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="text-neutral-400 hover:text-white transition-colors text-sm font-light"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Aviso de Privacidad
          </h1>
          
          <p className="text-neutral-500 text-sm mb-12 font-light">
            Versión preliminar — Última actualización: Enero 2026
          </p>

          <div className="prose prose-invert prose-neutral max-w-none">
            <div className="space-y-10 text-neutral-300 font-light leading-relaxed">
              
              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  1. Responsable del Tratamiento
                </h2>
                <p>
                  Mario Alberto Campos Avitia, con domicilio en México, es responsable del 
                  tratamiento de sus datos personales.
                </p>
                <p className="mt-4">
                  Correo de contacto:{" "}
                  <a 
                    href="mailto:contacto@mi-tandita.com" 
                    className="text-amber-400/90 hover:text-amber-300 transition-colors"
                  >
                    contacto@mi-tandita.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  2. Datos Personales Recopilados
                </h2>
                <p>
                  Para el funcionamiento de la plataforma Mi Tandita, podemos recopilar los 
                  siguientes datos personales:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-400">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información de perfil proporcionada voluntariamente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  3. Finalidades del Tratamiento
                </h2>
                <p>
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-400">
                  <li>Crear y administrar su cuenta de usuario</li>
                  <li>Facilitar la organización de tandas entre usuarios</li>
                  <li>Enviar notificaciones relacionadas con sus tandas</li>
                  <li>Proporcionar soporte técnico y atención al usuario</li>
                  <li>Mejorar nuestros servicios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  4. Datos Financieros
                </h2>
                <p className="text-amber-400/90">
                  Mi Tandita NO recopila, almacena ni procesa información financiera, 
                  números de cuenta bancaria, datos de tarjetas de crédito o débito, 
                  ni ningún otro dato financiero sensible.
                </p>
                <p className="mt-4">
                  Todas las transacciones se realizan directamente entre los participantes 
                  de cada tanda, fuera de nuestra plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  5. Transferencia de Datos
                </h2>
                <p>
                  No vendemos, comercializamos ni transferimos sus datos personales a terceros, 
                  excepto cuando sea necesario para el funcionamiento del servicio o cuando 
                  sea requerido por ley.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  6. Derechos ARCO
                </h2>
                <p>
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento 
                  de sus datos personales. Para ejercer estos derechos, puede contactarnos en:{" "}
                  <a 
                    href="mailto:contacto@mi-tandita.com" 
                    className="text-amber-400/90 hover:text-amber-300 transition-colors"
                  >
                    contacto@mi-tandita.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  7. Seguridad
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger 
                  sus datos personales contra acceso no autorizado, alteración, divulgación 
                  o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  8. Cambios al Aviso de Privacidad
                </h2>
                <p>
                  Nos reservamos el derecho de modificar este aviso de privacidad en cualquier 
                  momento. Los cambios serán publicados en esta página y, cuando sean 
                  significativos, se lo notificaremos por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  9. Contacto
                </h2>
                <p>
                  Si tiene preguntas sobre este aviso de privacidad o sobre el tratamiento 
                  de sus datos personales, puede contactarnos en:{" "}
                  <a 
                    href="mailto:contacto@mi-tandita.com" 
                    className="text-amber-400/90 hover:text-amber-300 transition-colors"
                  >
                    contacto@mi-tandita.com
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800/50">
        <div className="max-w-3xl mx-auto">
          <p className="text-neutral-500 text-xs font-light text-center">
            © {new Date().getFullYear()} Mi Tandita. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
