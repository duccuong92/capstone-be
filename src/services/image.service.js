import prisma from "../common/prisma/init.prisma";

const imageService = {
  findAll: async (req) => {
    let { page, pageSize } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;

    const skip = (page - 1) * pageSize;

    const [images, totalItem] = await Promise.all([
      prisma.images.findMany({
        skip: skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
      }),
      prisma.images.count(),
    ]);

    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItem: totalItem,
      totalPage: totalPage,
      items: images || [],
    };
  },

  searchImageByName: async (req) => {
    let { search, page, pageSize } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;
    search = search || ``;

    const skip = (page - 1) * pageSize;

    const where = {
      imageName: {
        contains: search,
      },
      isDeleted: false,
    };

    const [images, totalItem] = await Promise.all([
      prisma.images.findMany({
        skip: skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        where: where,
      }),
      prisma.images.count({
        where: where,
      }),
    ]);

    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItem: totalItem,
      totalPage: totalPage,
      items: images || [],
    };
  },
};

export default imageService;
