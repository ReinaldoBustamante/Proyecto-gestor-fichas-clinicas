import React from 'react'

export const AñadirFicha = () => {
    return (
        <div className='container mt-5'>
            <h1 className= 'text-center ' >Añadir Ficha </h1>
            <hr/>
            <div className='card bg-info'>
                <form className='m-4'>
                    <h4>Datos Basicos:</h4>
                    <div className='input-group pt-2'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Paciente'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Rut'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Edad'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Estado Civil'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Celular'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Telefono'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Localidad'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Calle'
                        />
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Numero'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Profesion'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Lugar de trabajo'
                        />
                    </div>    
                    <h4 className='pt-2'>Datos Relevantes:</h4>
                    <div className='input-group pt-2'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Esta en algun tratamiento ?'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Cual?'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Alguna Enfermedad ?'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Cual?'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Medicamentos que consume actualmente'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Medicamentos que ha consumido en los ultimos 5 años'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Realiza algun deporte ?'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Algun malestar al realizarlo ?'
                        />
                    </div>
                    <div className='input-group'>
                        <input
                        type='text'
                        className= 'form-control mb-2 mr-2'
                        placeholder='Es alergico a alguna droga o alimento ?'
                        />
                        
                        <input
                        type='text'
                        className= 'form-control mb-2'
                        placeholder='Cual?'
                        />
                    </div>
                    
                </form>
            </div>
           
            
            
            
        </div>
    )
}
