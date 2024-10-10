import React from 'react'

export const Producto = ({nombre,precio}) => {
  return (
    <div>
        
        <h5>{nombre}</h5>
        <h5>Precio: ${precio}</h5>
    </div>
  )
}
