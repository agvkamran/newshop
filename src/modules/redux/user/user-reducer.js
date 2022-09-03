import { ActionTypes } from "./action-types";

const initialState = {
    user: {
        email: null,
        id: null,
        token: null,
        name: null
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
        case ActionTypes.CHANGE_USER_NAME:
            return {
                ...state,
                user: {
                    email: state.user.email,
                    id: state.user.id,
                    token: state.user.token,
                    name: action.payload
                }
            }
        default: return state;
    }
}

export default userReducer;