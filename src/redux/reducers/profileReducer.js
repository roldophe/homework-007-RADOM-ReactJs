import { actionTypes } from "../actions/actionTypes"

const initialState = {
    profile: {},
    isLoading:true
}
export const ProfileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionTypes.FETCH_PROFILE:
            return { ...state, profile: payload , isLoading:false }
        default:
            return state
    }
}