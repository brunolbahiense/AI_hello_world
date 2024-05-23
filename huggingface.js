import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv'

dotenv.config()
const HF_KEY = process.env.HF_KEY // chave referente ao huggingface.co
const inference =  new HfInference(HF_KEY) //inferencia que utilizará da chave para processar a request
const model = "nlpconnect/vit-gpt2-image-captioning" //modelo disponibilizado no huggingface a ser utilizado
const imageUrl = "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/19/2124153488-gato.jpg" // link da imagem

const readImg = async (image) =>{
    const response = await fetch(image);
    const imageBlob = await response.blob();
    //payload para gerar a transcricao de imagem para texto (imageToText)
    const result = await inference.imageToText({
        data: imageBlob,
        model
    })
    console.log(result)
}

readImg(imageUrl)
