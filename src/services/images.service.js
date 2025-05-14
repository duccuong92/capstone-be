import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const imagesService = {
  // 3. GET danh sách hình ảnh
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

  // 4. GET tìm kiếm danh sách hình ảnh theo tên
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

  // 5. GET thông tin ảnh và người tạo ảnh bằng id ảnh
  getImageById: async (req) => {
    const { id } = req.params;
    const imageId = Number.parseInt(id);

    if (isNaN(imageId)) {
      throw new BadRequestException("ID ảnh không hợp lệ");
    }

    const image = await prisma.images.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
      include: {
        Users: {
          select: {
            id: true,
            fullName: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    if (!image) {
      throw new NotFoundException("Không tìm thấy ảnh");
    }

    return {
      image,
    };
  },

  // 6. GET thông tin bình luận theo id ảnh
  getCommentsByImageId: async (req) => {
    const { id } = req.params;
    const imageId = Number.parseInt(id);

    if (isNaN(imageId)) {
      throw new BadRequestException("ID ảnh không hợp lệ");
    }

    // Kiểm tra ảnh có tồn tại không
    const imageExists = await prisma.images.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
    });

    if (!imageExists) {
      throw new NotFoundException("Không tìm thấy ảnh");
    }

    const comments = await prisma.comments.findMany({
      where: {
        imageId: imageId,
        isDeleted: false,
      },
      include: {
        Users: {
          select: {
            id: true,
            fullName: true,
            email: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      comments,
    };
  },

  // 7. GET thông tin đã lưu hình này chưa theo id ảnh
  checkImageSaved: async (req) => {
    const { id } = req.params;
    const imageId = Number.parseInt(id);
    const userId = req.user.id;

    if (isNaN(imageId)) {
      throw new BadRequestException("ID ảnh không hợp lệ");
    }

    // Kiểm tra ảnh có tồn tại không
    const imageExists = await prisma.images.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
    });

    if (!imageExists) {
      throw new NotFoundException("Không tìm thấy ảnh");
    }

    const savedImage = await prisma.saved_Images.findUnique({
      where: {
        userId_imageId: {
          userId: userId,
          imageId: imageId,
        },
        isDeleted: false,
      },
    });

    return {
      isSaved: !!savedImage, // Chuyển đổi thành boolean
    };
  },

  // 8. POST để lưu thông tin bình luận của người dùng với hình ảnh
  addComment: async (req) => {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
    const imageId = Number.parseInt(id);

    if (isNaN(imageId)) {
      throw new BadRequestException("ID ảnh không hợp lệ");
    }

    if (!content || content.trim() === "") {
      throw new BadRequestException("Nội dung bình luận không được để trống");
    }

    // Kiểm tra ảnh có tồn tại không
    const imageExists = await prisma.images.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
    });

    if (!imageExists) {
      throw new NotFoundException("Không tìm thấy ảnh");
    }

    const newComment = await prisma.comments.create({
      data: {
        userId: userId,
        imageId: imageId,
        content: content,
        commentDate: new Date(),
      },
    });

    return {
      comment: newComment,
    };
  },
};
