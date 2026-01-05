import Link from "next/link";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#1a2e1a]">
      {/* Header */}
      <header className="py-8 px-6 border-b border-[#3d5a3d]">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="text-white/60 hover:text-[#7fde58] transition-colors text-sm font-light"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Términos y Condiciones
          </h1>
          
          <p className="text-white/50 text-sm mb-12 font-light">
            Versión preliminar — Última actualización: Enero 2026
          </p>

          <div className="prose prose-invert prose-neutral max-w-none">
            <div className="space-y-10 text-white/80 font-light leading-relaxed">
              
              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar la plataforma Mi Tandita, usted acepta estar sujeto a estos 
                  términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, 
                  no deberá utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  2. Descripción del Servicio
                </h2>
                <p>
                  Mi Tandita es una plataforma digital que facilita la organización y coordinación 
                  de tandas (grupos de ahorro rotativo) entre usuarios. La plataforma proporciona 
                  herramientas para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-white/60">
                  <li>Crear y administrar grupos de ahorro</li>
                  <li>Definir reglas y calendarios de aportación</li>
                  <li>Registrar pagos realizados entre participantes</li>
                  <li>Enviar notificaciones y dar seguimiento al cumplimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  3. Limitación de Responsabilidad Financiera
                </h2>
                <p className="text-[#7fde58]">
                  Mi Tandita NO recibe, retiene, almacena ni transfiere dinero de ningún tipo. 
                  La plataforma es únicamente una herramienta de organización y seguimiento.
                </p>
                <p className="mt-4">
                  Todas las transacciones monetarias se realizan directamente entre los participantes 
                  de cada tanda, utilizando los medios de pago que ellos elijan (transferencias 
                  bancarias, efectivo, u otros proveedores externos de pago).
                </p>
                <p className="mt-4">
                  Mi Tandita no es responsable de:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-white/60">
                  <li>Pagos no realizados entre participantes</li>
                  <li>Incumplimientos de los miembros del grupo</li>
                  <li>Pérdidas financieras derivadas de la participación en tandas</li>
                  <li>Disputas entre participantes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  4. Uso de la Plataforma
                </h2>
                <p>
                  La plataforma puede cobrar una cuota por el uso del software de organización 
                  y coordinación de tandas.
                </p>
                <p className="mt-4">
                  Esta cuota corresponde únicamente al acceso y mantenimiento de la plataforma 
                  tecnológica.
                </p>
                <p className="mt-4">
                  La plataforma no recibe, administra ni participa en las aportaciones económicas 
                  de las tandas.
                </p>
                <p className="mt-4 text-white/60 text-sm border-t border-[#3d5a3d] pt-4">
                  El uso de la plataforma es independiente de los acuerdos económicos entre los participantes.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  5. Responsabilidades del Usuario
                </h2>
                <p>
                  Los usuarios son responsables de:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-white/60">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Cumplir con los compromisos acordados dentro de sus tandas</li>
                  <li>Utilizar la plataforma de manera legal y ética</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  6. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios serán notificados a través de la plataforma y entrarán en vigor 
                  inmediatamente después de su publicación.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  7. Contacto
                </h2>
                <p>
                  Para cualquier consulta sobre estos términos, puede contactarnos en:{" "}
                  <a 
                    href="mailto:contacto@mi-tandita.com" 
                    className="text-[#7fde58] hover:text-[#9fe878] transition-colors"
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
      <footer className="py-8 px-6 border-t border-[#3d5a3d]">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/40 text-xs font-light text-center">
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
        </div>
      </footer>
    </div>
  );
}
