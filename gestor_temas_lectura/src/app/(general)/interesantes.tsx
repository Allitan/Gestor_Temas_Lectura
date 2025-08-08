'use client'
import React from "react"
import Link from "next/link"
import { TemasContext } from "../Context/ContextoTema"
import temaComponent from "../Componentes/temaComponent"

export default function interesantesPage() {
    const { temas } = React.useContext(TemasContext);
    const temasInteresantes = temas.filter(tema => tema.interesante);

    return(
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Temas Interesantes</h1>
            <div>
                {temasInteresantes.length > 0 ? (
                    temasInteresantes.map(tema => (
                        <temaComponent key={tema.id} tema={tema} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No hay temas marcados como interesantes.</p>
                )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link href="/general" passHref>
                    <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    )
}