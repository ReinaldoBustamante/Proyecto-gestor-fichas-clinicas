import React from 'react'
import { BuscaFicha } from '../Components/BuscaFicha'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'


export const Inicio = () => {
    return (
        <>
         <Navbar />

            <div className='container bg-light'>
                <div className='row'>
                    <div className='col '>
                        <BuscaFicha />
                    </div>
                </div>
            </div>
            <Footer />
         
         
         </>
    )
}
