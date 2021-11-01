import React from 'react'
import { Bienvenida } from '../components/inicio/Bienvenida'
import { BuscarPaciente } from '../components/inicio/BuscarPaciente'
import { DatosPersonales } from '../components/inicio/DatosPersonales'

export const Inicio = () => {
    return (
        <div className='container'>

            < Bienvenida />
            < DatosPersonales />
            < BuscarPaciente />
            
        </div>
    )
}
