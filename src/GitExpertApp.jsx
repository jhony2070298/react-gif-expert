import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory) ) return; //si el valor de newCategory existe en el arreglo no haga nada

        //agregando un elemento --> nuevo valor
        //setCategories([...categories, newCategory])
        setCategories([newCategory, ...categories])// de esta manera también se puede
    }

    return (
        <>

            <h1>Git Expert App</h1>

            <AddCategory onNewCategory= {onAddCategory}/>    
 
            {
                categories.map( (category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category}
                        />
                    )
                )
            }
            
               
        </>
    
    )
}
