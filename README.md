# YouTube Clone – Backend (MERN Stack)

This is the backend service for the YouTube Clone application built using
Node.js, Express.js, MongoDB, and Cloudinary.

It provides APIs for:
- User Authentication (Register / Login)
- Channel Management
- Video Upload (Cloudinary)
- Video Storage & Retrieval

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary (Video & Image Storage)
- Multer (File Upload Handling)
- JWT Authentication
- CORS
- dotenv

---

## 📁 Project Structure

backend/
├── server.js
├── .env
├── package.json
└── src/
    ├── app.js
    ├── config/
    │   ├── db.js
    │   └── cloudinary.js
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── channel.controller.js
    │   └── video.controller.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── upload.middleware.js
    ├── models/
    │   ├── User.js
    │   ├── Channel.js
    │   └── Video.js
    └── routes/
        ├── auth.routes.js
        ├── channel.routes.js
        └── video.routes.js

---

## 🔐 Environment Variables

Create a `.env` file in the backend root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

JWT_SECRET=your_jwt_secret

▶️ How to Run Backend

```bash
cd backend
npm install
npm run dev
```