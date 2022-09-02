import { ActionTypes } from "./action-types";

const initialState = {
    user: {
        email: null,
        id: null,
        token: null
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user:
                {
                    email: action.payload.email,
                    id: action.payload.uid,
                    token: action.payload.accessToken
                }
            }
        case ActionTypes.REMOVE_USER:
            return {
                ...state,
                user:
                {
                    email: null,
                    id: null,
                    token: null
                }
            }
        default: return state
    }
}

export default userReducer;