import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header.jsx";
import MyMap from "./map/MyMap";
import Help from './Help/Help.jsx';
import GetHelp from './Help/GetHelp.jsx';
import GetHelpDescription from './Help/GetHelpDescription.jsx';
import AlertState from "../context/alert/AlertState";
import ModalState from "../context/modal/ModalState";

export class Routes extends React.Component {
	render() {
		return (
			<AlertState>
				<ModalState>
					<Router>
						<>
							<Header/>
							<Switch>
								<Route
									exact path="/" render={ () => <MyMap/>}
								/>
								<Route
									exact path="/ayudar" render={ () => <Help/>}
								/>
								<Route
									exact path="/solicitarayuda" render={ () => <GetHelp/>}
								/>
								<Route
									exact path="/solicitarayuda/descripcion/:id" render={ () => <GetHelpDescription/>}
								/>
							</Switch>
						</>
					</Router>
				</ModalState>
			</AlertState>
		)
	}
}

export default Routes