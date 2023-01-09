import React from 'react'


const ListaColaboradores = ({ LstColaboradores, valorDeLaCaja  }) => {

    return (
    <div>
        <h2>Lista de Colaboradores</h2>
        <ul> 
            {LstColaboradores.filter((e) => e.nombre.toLowerCase().includes(valorDeLaCaja.toLowerCase())).
            map( (c) => <li key={c.id}>{c.nombre} - {c.correo}</li>)}
        </ul>
    </div>
  )
}

export default ListaColaboradores