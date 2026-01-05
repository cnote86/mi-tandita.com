import Link from "next/link";

export default function TerminosPage() {
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
            Términos y Condiciones
          </h1>
          
          <p className="text-neutral-500 text-sm mb-12 font-light">
            Versión preliminar — Última actualización: Enero 2026
          </p>

          <div className="prose prose-invert prose-neutral max-w-none">
            <div className="space-y-10 text-neutral-300 font-light leading-relaxed">
              
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
                <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-400">
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
                <p className="text-amber-400/90">
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
                <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-400">
                  <li>Pagos no realizados entre participantes</li>
                  <li>Incumplimientos de los miembros del grupo</li>
                  <li>Pérdidas financieras derivadas de la participación en tandas</li>
                  <li>Disputas entre participantes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  4. Responsabilidades del Usuario
                </h2>
                <p>
                  Los usuarios son responsables de:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-400">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Cumplir con los compromisos acordados dentro de sus tandas</li>
                  <li>Utilizar la plataforma de manera legal y ética</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  5. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios serán notificados a través de la plataforma y entrarán en vigor 
                  inmediatamente después de su publicación.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-white font-medium mb-4 tracking-wide">
                  6. Contacto
                </h2>
                <p>
                  Para cualquier consulta sobre estos términos, puede contactarnos en:{" "}
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
