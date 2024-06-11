import React from 'react'
import { Link } from 'react-router-dom';
import Cataratasiguazu from './Cataratasiguazu';
import Chichenitzámexico from './Chichenitzámexico';
import Coliseoroma from './Coliseoroma';
import Cristoredentor from './Cristoredentor';
import Estatualibertad from './Estatualibertad';
import Machupicchuperu from './Machupicchuperu';   


  const Navegation = () =>{
    
  return (

    <div className="navigation-container">
        <Link to="/cataratasiguazu" className="links">
            <figure className="image-size">
                <Cataratasiguazu/>
                <figcaption>Cataratas de Iguazú, Argentina</figcaption>
            </figure>
        </Link>
        <Link to="/chichenitzámexico"  className="links">
            <figure className="image-size">
                <Chichenitzámexico/>
                <figcaption>Chichen Itzá, México</figcaption>
            </figure>
        </Link>
        <Link to="/coliseoroma" className="links" >
            <figure className="image-size">
                <Coliseoroma/>
                <figcaption>Coliseo de Roma, Italia</figcaption>
            </figure>
        </Link>
        <Link  to="/cristoredentor" className="links">
            <figure className="image-size">
                <Cristoredentor/>
                <figcaption>El Cristo Redentor, Brasil</figcaption>
            </figure>
        </Link>
        <Link  to="/estatualibertad" className="links">
            <figure className="image-size">
                <Estatualibertad/>
                <figcaption>Estatua de la Libertad, USA</figcaption>
            </figure>
        </Link>
        <Link to="/machupicchuperu" className="links">
            <figure className="image-size">
                <Machupicchuperu/>
                <figcaption>Piramides de Machu Picchu, Perú</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegation
