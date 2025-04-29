import { BadRequestException } from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";

export const authService = {
  register: async (req) => {
    const { fullName, email, password } = req.body;

    const userExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist)
      throw new BadRequestException(
        "Tài khoản đã tồn tại, vui lòng tạo tài khoản khác!"
      );

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.users.create({
      data: {
        fullName: fullName,
        email: email,
        password: hashPassword,
      },
    });

    delete newUser.password;

    return newUser;
  },
};
