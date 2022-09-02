import { ActionTypes } from "./action-types"

export const setUserAC = (payload) => {
    return {
        type: ActionTypes.SET_USER,
        payload: payload
    }
}

export const removeUserAC = () => {
    return {
        type: ActionTypes.REMOVE_USER
    }
}