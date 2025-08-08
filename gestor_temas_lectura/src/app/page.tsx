'use client'
import Image from "next/image";
import { useContextTema } from "@/app/Providers/ProviderTema";
import React, { useEffect } from 'react'
import Link from "next/link";
import { TemasContext } from "./Context/ContextoTema";

export default function Home() {
  const { temas } = React.useContext(TemasContext);


  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Pantalla Principal</h1>
      <div style={{ marginBottom: '20px' }}>
        {temas.map((tema) => (
          <TemaComponent key={tema.idTema} tema={tema} />
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link href="/general/interesantes" passHref>
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Visualizar temas interesantes
          </button>
        </Link>
      </div>
    </div>
  );
}
