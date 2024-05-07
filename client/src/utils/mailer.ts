import nodemailer from "nodemailer"

export const sendEmail  = async ({email ,  emailType, userID})=>{
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOptions = {
      from: 'ashfaqjani916@gmail.com', // sender address
      to: emailcd, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    }
  } catch (error) {
    console.log(error);
  }
}
