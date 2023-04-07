import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {

    const {images, isLoading} = useFecthGifs( category )

    return (
        <>
            <h1>{ category }</h1>
            {
                isLoading && ( <h2> Cargando...</h2>) // esto es un if lógico
               
            }

            <div className="card-grid">
               {
                images?.map( (image) =>(
                    <GifItem 
                        key={image.id}
                        { ...image }
                    />
                ))
               }
            </div>
         
        </>
    
  )
}
