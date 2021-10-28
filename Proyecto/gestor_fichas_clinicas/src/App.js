import React from 'react'

import { Navbar } from './components/Navbar'
import { RegistraPaciente } from './pages/RegistraPaciente'



export const App = () => {


  return (
    <div className='container-flush'>
      <Navbar />
      <div >
        <RegistraPaciente />
      </div>
      
    </div>
    
    
  )
}
