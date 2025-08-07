import { createContext } from "react"
import { Tema } from "../Modelos/Temas"

export const contexTema = createContext({
    tema: [] as Tema[],
    temas: [] as Tema[],
    setTema: (tema:Tema[])=>{},
    agregarTemas:(item:Tema)=>{}
})