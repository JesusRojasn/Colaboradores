import React, { useState } from 'react'

const ListaTareas = () => {
    const [tarea, setTarea] = useState('');
    const [lstTareas, setLstTareas] = useState(["Tarea 1", "Tarea 2", "Tarea 3",]);

    const agregarTarea = (e) => {
        e.preventDefault();
        const nuevoArreglo = [...lstTareas, tarea];
        setLstTareas(nuevoArreglo);
    }

  return (
    <div>
        <form onSubmit={agregarTarea}>
            <input type="text" id="nombreTarea" name="nombreTarea" onChange={(e) => setTarea(e.target.value)} />
            <button>
                Agregar Tarea
            </button>
        </form>
        <ul>
            {lstTareas.map( t => <li key={t}>{t}</li>)}
        </ul>
    </div>
  )
}

export default ListaTareas