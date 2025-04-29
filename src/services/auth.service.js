import {
  BadRequestException,
  UnAuthorizedException,
} from "../common/helpers/exception.helper";
import logger from "../common/logging/logger.winston";
import prisma from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";
import tokenService from "./token.service";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "../common/constant/app.constant";
import jwt from "jsonwebtoken";

const authService = {
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

  login: async (req) => {
    const { email, password } = req.body;

    const userExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (!userExist)
      throw new BadRequestException(
        "Tài khoản chưa tồn tại, vui lòng đăng ký!"
      );

    const isMatch = bcrypt.compareSync(password, userExist.password);
    if (!isMatch) {
      logger.error(`userId => ${userExist.id}`);
      throw new BadRequestException("Tài khoản hoặc mật khẩu không chính xác!");
    }

    const tokens = tokenService.generateTokens(userExist.id);

    return tokens;
  },

  refreshToken: async (req) => {
    const { accessToken, refreshToken } = req.body;

    if (!accessToken) throw new UnAuthorizedException("Không có accessToken");
    if (!refreshToken) throw new UnAuthorizedException("Không có refreshToken");

    const decodeRefreshToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    const decodeAccessToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET, {
      ignoreExpiration: true,
    });

    if (decodeRefreshToken.sub !== decodeAccessToken.sub)
      throw new UnAuthorizedException(`Token không hợp lệ`);

    const tokens = tokenService.generateTokens(decodeRefreshToken.sub);

    return tokens;
  },


};

export default authService;
