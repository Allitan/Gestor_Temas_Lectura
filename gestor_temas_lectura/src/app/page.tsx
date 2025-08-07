'use client'
import Image from "next/image";
import { useContextTema } from "@/app/Providers/ProviderTema";
import React, { useEffect } from 'react'
import Link from "next/link";

export default function Home() {
  const {tema, setTema, temas, agregarTemas} = useContextTema();

  useEffect(() => {
    setTema(
      [
        {
          idTema: 1,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 2,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 3,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 4,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 5,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 6,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 7,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 8,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 9,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 10,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 11,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 12,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 13,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 14,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 15,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 16,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 17,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 18,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 19,
          tituloTema: 'Programacion',
          interesante: true
        },
        {
          idTema: 20,
          tituloTema: 'Programacion',
          interesante: true
        },
      ]
    )
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Pantalla Principal</h1>
        {
          tema.map((item) =>(
            <div className="col-md-4" key={item.idTema}>
              <div>
                  <div>
                      {item.tituloTema}
                  </div>  
                  <div>
                    <Link href="" className="btn btn-info" onClick={()=>agregarTemas(item)}>Interesante</Link>
                  </div>  
              </div>
            </div>  
          ))
        }
      </div>
    </div>
  );
}
