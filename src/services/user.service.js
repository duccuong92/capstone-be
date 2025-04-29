import prisma from "../common/prisma/init.prisma";


export const userService = {
  findAll: async (req) => {
    let { page, pageSize, search } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;
    search = search || ``;

    console.log({ page, pageSize });

    const skip = (page - 1) * pageSize;

    const where = { fullName: { contains: search } };
    const users = await prisma.users.findMany({
      skip: skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      where: where,
    });

    const totalItem = await prisma.users.count({
      where: where,
    });
    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItem: totalItem,
      totalPage: totalPage,
      items: users || [],
    };
  },
};
