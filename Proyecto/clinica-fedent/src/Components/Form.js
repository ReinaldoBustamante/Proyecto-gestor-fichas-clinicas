import React from 'react'

export const Form = () => {
    return (
        <>
            <div className='row mt-5'>
                <div className='col'>
                    <p className='text-center h2'> Ingresa Nuevo Paciente</p>
                </div> 
            </div>




            <div className='row mt-4 '>
                <div className='col'>

                    <form action=''>
                       
                       <div className='row'>

                            <div className='col-6 mb-3'>  
                                <label className='form-check form-check-inline'><span>Indicar Sexo: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-1' className='form-check-input' id='radio-1' />
                                    <label for='radio-1' className='form-check-label' >Hombre</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-1' className='form-check-input' id='radio-2' />
                                    <label for='radio-2' className='form-check-label' >Mujer</label>
                                </div>
                           </div>
                           
                       </div>

                       <div className='row'>

                            <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Nombre</span>
                                    <input className='form-control' type='text' />
                            
                                
                                </div>

                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Rut</span>
                                    <input className='form-control' type='text' />
                            
                                
                                </div>

                           </div>
                           
                       </div>

                       <div className='row'>

                            <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Telefono</span>
                                    <input className='form-control' type='text' />
                                </div>
                                
    
                           </div>
                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Celular</span>
                                    <input className='form-control' type='text' />
                                </div>
                                
    
                           </div>
                           
                       </div>

                       <div className='row'>

                            <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Estado Civil</span>
                                    <select name='pais' id='pais' className='form-select form-select-sm' aria-label='seleccion pais '>
                                        <option value='Mexico'>Soltero</option>
                                        <option value='Mexico'>Viudo</option>
                                        <option value='Mexico'>Casado</option>
                                    </select>
                                </div>
                                
    
                           </div>
                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Edad</span>
                                    <input className='form-control' type='text' />
                                </div>
                                
    
                           </div>
                           
                       </div>

                       <div className='row'>

                            <div className='col-12 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Domicilio</span>
                                    <input className='form-control' type='text' />

                                
                                </div>
                                
    
                           </div>
                           
                           
                       </div>

                        <div className='row'>

                            <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Profesion</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Lugar de trabajo</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>
                           
                           
                           
                       </div>
                        
                        <hr className ='mb-4'/>

                        <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Padre con vida: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-2' className='form-check-input' id='radio-3' />
                                    <label for='radio-3' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-2' className='form-check-input' id='radio-4' />
                                    <label for='radio-4' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Enfermedad que padece o padecio</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>

                       <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Madre con vida: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-3' className='form-check-input' id='radio-45' />
                                    <label for='radio-45' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-3' className='form-check-input' id='radio-52' />
                                    <label for='radio-52' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Enfermedad que padece o padecio</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>

                       <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Sufre de alguna enfermedad: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-4' className='form-check-input' id='radio-455' />
                                    <label for='radio-455' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-4' className='form-check-input' id='radio-522' />
                                    <label for='radio-522' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Cual</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>

                       <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Esta en algun tratamiento medico: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-5' className='form-check-input' id='radio-55' />
                                    <label for='radio-55' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-5' className='form-check-input' id='radio-22' />
                                    <label for='radio-22' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Cual</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>

                        <div className='row'>

                            <div className='col-12 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Medicamentos que consume habitualmente</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                        
            
                       </div>

                       <div className='row'>

                            <div className='col-12 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Medicamentos consumidos ultimos 5 años</span>
                                    <input className='form-control' type='text' />
                                </div>

                                
                           </div>

                        
            
                       </div>
                        
                       <div className='row'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Realiza algun deporte </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-6' className='form-check-input' id='radio-551' />
                                        <label for='radio-551' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-6' className='form-check-input' id='radio-221' />
                                        <label for='radio-221' className='form-check-label' >No</label>
                                    </div>
                               </div>
                               <div className='col-6 mt-1 mb-3' >  
                                    <label className='form-check form-check-inline'><span>Malestar al realizarlo </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-7' className='form-check-input' id='radio-51' />
                                        <label for='radio-51' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-7' className='form-check-input' id='radio-21' />
                                        <label for='radio-21' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                             
                                    
                              
                               
                               
                               
                        </div>
                        
                        <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Alergico a alguna droga o alimento: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-9' className='form-check-input' id='radio-454' />
                                    <label for='radio-454' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-9' className='form-check-input' id='radio-524' />
                                    <label for='radio-524' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Cual</span>
                                    <input className='form-control' type='text' placeholder='anestesia, penisilina, otro.' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>

                       <div className='row'>

                            <div className='col-12 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Cuando le sacan una muela o se lastima, cicatriza bien?</span>
                                    <input className='form-control' type='text' placeholder='no, sangra mucho'  />
                                </div>

                                
                           </div>

                        
            
                       </div>
                       
                       <div className='row'> 
                                
                            <div className='col-12 mt-1 mb-3'>  
                                <label className='form-check form-check-inline'><span>Tiene problema de colageno ( Hiperlaxitud ): </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-10' className='form-check-input' id='radio-44' />
                                    <label for='radio-44' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline '>
                                    <input type='radio' name='radio-10' className='form-check-input' id='radio-54' />
                                    <label for='radio-54' className='form-check-label' >No</label>
                                </div>
                           </div>

                           

                                
                          
                           
                           
                           
                       </div>

                       <div className='row'> 
                                
                            <div className='col-6 mt-1'>  
                                <label className='form-check form-check-inline'><span>Fiebre reumatica: </span></label>
                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-94' className='form-check-input' id='radio-47' />
                                    <label for='radio-47' className='form-check-label' >Si</label>
                                </div>

                                <div className='form-check form-check-inline'>
                                    <input type='radio' name='radio-94' className='form-check-input' id='radio-57' />
                                    <label for='radio-57' className='form-check-label' >No</label>
                                </div>
                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Medicamento con el que se proteje</span>
                                    <input className='form-control' type='text' placeholder='' />
                                </div>

                                
                           </div>

                                
                          
                           
                           
                           
                       </div>
                        
                       <div className='row'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Sufre de diabetes: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-17' className='form-check-input' id='radio-46' />
                                        <label for='radio-46' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-17' className='form-check-input' id='radio-56' />
                                        <label for='radio-56' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Esta controlado?, con que?</span>
                                        <input className='form-control' type='text' placeholder='Si, con ......' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Problema cardiaco: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19' className='form-check-input' id='radio-49' />
                                        <label for='radio-49' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19' className='form-check-input' id='radio-59' />
                                        <label for='radio-59' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Cual</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Toma seguido aspirina y/o autocoagulante: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-178' className='form-check-input' id='radio-468' />
                                        <label for='radio-468' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-178' className='form-check-input' id='radio-568' />
                                        <label for='radio-568' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Con que frecuencia?</span>
                                        <input className='form-control' type='text' placeholder='Si, con ......' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Tiene presion alta: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-177' className='form-check-input' id='radio-467' />
                                        <label for='radio-467' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-177' className='form-check-input' id='radio-567' />
                                        <label for='radio-567' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Esta con tratamiento?, con que?</span>
                                        <input className='form-control' type='text' placeholder='Si, con ......' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Tiene Problemas renales: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1710' className='form-check-input' id='radio-4610' />
                                        <label for='radio-4610' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1710' className='form-check-input' id='radio-5610' />
                                        <label for='radio-5610' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <label className='form-check form-check-inline'><span>Ulcera gastrica: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1711' className='form-check-input' id='radio-4611' />
                                        <label for='radio-4611' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1711' className='form-check-input' id='radio-5611' />
                                        <label for='radio-5611' className='form-check-label' >No</label>
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row '> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Tuvo hepatitis: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1781' className='form-check-input' id='radio-4681' />
                                        <label for='radio-4681' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1781' className='form-check-input' id='radio-5681' />
                                        <label for='radio-5681' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Tipo</span>
                                        <select name='pais' id='pais' className='form-select form-select-sm' aria-label='seleccion pais '>
                                            <option value='Mexico'>A</option>
                                            <option value='Mexico'>B</option>
                                            <option value='Mexico'>C</option>
                                        </select>
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>
                        
                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Problema hepatico: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1970' className='form-check-input' id='radio-4970' />
                                        <label for='radio-4970' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1970' className='form-check-input' id='radio-5970' />
                                        <label for='radio-5970' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group '>  
                                        <span className='input-group-text'>Cual</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-12 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Tuvo convulsiones: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1920' className='form-check-input' id='radio-4920' />
                                        <label for='radio-4920' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1920' className='form-check-input' id='radio-5920' />
                                        <label for='radio-5920' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-2'>  
                                    <label className='form-check form-check-inline'><span>Es epileptico: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1960' className='form-check-input' id='radio-4960' />
                                        <label for='radio-4960' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1960' className='form-check-input' id='radio-5960' />
                                        <label for='radio-5960' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group mb-3'>  
                                        <span className='input-group-text'>Medicacion que toma</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-2'>  
                                    <label className='form-check form-check-inline'><span>Ha tenido sifilis o gonorrea: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19601' className='form-check-input' id='radio-49601' />
                                        <label for='radio-49601' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19601' className='form-check-input' id='radio-59601' />
                                        <label for='radio-59601' className='form-check-label' >No</label>
                                    </div>
                               </div>

                               <div className='col-6 mt-2'>  
                                    <label className='form-check form-check-inline'><span>Otra enfermedad infectocontagiosa: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19602' className='form-check-input' id='radio-49602' />
                                        <label for='radio-49602' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19602' className='form-check-input' id='radio-59602' />
                                        <label for='radio-59602' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                              
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-2'>  
                                    <label className='form-check form-check-inline'><span>Tuvo transfusion: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-196011' className='form-check-input' id='radio-496011' />
                                        <label for='radio-496011' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-196011' className='form-check-input' id='radio-596011' />
                                        <label for='radio-596011' className='form-check-label' >No</label>
                                    </div>
                               </div>

                               <div className='col-6 mt-2'>  
                                    <label className='form-check form-check-inline'><span>Ha sido operado: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-196022' className='form-check-input' id='radio-496022' />
                                        <label for='radio-496022' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-196022' className='form-check-input' id='radio-596022' />
                                        <label for='radio-596022' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                              
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row'>

                            <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Fue operado de</span>
                                    <input className='form-control' type='text' />
                            
                                
                                </div>

                           </div>

                           <div className='col-6 '>  
                                
                                <div className='form-check input-group input-group mb-3'>  
                                    <span className='input-group-text'>Cuando</span>
                                    <input className='form-control' type='text' />
                            
                                
                                </div>

                           </div>
                           
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Problema respiratorio: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19705' className='form-check-input' id='radio-49705' />
                                        <label for='radio-49705' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19705' className='form-check-input' id='radio-59705' />
                                        <label for='radio-59705' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group '>  
                                        <span className='input-group-text'>Cual</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Fuma: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-197051' className='form-check-input' id='radio-497051' />
                                        <label for='radio-497051' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-197051' className='form-check-input' id='radio-597051' />
                                        <label for='radio-597051' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group '>  
                                        <span className='input-group-text'>Cigarrillos Diarios</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-6 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Esta embarazada: </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1970511' className='form-check-input' id='radio-4970511' />
                                        <label for='radio-4970511' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-1970511' className='form-check-input' id='radio-5970511' />
                                        <label for='radio-5970511' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               <div className='col-6 '>  
                                    
                                    <div className='form-check input-group input-group '>  
                                        <span className='input-group-text'>De cuantos meses</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                
                                <div className='col-12 mt-1'>  
                                    <label className='form-check form-check-inline'><span>Enfermedad o recomendacion de su medico que quiera dejar constancia </span></label>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19705111' className='form-check-input' id='radio-49705111' />
                                        <label for='radio-49705111' className='form-check-label' >Si</label>
                                    </div>
    
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' name='radio-19705111' className='form-check-input' id='radio-59705111' />
                                        <label for='radio-59705111' className='form-check-label' >No</label>
                                    </div>
                               </div>
    
                               
    
                                    
                              
                               
                               
                               
                       </div>

                       <div className='row mb-3'> 
                                

                               <div className='col-12 '>  
                                    
                                    <div className='form-check input-group input-group '>  
                                        <span className='input-group-text'>Cual</span>
                                        <input className='form-control' type='text' placeholder='' />
                                    </div>
    
                                    
                               </div>
    
                                    
                              
                               
                               
                               
                       </div>
                    </form>


                </div> 
            </div>




            <div className='row mt-4 mb-5 '>
                <div className='col'>
                    <div className=' d-grid '>
                        <button type = 'button' className='btn btn-primary  btn-lg'> 
                            Añadir
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
