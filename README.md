# 📸 Image Sharing App - Backend API

Dự án này là một ứng dụng chia sẻ hình ảnh, được xây dựng để hỗ trợ giảng dạy về cách phát triển API với Express.js và Prisma.

## 📌 Tính năng nổi bật

- 🖼️ **Tải lên và quản lý hình ảnh**
- 💬 **Bình luận về hình ảnh**
- ⭐ **Lưu hình ảnh yêu thích**
- 🔍 **Tìm kiếm hình ảnh theo tên**
- 👤 **Quản lý thông tin người dùng**
- 🔒 **Hỗ trợ đăng nhập & đăng ký tài khoản**

## 🛠 Công nghệ sử dụng

- **Node.js** – Môi trường chạy JavaScript 🚀
- **Express.js** – Framework để tạo API ⚡
- **Prisma ORM** – Quản lý cơ sở dữ liệu 🗄️
- **MySQL** – Lưu trữ dữ liệu 🛢️ (tùy cấu hình Prisma)
- **Postman** – Kiểm thử API 🔍

## 📜 API Endpoints

### 🖼️ **Image APIs**

| Method  | Endpoint                   | Mô tả                            |
|---------|----------------------------|----------------------------------|
| `GET`   | `/images`                  | Lấy danh sách hình ảnh           |
| `GET`   | `/images/search?name=`     | Tìm kiếm hình ảnh theo tên       |
| `GET`   | `/images/:imageId`         | Lấy thông tin chi tiết hình ảnh  |
| `GET`   | `/images/:imageId/comments`| Lấy danh sách bình luận của hình ảnh |
| `GET`   | `/images/:imageId/saved`   | Kiểm tra hình ảnh đã lưu hay chưa |
| `POST`  | `/images/:imageId/comments`| Thêm bình luận mới cho hình ảnh  |
| `POST`  | `/images`                  | Tải lên hình ảnh mới             |
| `DELETE`| `/images/:imageId`         | Xóa hình ảnh                     |

### 👤 **User APIs**

| Method  | Endpoint                   | Mô tả                            |
|---------|----------------------------|----------------------------------|
| `GET`   | `/users/:userId`           | Lấy thông tin người dùng         |
| `GET`   | `/users/:userId/saved-images` | Lấy danh sách hình ảnh đã lưu |
| `GET`   | `/users/:userId/created-images` | Lấy danh sách hình ảnh đã tạo |
| `PUT`   | `/users/:userId`           | Cập nhật thông tin người dùng    |

### 🔐 **Auth APIs**

| Method  | Endpoint         | Mô tả               |
|---------|------------------|---------------------|
| `POST`  | `/register`      | Đăng ký tài khoản   |
| `POST`  | `/login`         | Đăng nhập tài khoản |

