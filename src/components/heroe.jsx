import {useState, useEffect} from 'react';
import {  useParams,useNavigate   } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';

const Heroe = () => {
    const [isCargando, setIsCargando] = useState(false);
    const [superHeroe, setSuperHeroe] = useState([]);
    const [imagen, setImagen] = useState('');
    let params = useParams();
    let navigate = useNavigate();
    
    useEffect(()=> {
        const obtenerHeroe = async () => {
            
            try {
                
                console.log(params.heroeId);

                let url = `https://gateway.marvel.com:443/v1/public/characters/${params.heroeId}?ts=1653004613&apikey=5692174247ed387c8fb8b4b91816b1a5&hash=c92601c0ce3ab27cfc56d402b0e79f3f`
                
                console.log(url);
                
                const { data } = await axios(url)
    
                setSuperHeroe(data.data.results[0])
                setImagen(data.data.results[0].thumbnail.path+'.'+data.data.results[0].thumbnail.extension)
                setIsCargando(false);
            } catch (error) {
                console.log(error)
            }
        }
        setIsCargando(true);
        setTimeout(() => {
         
          obtenerHeroe();  
          
        }, 2000);
        
    },[])

    const onclickRegresar = (e) => {
        e.preventDefault();
        navigate("/", { replace: true });
    }

    return (  
        <div className='Spinner'>
             {  isCargando ? 
             <div className='div-margin-top'><Spinner/></div>
               :
               <>
               <div className='fadeIn'>
               <div className='align-right'>
               <button className='btn btn-outline-danger' onClick={onclickRegresar}> Regresar</button>
          </div>
        
          <div className='div-panel'>
                <div className='row'>
                    <div className='div-text-center'>
                        <h1>{superHeroe.name}</h1>    
                    </div>
                </div>
              <div className='row'> 
                  <div className='col'>
                      <img className="img-size" src={imagen}  alt={superHeroe.name} />
                  </div>
                  <div className='col'>
                  <p>
                      {superHeroe.description === '' ? 'No hay descripción' : superHeroe.description} 
                  </p>
                  </div>
              </div>
          </div>
          </div>
          </>
         
        }
         </div>
     );
}
 
export default Heroe;