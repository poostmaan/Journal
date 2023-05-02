import { v2 as cloudinary } from 'cloudinary'
import { uploadNote } from "../../../../store/journal/helpers/uploadNote";

cloudinary.config({
  cloud_name: "dki4naxim",
  api_key: "533846845537595",
  api_secret: "2CLVRLfHAt7bJgnn_ANzgKF3zUU",
  secure: true
})

describe('Pruebas en uploadNote', () => { 
    test('Debe subir la imagen correctamente a cloudinary', async () => {
      const imageUrl = "https://static.wikia.nocookie.net/alucardhellsing/images/a/ae/Seras_victoria.jpg/revision/latest/scale-to-width-down/280?cb=20140602010336&path-prefix=es";
      const resp = await fetch(imageUrl);
      const blob = await resp.blob();
      const file = new File([blob], "verga");

      const component = await uploadNote( file );

      expect( typeof component ).toBe("string") 
    
      const segments = component.split("/")
      const photoId = segments[ segments.length - 1 ].replace(/.jpg|.png|.jpeg|.gif|.webm/g, "");
      console.log(photoId)

      const cloudres = await cloudinary.v2.api.delete_resources([ "/react-curso" + photoId ])
      console.log(cloudres);

    })

    test('Debe retornar null si no se envia ninguna imagen', async() => {
      const file = new File([], "verga");

      const component = await uploadNote( file );

      expect( component ).toBe(null) 
    })
    
})