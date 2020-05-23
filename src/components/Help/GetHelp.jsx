import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Form, FormControl } from 'react-bootstrap';
//import axios from 'axios';
import FacebookLogin from 'react-facebook-login'
import { v4 as uuidv4 } from 'uuid';
//import './Help.css'
require('dotenv').config();

//const Api = process.env.API_URL;
const apiFB = "989551551459545";

//console.log(`${Api}/api/Alert`)

const GetHelp = (props) => {
	

	const [getHelp, setgetHelp] = useState({
		names: '',
		documentID : '',
		direction: '',
		city: '',
		province: ''
	});

	const [facebookLogin, setfacebookLogin] = useState({
		name: "",
		email: "",
		id: "",
		accessToken: "",
		userID: ""
	});
	
	//Recive Response of Facebook
	const responseFacebook = async response => {
		//Send Response to API
		
		const {name, email, id, accessToken, userID} = await response;
		//save datas of Login Facebook
		await setfacebookLogin ({
			...facebookLogin,
			name,
			email, 
			id, 
			accessToken, 
			userID
		});
			//Send this datas to backend
	 	//const fbDatas = facebookLogin;

	 	//We push to Description, with ID of Facebook
	 	props.history.push(`/solicitarayuda/descripcion/${id}`)
	 	

	}

	const getFields = e => {
		e.preventDefault();
	//Save On State
		setgetHelp({
			...getHelp,
			[e.target.name]: e.target.value
		})
	}
	
//This Function Evit Send the Form without Datas or nothing
	const validForm = () => {
		//Destructuring of State
		const { names, documentID, direction, city, province } = getHelp;
	/*Verify if ona field is = ''
		Use .trim() for evit send with spaces
	*/
		let noValid = !names.trim() || !documentID.trim() || !direction.trim() || !city.trim() || !province.trim();

		if( names.trim() === "" || documentID.trim() === "" || direction.trim() === "" || city.trim() === "" || province.trim() === "" ){
			return noValid;
		}
	}

	const sendDatas = async e => {
		e.preventDefault();

		const { names, documentID, direction, city, province } = getHelp;
		//UUID Used for create id's for test
		let idUser = uuidv4();
		const datas = {
			idUser,
			names, 
			documentID, 
			direction, 
			city, 
			province
		};
		/*
		try {
			
			const Response = await axios.get("http://dbunidos.azurewebsites.net/api/Alert").then(
				console.log(Response)
			)

		} catch(e) {
			
			console.log(e);
		}
		*/

		//Send Datas or Save on LS to Wait Second Session

		console.log(datas)
		props.history.push(`/solicitarayuda/descripcion/${idUser}`);
	}

	return (
		<Container className="bg-light pb-3 mb-4 h-50 w-75">
			<h1 className="text-center">UNIDOS</h1>
			<div className="row justify-content-center">
				<Form className="col-md-8 m-3">
					<Form.Group>
						<Form.Label>Nombre/s y Apellido/s:</Form.Label>
						<FormControl
							autoFocus
							size="sm"
							type="text" 
							placeholder="Ingrese su Nombre/s y Apellido/s" 
							name="names"
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Documento de Identidad:</Form.Label>
						<FormControl 
							size="sm"
							type="text" 
							placeholder="Escriba su Documento de Identidad" 
							name="documentID"
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Direccion:</Form.Label>
						<FormControl 
							size="sm"
							type="text" 
							placeholder="Ingrese su Direccion" 
							name="direction"
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Cuidad:</Form.Label>
						<FormControl 
							size="sm"
							type="text" 
							placeholder="Ingrese su Ciudad" 
							name="city"
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Provincia:</Form.Label>
						<FormControl 
							size="sm"
							type="text" 
							placeholder="Ingrese su Provincia" 
							name="province"
							onChange={getFields}
						/>
					</Form.Group>
					<Form.Control
						type="submit"
						value="Siguiente"
						disabled={validForm()}
						onClick={sendDatas}
						className="btn btn-success"
					/>
					<div className="mt-4 btn btn-block">
					<FacebookLogin
						appId={apiFB} //APP ID NOT CREATED YET
						fields="name,email,picture"
						callback={responseFacebook}
					/>
				</div>
				</Form>
			</div>
		</Container>
	)
}

export default withRouter(GetHelp)