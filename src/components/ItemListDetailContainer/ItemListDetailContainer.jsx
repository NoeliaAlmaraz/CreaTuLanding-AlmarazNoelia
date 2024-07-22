import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';


function ItemListDetailContainer({item}) {
  return (
    <section className='item-list-container'> 
        {

            item.length === 0 ?
            <h2>cargando...</h2>
            :
            <div>
               <ItemDetail item={item}/>
            </div>

        }
    </section>
  );
}

export default ItemListDetailContainer;