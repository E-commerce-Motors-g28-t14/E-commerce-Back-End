import { Repository } from "typeorm";
import { User } from "../../entities";
import * as nodemailer from "nodemailer";
import AppDataSource from "../../data-source";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../errors";
import "dotenv/config";
import { SendMailNewPassword } from "./sendMail";
export const recoveryUserPasswordService = async (
  password: any,
  id: string
): Promise<{} | null> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({ where: { id: id } });
  user.password = password;
  await userRepo.save(user);
  if (user.password) {
    SendMailNewPassword(user, password);
    return { message: "Senha alterada com sucesso" };
  }
};

export const sendEmailRecoveryService = async (email: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({ where: { email: email } });

  const token: string = sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
      subject: user.id,
    }
  );

  const transporter = nodemailer.createTransport({
    service: process.env.GMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      accessToken: token,
    },
  });

  const url = process.env.DEPLOY_URL || process.env.URL_LOCAL;
  const porta = process.env.PORT || 5173;

  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "Recuperação de senha",
    text: "Você solicitou a recuperação de senha, clique no link abaixo para redefinir a senha",
    html: `<a href="${url}${porta}/reset-password/${user.id}">Clique no link abaixo para redefinir a senha</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return "Email enviado com sucesso";
  } catch (error) {
    throw new AppError(error, 401);
  }
};
