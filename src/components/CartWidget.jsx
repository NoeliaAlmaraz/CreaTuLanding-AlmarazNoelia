

import React from 'react'

import './CartWidget.css'

function CartWidget( onClose) {



  return ( 
    <aside className='cart'>


      <h2>Carrito de la Compra</h2>
      <p>Tu carrito está vacío.</p>
      
    </aside>
  )

}
export default CartWidget;