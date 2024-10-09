import React from 'react'
import { Producto } from './Producto'
export const ListaSuper = ({productos}) => {
  return (
    //TODO: cargar y mostarr la lista del super
    <div>
        <h1>Lista del Super</h1>
        {productos.map((item, index) => {
            return <Producto nombre={item.nombre} precio={item.precio}/>
        })}
    </div>
  )
}
