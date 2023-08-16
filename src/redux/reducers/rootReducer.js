import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { ProfileReducer } from "./profileReducer";
export const rootReducer = combineReducers({
    prodReducer:productReducer,
    authReducer:authReducer,
    profile: ProfileReducer,
})