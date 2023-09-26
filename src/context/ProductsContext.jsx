import { createContext, useContext, useState } from 'react'

//crear el contexto
const FiltersContext = createContext()//este es el que tenemos que consiumir

//proveer el contexto. to create a provider

const FiltersProvider = ({ children }) => {//y este el que nos da el acceso

    const [filters, setFilters] = useState({
        category: 'laptops',
        minPrice: 1
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}

export default FiltersProvider;
export const useProductContext = () => useContext(FiltersContext);//el contexto que tenemos que consumir
