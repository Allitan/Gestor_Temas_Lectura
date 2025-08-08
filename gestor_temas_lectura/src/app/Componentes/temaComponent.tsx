'use client'

import React from "react"
import { TemasContext } from "../Context/ContextoTema"
import { Tema } from "../Modelos/Temas"

export default function TemaComponent({ tema }: {tema:Tema}){
    const { toggleInteresante } = React.useContext(TemasContext);

    return (
        <div style={{padding: '10px', border: '1px solid #ccc', margin: '5px', display: 'flex', justifyContent: 'space-between'}}>
            <span>{tema.tituloTema}</span>
            <button onClick={()=> toggleInteresante(tema.idTema)}>
                {tema.interesante ? 'Demarcar':'Marcar'}
            </button>
         </div>   
    )
}