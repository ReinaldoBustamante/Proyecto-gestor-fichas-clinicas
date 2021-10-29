import React from 'react'

export const DatosBasicos = (props) => {

    const {datosBasicos, setDatosBasicos} = props

    const handleOnChange = (e) =>{
        if(e.target.name === 'nombre'){
            setDatosBasicos({
                ...datosBasicos,
                nombre:e.target.value
            }
            )
        }
        if(e.target.name === 'sexo'){
            setDatosBasicos({
                ...datosBasicos,
                sexo:e.target.value
            })
        }
        if(e.target.name === 'rut'){
            setDatosBasicos({
                ...datosBasicos,
                rut:e.target.value
            })
        }
        if(e.target.name === 'edad'){
            setDatosBasicos({
                ...datosBasicos,
                edad:e.target.value
            })
        }
        if(e.target.name === 'telefono'){
            setDatosBasicos({
                ...datosBasicos,
                telefono:e.target.value
            })
        }
        if(e.target.name === 'celular'){
            setDatosBasicos({
                ...datosBasicos,
                celular:e.target.value
            })
        }
        if(e.target.name === 'domicilio'){
            setDatosBasicos({
                ...datosBasicos,
                domicilio:e.target.value
            })
        }
        if(e.target.name === 'estado-civil'){
            setDatosBasicos({
                ...datosBasicos,
                estadoCivil:e.target.value
            })
        }
        if(e.target.name === 'profesion'){
            setDatosBasicos({
                ...datosBasicos,
                profesion:e.target.value
            })
        }
        if(e.target.name === 'lugar-trabajo'){
            setDatosBasicos({
                ...datosBasicos,
                lugarTrabajo:e.target.value
            })
        }
    }




    return (

        //Contenedor
        <div className='container'>

            {/* Nombre y Sexualidad */}

            <div className='row mb-2'>
                <div className='col-6'>
                    <div className='form-floating'>
                        <input type='text' name='nombre' id='nombre' className='form-control' placeholder='Ingrese su nombre' onChange={handleOnChange} value={datosBasicos.nombre} required/>
                        <label htmlFor ='nombre'>Nombre</label>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-floating'>
                        <select name='sexo' id='sexo' className='form-select' aria-label='seleccion sexo ' onChange={handleOnChange}  >
                            <option value='Hombre'>Hombre</option>
                            <option value='Mujer'>Mujer</option>
                            <option value='Otro'>Otro</option>
                        </select>
                        <label htmlFor='sexo'>Indique su orientacion sexual</label>
                        
                    </div>
                </div>
            </div>

            {/* Rut y Edad */}

            <div className='row mb-2'>
                <div className='col-6'>
                    <div className='form-floating'>
                        <input type='text' name='rut' id='rut' className='form-control' placeholder='Ingrese su rut ' value={datosBasicos.rut} onChange={handleOnChange} required/>
                        <label htmlFor ='rut'>Rut</label>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-floating '>
                        <input type='text' name='edad' id='edad' className='form-control' placeholder='Indique su edad ' value={datosBasicos.edad} onChange={handleOnChange} required/>
                        <label htmlFor ='edad'>Edad</label>
                    </div>
                </div>
            </div>

            {/* Telefono y Celular */}

            <div className='row mb-2'>
                <div className='col-6'>
                    <div className='form-floating'>
                        <input type='text' name='telefono' id='telefono' className='form-control' placeholder='Ingrese su numero telefonico ' value={datosBasicos.telefono} onChange={handleOnChange} required/>
                        <label htmlFor ='telefono'>Telefono</label>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-floating '>
                        <input type='text' name='celular' id='celular' className='form-control' placeholder='Indique su numero de celular ' value={datosBasicos.celular} onChange={handleOnChange} required/>
                        <label htmlFor ='celular'>Celular</label>
                    </div>
                </div>
            </div>

            {/* Domicilio y estado civil */}

            <div className='row mb-2'>
                <div className='col-6'>
                    <div className='form-floating'>
                        <input type='text' name='domicilio' id='domicilio' className='form-control' placeholder='Ingrese su Domicilio' value={datosBasicos.domicilio} onChange={handleOnChange} required/>
                        <label htmlFor ='domicilio'>Domicilio</label>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-floating'>
                        <select name='estado-civil' id='estado-civil' className='form-select' aria-label='seleccion su estado civil ' onChange={handleOnChange} required>
                            <option value='Soltero'>Soltero</option>
                            <option value='Casado'>Casado</option>
                            <option value='Divorciado'>Divorciado</option>
                            <option value='Viudo'>Viudo</option>
                        </select>
                        <label htmlFor='sexo'>Estado Civil</label>
                    </div>
                </div>
            </div>

            {/* Profesion y Lugar de trabajo */}
            
            <div className='row mb-2'>
                <div className='col-6'>
                    <div className='form-floating'>
                        <input type='text' name='profesion' id='profesion' className='form-control' placeholder='Ingrese su profesion ' value={datosBasicos.profesion} onChange={handleOnChange} required/>
                        <label htmlFor ='profesion'>Profesion</label>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-floating '>
                        <input type='text' name='lugar-trabajo' id='lugar-trabajo' className='form-control' placeholder='Indique su lugar de trabajo ' value={datosBasicos.lugarTrabajo} onChange={handleOnChange} required/>
                        <label htmlFor ='lugar-trabajo'>Lugar de trabajo</label>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}
