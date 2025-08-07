'use client'
import React, { useContext, useState, useEffect } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { contexTema } from '../Context/ContextoTema'
import { Tema } from '../Modelos/Temas'

//children
//implementacion
//exportar

export default function ProviderTema({children}: Plantilla){
    const [tema, setTema] = useState<Tema[]>([])
    const [temas, setTemas]=useState<Tema[]>([])
    
    function agregarTemas(item:Tema){
        setTemas([...temas,item])
    }

    return(
        <contexTema.Provider value={{tema,setTema,temas,agregarTemas}}>
            {children}
        </contexTema.Provider>
    )

}

export function useContextTema(){
    return useContext(contexTema)
}