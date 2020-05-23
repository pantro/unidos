import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const GetHelpDescription = () => {
	
	const [Description, setDescription] = useState({
		phone: '',
		gravity: '',
		description: ''
	});
	
	const getFields = (e) => {
		setDescription({
			...Description
		})
	}

	return (
		<Container>
			<h1 className="text-center">UNIDOS</h1>
			<p className="text-center">Describenos tu situacion</p>
			<div className="row justify-content-center">
				<Form className="col-md-8 m-3">
					<Form.Group>
						<Form.Label>Ingresa tu Numero Telefonico</Form.Label>
						<Form.Control 
							type="phone" 
							placeholder="Numero Telefonico" 
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label> Descripcion </Form.Label>
						<Form.Control 
							as="textarea" 
							rows="2" 
							onChange={getFields}
						/>
					</Form.Group>
				</Form>				
			</div>
		</Container>
	)
}

export default GetHelpDescription