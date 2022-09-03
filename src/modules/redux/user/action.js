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

export const changeUserNameAC = (payload) => {
    return {
        type: ActionTypes.CHANGE_USER_NAME,
        payload: payload
    }
}