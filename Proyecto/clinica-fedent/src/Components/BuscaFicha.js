import React from 'react'
import logo from '../images/logo-cdf.png'
import '../css/index.css'
export const BuscaFicha = () => {
    //console.log(logo)
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col'>
                    <p className='text-center h2'> Bienvenido Usuario</p>
                </div>
            </div>

            <div className='row mt-3 '>
                <div className='col text-center'>
                    <img src={logo} alt="Logo" className='image-p img-responsive '/>
                </div>
            </div>

            <div className='row mt-4 '>
                <div className='col-md-4 mt-2'>
                    <p className='text-md-end '> Rut Paciente: </p>
                </div>
                <div className='col-md-4'>
                    <input className="form-control mr-sm-2" type="search" placeholder="XX.XXX.XXX-X" aria-label="Search" />
                </div>
                    
            </div>
            <div className='row mt-4 mb-5 '>
                <div className='col'>
                    <div className=' d-grid '>
                        <button type = 'button' className='btn btn-primary '> 
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
