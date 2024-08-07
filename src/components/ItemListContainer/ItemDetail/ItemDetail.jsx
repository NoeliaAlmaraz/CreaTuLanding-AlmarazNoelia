import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../Context/Context.jsx';
import { useState } from 'react';




function ItemDetail({item}) {
  

  const {id} = useParams();
  const {addToCartDetail} = useAppContext();
  
    const itemIndex = item[id];

    const [quantity, setQuantity] = useState(itemIndex.quantity || 1); 
    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value) || 1); 
    };
  
    const handleAddToCart = () => {
      addToCartDetail(id, quantity);
    };

      

      const title = String(itemIndex.title || ''); 
      const authorName = String(itemIndex.author_name || '');
      const cover = String(itemIndex.cover_i || '');
      const price = itemIndex.want_to_read_count;
      const index = itemIndex.id;

    



        return (
          <article key={itemIndex.index} className='card-item'>
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={`Cover of ${title}`}></img>
            <h2>{title}</h2>
            <p >{authorName}</p>
            <p>{price/10}$</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
            <button className='btn' onClick={handleAddToCart}>Añadir al carrito</button>
        </article>
          
        )
}

export default ItemDetail;