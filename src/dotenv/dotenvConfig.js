import dotenv from 'dotenv';
dotenv.config()

export default {
    CLOUDINARY_BASE_PATH: process.env.CLOUDINARY_BASE_PATH,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
}