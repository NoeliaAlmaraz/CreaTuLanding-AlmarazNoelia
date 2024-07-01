import React from 'react'
import './ItemListContainer.css'

function ItemListContainer(props) {
  return ( 
    <div>
      <h2>{props.message}</h2>
      <button>Add Item</button>
      <button>Remove Item</button>
    </div>
  )
}

export default ItemListContainer;