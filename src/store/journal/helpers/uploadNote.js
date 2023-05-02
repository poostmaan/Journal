// import config from '../../../dotenv/dotenvConfig';

export const uploadNote = async( file ) => {
  if( !file ) throw new Error("No hay ningun archivo")

  const cloudUrl = "https://api.cloudinary.com/v1_1/dki4naxim/image/upload";

  let formdata = new FormData();
  formdata.append("file", file);
  formdata.append("upload_preset", "react-curso");

  const requestOptions = {
    method: 'POST',
    body: formdata, 
  };

  try {
    const resp = await fetch(cloudUrl, requestOptions)

    if( !resp.ok )throw new Error( "Algo salio mal" )

    const cloudResp = await resp.json()
    console.log( cloudResp )
    return cloudResp.secure_url;

  } catch (error) {
    return null;
    // throw new Error( error.message )
  }


  // console.log( process.env) 
}
