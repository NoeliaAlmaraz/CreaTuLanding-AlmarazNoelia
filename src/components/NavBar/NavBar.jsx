

import React,{useState} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from "react-router-dom";


/* actualiza el estado de la visualizacion del carrito*/ 

const toggleCartVisibility = (isCartVisible, setIsCartVisible) => {
    setIsCartVisible(!isCartVisible);
  };


function NavBar() {


    /* hook  que cambia el estado del carrito y manda parametro a toggle*/ 
    const [isCartVisible, setIsCartVisible] = useState(false);
    

    /* esta funcion llama a toggle pasando ya el parametro  para actualizarlo*/ 
    const handleToggleCartVisibility = () => {
        toggleCartVisibility(isCartVisible, setIsCartVisible);
    };

  return ( 
    <header>
        <div>
            <Link to="/">
                <img src="../src/assets/LOGO.png" alt="logo" />
            </Link>

            
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>  
                </li>
                <li>
                    <Link to="/Producto">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/Contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
        <div className={`cart-container ${isCartVisible ? 'no-scroll' : ''}`}>
            <button className='cart-button' onClick={handleToggleCartVisibility}>

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                </svg>
            </button>
            {isCartVisible && <CartWidget onClose={handleToggleCartVisibility} />}
            {isCartVisible && <div className="backdrop" onClick={handleToggleCartVisibility}></div>}
        </div>

    </header>
  )
}


export default NavBar;