import "dotenv/config";
import * as nodemailer from "nodemailer";
import { AppError } from "../../errors";
import { iUserCreate } from "../../interfaces/User.interfaces";

export const SendMailNewPassword = async (user: any, password: string) => {
  const transporter = nodemailer.createTransport({
    service: process.env.GMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "Nova senha Cadastrada!",
    text: "Você solicitou alterar a sua senha,",
    html: `<a>segue sua nova senha ${password}</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return "Email enviado com sucesso";
  } catch (error) {
    throw new AppError(error, 401);
  }
};
