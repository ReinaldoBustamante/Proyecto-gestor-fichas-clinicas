import React from 'react'

import { Footer } from '../Components/Footer'
import { Form } from '../Components/Form'
import { Navbar } from '../Components/Navbar'

export const NuevaFicha = () => {
    return (
        <>

         <Navbar />
      
        <div className='container bg-light'>
             <div className='row'>
                 <div className='col'>
                     <Form />
                 </div>
             </div>
         </div>
            <Footer />
        </>
    )
}
