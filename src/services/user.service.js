import prisma from "../common/prisma/init.prisma";

export const userService = {
  findAll: async () => {
    const users = await prisma.users.findMany();
    return users;
  },
};
