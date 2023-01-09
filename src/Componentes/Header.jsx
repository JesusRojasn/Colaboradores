import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = ({ setValorDeLaCaja }) => {

    return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand >Buscador Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll >
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Busca un colaborador"
                className="me-2"
                aria-label="Search"

                onChange={(e) => setValorDeLaCaja(e.target.value)}
                />
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header