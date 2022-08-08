
import { useEffect , useState} from 'react';
import { Link } from "react-router-dom";

const Cards = ({heroe}) => {
  
    return ( 
        <>
            <img className="card-img-top" src={heroe.thumbnail.path+'.'+heroe.thumbnail.extension} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{heroe.name}</h5>
                <p className="card-text">{heroe.description}</p>
                <Link to ={`/heroe/${heroe.id}`}>Ver mas</Link>
            </div>
        </>
     );
}
 
export default Cards;