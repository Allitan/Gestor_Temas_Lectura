'use client'
import { createContext } from "react"
import { Tema } from "../Modelos/Temas"

interface TemasContextType {
    temas: Tema[]
    toggleInteresante: (id: number) => void;
}

export const TemasContext = createContext<TemasContextType>({
    temas: [],
    toggleInteresante: () => {}
})