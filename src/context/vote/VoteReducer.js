import { 
    ADD_VOTE
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_VOTE:
            return{
                contVote: state.contVote+4
            };
        default:
            return state;
    }
}