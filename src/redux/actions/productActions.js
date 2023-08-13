import { base_URL } from "../../utils/constant"
import { actionTypes } from "./actionTypes"

/* access api */
export const fetchAllProducts = () =>{
    return(dispatch)=>{
        fetch(`${base_URL}products?limit=20&offset=0`)
        .then(res=>res.json())
        .then(resp=>dispatch({
            type:actionTypes.FETCH_PRODUCTS,
            payload:resp
        }))
        .catch(er=>console.log('fetch product error: ', er))
    }
}
export const fetchAllCategories= ()=>{
    return (dispatch) =>{
        fetch(`${base_URL}categories?limit=5`)
        .then(res=>res.json())
        .then(resp=>dispatch({
            type:actionTypes.FETCH_CATEGORIES,
            payload:resp
        }))
    }
}