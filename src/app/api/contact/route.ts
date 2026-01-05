import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Servicio no disponible" },
        { status: 503 }
      );
    }
    
    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Mi Tandita <noreply@mi-tandita.com>",
      to: ["contacto@mi-tandita.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #1a2e1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, Helvetica, sans-serif;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #162816; border: 1px solid #3d5a3d;">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #1a2e1a; padding: 40px; text-align: center; border-bottom: 2px solid #7fde58;">
                        <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 28px; font-weight: 900; letter-spacing: -0.02em;">
                          Nuevo Mensaje de Contacto
                        </h1>
                        <p style="margin: 0; color: rgba(127, 222, 88, 0.8); font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; font-weight: 700;">
                          mi-tandita.com
                        </p>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px;">
                        <p style="margin: 0 0 28px 0; color: rgba(255, 255, 255, 0.7); font-size: 15px; line-height: 1.6; font-weight: 300;">
                          Has recibido un nuevo mensaje desde el formulario de contacto de tu plataforma.
                        </p>

                        <!-- Contact Info Card -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                          <tr>
                            <td style="background-color: #1a2e1a; border-left: 4px solid #7fde58; padding: 24px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="padding: 0 0 20px 0;">
                                    <p style="margin: 0 0 6px 0; color: #7fde58; font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; font-weight: 700;">Nombre</p>
                                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700; letter-spacing: -0.02em;">${name}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 20px 0 0 0; border-top: 1px solid #3d5a3d;">
                                    <p style="margin: 0 0 6px 0; color: #7fde58; font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; font-weight: 700;">Email</p>
                                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                                      <a href="mailto:${email}" style="color: #7fde58; text-decoration: none;">${email}</a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- Message Section -->
                        <div style="margin-bottom: 32px;">
                          <p style="margin: 0 0 12px 0; color: #7fde58; font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; font-weight: 700;">Mensaje</p>
                          <div style="background-color: #243824; border: 1px solid #3d5a3d; padding: 24px;">
                            <p style="margin: 0; color: rgba(255, 255, 255, 0.85); font-size: 16px; line-height: 1.7; font-weight: 300; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                          </div>
                        </div>

                        <!-- Action Button -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 36px;">
                          <tr>
                            <td align="center">
                              <a href="mailto:${email}?subject=Re: Tu mensaje en Mi Tandita" style="display: inline-block; background-color: #7fde58; color: #1a2e1a; text-decoration: none; padding: 16px 40px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.3s ease;">
                                Responder a ${name}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #1a2e1a; padding: 32px 40px; border-top: 1px solid #3d5a3d;">
                        <p style="margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.4); font-size: 12px; line-height: 1.6; text-align: center; font-weight: 300;">
                          Este mensaje fue enviado desde el formulario de contacto
                        </p>
                        <p style="margin: 0; color: #7fde58; font-size: 11px; line-height: 1.6; text-align: center; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em;">
                          Mi Tandita
                        </p>
                        <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.3); font-size: 11px; text-align: center; font-weight: 300;">
                          ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City', dateStyle: 'long', timeStyle: 'short' })}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
