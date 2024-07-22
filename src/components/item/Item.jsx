import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({title, author_name,cover,index,price}) => {
  return ( 
    <article key={index} className='card-item'>
        <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={`Cover of ${title}`}></img>
        <h2>{title}</h2>
        <p >{author_name}</p>
        <p>{price/10}$</p>
        <button className='btn'>Añadir al carrito</button>
        <Link to={`/DetalleProducto/${index}`} >
            <button className='btn'>Ver detalle</button>
        </Link>
    </article>
  )
}


export default Item 
