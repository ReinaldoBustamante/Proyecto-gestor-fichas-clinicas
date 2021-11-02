import React from 'react'

export const Formulario = (props) => {
    const { setusername,  setpassword} = props
    const handleOnChange = (e) =>{
        if (e.target.name === 'username'){
            setusername(e.target.value)
        }
        if (e.target.name === 'password'){
            setpassword(e.target.value)
        }
    }

    return (
        <div className='container mt-5'>
            <div className="card  mb-3 width shadow">
                <div className="card-header">Login</div>
                <div className="card-body">
                <div className='row'>
                    <div className='col'>
                        <label htmlFor=''>Usuario</label>
                        <input type='text' className='form-control' name='username' onChange = {handleOnChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor=''>Password</label>
                        <input type='text' className='form-control' name='password' onChange = {handleOnChange} />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col d-grid'>
                        <button type='submit' className='btn btn-primary'>Iniciar Sesion</button>
                    </div>
                </div>
                </div>
            </div>
                
            
            
            
        </div>
    )
}
