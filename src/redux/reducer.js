import { combineReducers } from "redux"
import { servicesReducer } from "./services/reducer"
import { announcementReducer } from "./services/reducer"
export const rootReducer = combineReducers({
    servicesReducer,
    announcementReducer,
})