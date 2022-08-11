
import { useEffect , useState} from 'react';
import axios from 'axios'
import '../App.css';
import Cards from '../components/cards';
import Spinner from '../components/spinner';


import Busqueda from '../components/busqueda';
import Botones from '../components/botones';
import Mensajes from '../components/mensajes';

const Heroes = () => {

    const [superHeroes, setSuperHeroes] = useState([]);
    const [paginacion, setPaginacion] = useState(0);
    const [ultimaPaginacion, setUltimaPaginacion] = useState(0);
    const [busquedaHeroe, setBusquedaHeroe] = useState('');
    const [isCargando, setIsCargando] = useState(false);
    const [isHabilitado, setIsHabilitado] = useState(true);

  
      useEffect(() => {
          const obtenerHeroes = async () => {
            
            try {

              
              let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1653004613&apikey=5692174247ed387c8fb8b4b91816b1a5&hash=c92601c0ce3ab27cfc56d402b0e79f3f&limit=50&offset=${localStorage.getItem('numPaginacion') ? localStorage.getItem('numPaginacion') : paginacion}`
               
                if(localStorage.getItem('nombreHeroe') ){
                  
                  url =   localStorage.getItem('nombreHeroe') === '' ?  url : `https://gateway.marvel.com:443/v1/public/characters?ts=1653004613&apikey=5692174247ed387c8fb8b4b91816b1a5&hash=c92601c0ce3ab27cfc56d402b0e79f3f&limit=50&offset=${localStorage.getItem('numPaginacion') ? localStorage.getItem('numPaginacion') : paginacion}&nameStartsWith=${localStorage.getItem('nombreHeroe') ? localStorage.getItem('nombreHeroe') : busquedaHeroe.nombre.trim()}`;

                  if(localStorage.getItem('nombreHeroe') === ''){
                    localStorage.clear();
                  }

                }
                const { data } = await axios(url)
  
                setSuperHeroes(data.data.results)
                setUltimaPaginacion(data.data.total)
                setIsCargando(false);
                setIsHabilitado( data.data.count < 50 ? true : false )
            } catch (error) {
                console.log(error)
            }
        }
        setIsCargando(true);
        
        setTimeout(() => {
         
          obtenerHeroes();  
          
        }, 2000);
      }, [paginacion,busquedaHeroe]);
  
     
  
       //funcion para obtener los heroes por nombre
       const obtenerHeoresBusqueda = e => {
        setBusquedaHeroe({
          ...busquedaHeroe,
          [e.target.name] : e.target.value
        });
        localStorage.setItem('nombreHeroe', e.target.value)
        localStorage.setItem('numPaginacion',0)
      }
  
      const obtenerHeroesNombre = (e) => {
        if(e.key ==='Enter'){
          setPaginacion(1== 0 ? 1 : 0);
        }
        setPaginacion(1== 0 ? 1 : 0);
        
      }
  
      const onClickAnteriorPaginacion = () => {
        if(localStorage.getItem ( 'numPaginacion') >1){
          setPaginacion(paginacion-50);
          localStorage.setItem ( 'numPaginacion', paginacion-50);
        }
        
        
      }
      const onClickSiguientePaginacion = () => {
        if(localStorage.getItem ( 'numPaginacion') < ultimaPaginacion ){
          setPaginacion(paginacion+50);
          localStorage.setItem ( 'numPaginacion', paginacion+50);
        }
       
      }
    return (
      <div className="App ">
        
          <div className='form-group'> 
            <Busqueda
              obtenerHeoresBusqueda={obtenerHeoresBusqueda}
              obtenerHeroesNombre={obtenerHeroesNombre}
              busquedaHeroe={busquedaHeroe}
            ></Busqueda>
          </div>
          {
            isCargando ? 
            <Spinner/>
            :
            superHeroes.length> 0 ?   
            <div className='fadeIn'>
              <Botones 
                onClickAnteriorPaginacion={onClickAnteriorPaginacion}
                onClickSiguientePaginacion={onClickSiguientePaginacion}
                isHabilitado={isHabilitado}
              ></Botones> 
            </div>
            : null
          }
  
          {
            isCargando ? 
              null
            :
              <div className='fadeIn'>
                <div className='cards-container'>
                  <div className=' row '>
                    {
                      superHeroes.length> 0 ? 
                      superHeroes.map( heroe => (
                      
                        <div className="card cards-format">
                          <Cards 
                            key={heroe.id}
                            heroe={heroe}
                          />
                        </div>
                        
                    ))
                    : <Mensajes />
                  }</div>
                </div>
              </div>
          }
         {
            isCargando ? 
            null
            :
            superHeroes.length> 0 ?   
            <div className='fadeIn'>
            <Botones 
              onClickAnteriorPaginacion={onClickAnteriorPaginacion}
              onClickSiguientePaginacion={onClickSiguientePaginacion}
              isHabilitado={isHabilitado}
            ></Botones> 
            </div> : null
          }
       </div>
      
    );
}
 
export default Heroes;

