import { actionTypes } from "../actions/actionTypes"
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionTypes.FETCH_PRODUCTS:
            //statement
            return { ...state, products: payload }
        default:
            return state
    }
}
