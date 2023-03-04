import nodemailer from "nodemailer"

const emailRegistro = async (datos) => { 
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      const { email, nombre, token } = datos;

      //! Enviar email

      const info = await transporter.sendMail({
        from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>',
        to: email,
        subject: 'Comprueba tu cuenta en APV',
        text: 'Commprueba tu cuenta en APV',
        html:`<p> Hola: ${nombre}, comprueba tu cuenta en APV. </p>
          <p> Tu cuenta ya esta lista, confirmala en el siguiente enlace:
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar Cuenta</a> </p>

          <p> Si tu no creaste una cuenta, puedes ignorar este mensaje.</p>
        `
      })

      console.log("mensaje enviado:  %s, ", info.messageId);
 };

 export default emailRegistro

