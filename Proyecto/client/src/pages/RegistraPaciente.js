import React, { useState } from 'react'
import { Accordion } from '../components/Accordion'



export const RegistraPaciente= () => {

    const [datosBasicos, setDatosBasicos] = useState({
        nombre: '',
        sexo: 'Hombre',
        rut: '',
        edad: '',
        telefono: '',
        celular: '',
        domicilio: '',
        estadoCivil: 'Soltero',
        profesion: '',
        lugarTrabajo: ''
    })


    const [datosClinicos, setDatosClinicos] = useState({
        padreVivo: false,
        enfermedadPadre: '',
        madreViva: false,
        enfermedadMadre: '',
        pacienteEnfermo: false,
        enfermedadPaciente: ''
    })



    
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        alert('listo')
      }

    return (
        <div className='m-4'>
            <h2>Registro de Paciente</h2>
            <div className='container mt-5'>
            
            <div className='row d-flex justify-content-center'>
                <div className='col-8'>

                    {/* CARD */}

                    <div className='card shadow mb-5'>
                        <div className='card-header'><h4>Ingrese datos del Paciente</h4></div>
                            <div className='body'>

                                {/*FORMULARIO */}

                                <form action =""  className='was-validated' onSubmit={handleOnSubmit} noValidate>
                                    <Accordion datosBasicos={datosBasicos} setDatosBasicos={setDatosBasicos} datosClinicos={datosClinicos} setDatosClinicos={setDatosClinicos}/>
                                </form>

              
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    )
}
