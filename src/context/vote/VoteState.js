import React, {useReducer} from 'react';

import VoteContext from './VoteContext';
import VoteReducer from './VoteReducer';
import { 
    ADD_VOTE
} from '../../types';

const VoteState = props => {
    
    //Inicializacion de variables
    const initialState = {
        voteId: 1,
        markerId: null,
        contVote: 8
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(VoteReducer, initialState);

    //Funciones
    const AddVote = () => {
        dispatch({
            type: ADD_VOTE
        });
    }

    return(
        <VoteContext.Provider
            value={{
                //Varianles
                contVote: state.contVote,
                //Funciones
                AddVote
                
            }}
        >
            {props.children}
        </VoteContext.Provider>
    );
}

export default VoteState;