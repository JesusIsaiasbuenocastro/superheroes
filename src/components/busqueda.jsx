const Busqueda = ({obtenerHeoresBusqueda,obtenerHeroesNombre,busquedaHeroe}) => {
    
    return ( 
        <form className="m-4">
          <div className="form-group">
                <label  className="lbl-div-busqueda" htmlFor="txtnombre">Búsqueda:</label>
                <input  
                    type="text" 
                    id="txtnombre" 
                    name="nombre"
                    className="form-control txt-busqueda" 
                    placeholder="Escribe el nombre"
                    onChange={obtenerHeoresBusqueda}
                    onKeyDown={obtenerHeroesNombre}
                     ></input>
            </div>
      
      </form>
     );
}

export default Busqueda;