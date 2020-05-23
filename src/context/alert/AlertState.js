import React, {useReducer} from 'react';

import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { 
    CREATE_MARKER,
    UPDATE_MARKER,
    CHANGE_MARKER_CIRCLE
} from '../../types';

//Solo momentaneamente este valor vendra de la base de datos
let identificator = 1;

const AlertState = props => {
    
    //Inicializacion de variables
    const initialState = {
        marker: null,
        isBeingDragged: false,
        showCircle: false,
        alerts: []
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //Funciones
    const AddMarker = (lat, long) => {
        const marker = {
            id: identificator++,
            position: [lat, long]
        };
        dispatch({
            type: CREATE_MARKER,
            payload: marker
        });
    };

    const UpdateMarker = ( updatedMarker ) => {

        dispatch({
            type: UPDATE_MARKER,
            payload: updatedMarker
        });
    }

    const ChangeMarkerCircle = () => {
        dispatch({
            type: CHANGE_MARKER_CIRCLE
        });
    }

    return(
        <AlertContext.Provider
            value={{
                //Varianles
                marker: state.marker,
                isBeingDragged : state.isBeingDragged,
                showCircle : state.showCircle,
                alerts: state.alerts,
                //Funciones
                AddMarker,
                UpdateMarker,
                ChangeMarkerCircle
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;