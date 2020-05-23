import React from 'react'
import { Navbar, Nav, Form, Button, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="#b8eab5" variant="light" >
		  <Link to="/"><Navbar.Brand >UNIDOS</Navbar.Brand></Link>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm"/>
		      <Button variant="outline-success" size="sm mr-lg-2">Search</Button>
		    </Form>
		    <Nav className="mr-auto">
	        	<Link to="/solicitarayuda" className="nav-item">Solicitar Ayuda</Link>
	        	<Link to="/ayudar" className="nav-item">Dar Ayuda</Link>
		      <Link to="#pricing" className="mr-lg-2 nav-item">Nosotros</Link>
		      <Link to="#features" className="nav-item"><Image style={{with: 20, height:20}} className="pb-2" src="/img/Compartir.png" alt="" /></Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

export default Header