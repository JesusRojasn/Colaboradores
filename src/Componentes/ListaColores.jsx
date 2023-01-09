import React, { useState } from 'react';

const ListaColores = () => {
    const [colores, setColores] = useState(['red', 'yellow', 'blue', 'green']);
    const [color, setColor] = useState('');

    const agregarColor = (e) => {
      e.preventDefault();
      setColores([...colores, color]);
    }
  
    return (
    <div>
      <form onSubmit={agregarColor}>
            <input type="text" id="nombreColor" name="nombreColor" onChange={(e) => setColor(e.target.value)} />
            <button>
                Agregar Tarea
            </button>
        </form>
        <ul>
        {colores.map( (item) => <li key={item} style={{backgroundColor:item}}>{item}</li>)}
        </ul>
    </div>
  )
}

export default ListaColores