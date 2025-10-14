import { combineReducers } from "redux"
import { servicesReducer } from "./services/reducer"
export const rootReducer = combineReducers({
    servicesReducer,
})