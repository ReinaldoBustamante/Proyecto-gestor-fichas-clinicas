import React from 'react'



export const DatosClinicos = (props) => {

    const {datosClinicos, setDatosClinicos} = props

    const handleOnClick = (e) =>{

        //Padre Vivo
        if (e.target.name === 'padreVivo'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    padreVivo: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    padreVivo: false
                })
            }
            

        }

  
    }

    const handleOnChange = (e) =>{
        setDatosClinicos({
            ...datosClinicos,
            enfermedadPadre: e.target.value
        })
    }

    return (
        <div>
            {/* Padre Vivo ? */}
            <div className='row mb-3 d-flex'>

                <div className="col-5 d-flex align-items-center">
                    <div className="form-check form-check-inline ">
                        <input className="form-check-input " type="checkbox" name = 'padreVivo'  id="padreVivo" value={datosClinicos.padreVivo} onClick={handleOnClick} />
                        <label className="form-check-label" htmlFor="padreVivo">
                            Padre Vivo
                        </label>
                    </div>     
                </div>

                <div className='col-7 ' >
                        <div className='form-floating'>
                            <input type='text' name='enfermedad-padre' id='enfermedad-padre' className='form-control' placeholder='ingrese enfermedad padre ' value={datosClinicos.enfermedadPadre} onChange={handleOnChange} required/>
                            <label htmlFor ='enfermedad-padre'>Enfermedad que padece o padecio</label>
                        </div>
                </div>

            </div>

            {/* Madre Viva ? */}
            <div className='row mb-3 d-flex'>

                <div className="col-5 d-flex align-items-center">
                    <div className="form-check form-check-inline ">
                        <input className="form-check-input" type="checkbox" name = 'madreViva'  id="madreViva" />
                        <label className="form-check-label" htmlFor="madreViva">
                            Madre Viva
                        </label>
                    </div>    
                </div>
                  
                <div className='col-7 ' >
                        <div className='form-floating'>
                            <input type='text' name='enfermedad-madre' id='enfermedad-madre' className='form-control' placeholder='ingrese enfermedad madre ' required/>
                            <label htmlFor ='enfermedad-madre'>Enfermedad que padece o padecio</label>
                        </div>
                           
                </div>
                      
            </div>

            {/* Paciente enfermo? */}
            <div className='row mb-3 d-flex'>
                    <div className="col-5 d-flex align-items-center">
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="checkbox" name = 'pacienteEnfermo'  id="pacienteEnfermo"  />
                            <label className="form-check-label" htmlFor="pacienteEnfermo">
                                Paciente Enfermo
                            </label>
                        </div>
                    </div>

                    <div className='col-7 ' >
                        <div className='form-floating'>
                            <input type='text' name='enfermedad-paciente' id='enfermedad-paciente' className='form-control' placeholder='ingrese enfermedad paciente ' required/>
                            <label htmlFor ='enfermedad-paciente'>Indique enfermedad</label>
                        </div>
                           
                    </div>
                      
                    
            </div>
        </div>
    )
}
