import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const Formulario = ({LstColaboradores, setLstColaboradores}) => {
  
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {
        e.preventDefault();

        setLstColaboradores([...LstColaboradores,{ nombre: nombre, correo: email}]);
    }
  
    return (
    <div className="p-2">
    <Form onSubmit={agregarColaborador}>
           
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Colaborador</Form.Label>
        <Form.Control type="text" placeholder="Ingresa nombre del colaborador"
            onChange={(e) => setNombre(e.target.value)}/>   
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Colaborador</Form.Label>
        <Form.Control type="email" placeholder='Email Colaborador' 
                onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
        <Button variant="primary" type="submit">
        Agregar Colaborador
        </Button>
    </Form>
    </div>
  )
}

export default Formulario