import { INSERT_USER } from "../actions/actionType";


const initialState = {
    users: []
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_USER:
            return {
                ...state, users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export default reducers;