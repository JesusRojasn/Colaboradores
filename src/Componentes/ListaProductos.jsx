import React from 'react'

const ListaProductos = () => {
    
    const ListaProductos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];


    return (
    <div>
        <ul>
            {ListaProductos.map( (item) => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default ListaProductos