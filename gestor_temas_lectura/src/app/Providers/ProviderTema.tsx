'use client'
import React, { useContext, useState, useEffect, ReactNode } from 'react'
import { TemasContext } from '../Context/ContextoTema'
import { Tema } from '../Modelos/Temas'

//children
//implementacion
//exportar

export default function TemasProvider({children}: {children: ReactNode }) {
    const [temas, setTemas]=useState<Tema[]>([])
    
    useEffect(() => {
        const temasI: Tema[] =Array.from({length:20}, (_,i) => ({
            idTema: i + 1,
            tituloTema: `Tema ${i + 1}`,
            interesante: false,
        }))
        setTemas(temasI);
    }, [])

    const toggleInteresante = (id: number) => {
        setTemas(prevTemas => prevTemas.map(temas => temas.idTema === id ? {... temas, interesante: !temas.interesante }: temas))
    }

    return(
        <TemasContext.Provider value={{temas, toggleInteresante}}>
            {children}
        </TemasContext.Provider>
    )

}

export function useContextTema(){
    return useContext(TemasContext)
}