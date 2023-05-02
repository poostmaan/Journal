export const getEnv = () => {

  return {
    VITE_CLOUDINARY_BASE_PATH: import.meta.env.VITE_CLOUDINARY_BASE_PATH,
    VITE_CLOUDINARY_CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    VITE_PROD: import.meta.env.VITE_PROD,
    VITE_APIKEY: import.meta.env.VITE_APIKEY,
    VITE_AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
    VITE_PROJECTID: import.meta.env.VITE_PROJECTID,
    VITE_STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
    VITE_APPID: import.meta.env.VITE_APPID,
  }
  
}
