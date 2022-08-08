const Botones = ({onClickAnteriorPaginacion,onClickSiguientePaginacion,isHabilitado}) => {
    return ( 
    
        <div className='btn-container'>
            <div className='p-1'>
                <button className='btn btn-primary btn-format'  onClick={onClickAnteriorPaginacion}  >Anterior</button>
            </div>
            <div className='p-1'>
                <button className='btn btn-primary btn-format' onClick={onClickSiguientePaginacion}  disabled = {isHabilitado}>Siguiente</button>
            </div>
        </div>
    
    );
}
 
export default Botones;