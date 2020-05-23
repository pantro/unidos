import { 
    CREATE_MARKER,
    UPDATE_MARKER,
    CHANGE_MARKER_CIRCLE
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CREATE_MARKER:
            return{
                ...state,
                marker: action.payload,
                isBeingDragged: true
            };
        case UPDATE_MARKER:
            return{
                ...state,
                marker: action.payload
            };
        case CHANGE_MARKER_CIRCLE:
            return{
                ...state,
                isBeingDragged: false,
                showCircle: true,
                alerts: [...state.alerts, state.marker]
            };
        default:
            return state;
    }
}