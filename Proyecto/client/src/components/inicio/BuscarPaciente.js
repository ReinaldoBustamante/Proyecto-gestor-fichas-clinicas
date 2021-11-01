import React from 'react'

export const BuscarPaciente = () => {
    return (
        <div className='container'>

            <div className='row mt-4'>
                <div className='col'>
                <div className="card shadow">
                        <div class="card-header">Buscar Paciente</div>
                        <div className="card-body d-grid">
                        <form>
                            <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Rut Paciente:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="Ingrese su rut" />
                                </div>
                            </div>
                            <div className='row m-1'>
                                <button type='submit' className='btn btn-primary'>Buscar</button>
                            </div>
                        </form>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
