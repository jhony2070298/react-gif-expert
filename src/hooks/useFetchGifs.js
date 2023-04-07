import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs =  ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs( category ); //se invova la función que consume los métodos de la api y recibimos la resp
        setImages( newImages )
        setIsLoading(false)
    }

    useEffect( () => {
        getImages();
    },[]) // si [] solo se ejecuta una vez

    return {
      images,
      isLoading
    }
}
