import { combineReducers } from "redux"
import { servicesReducer, announcementReducer, profilesReducer } from "./services/reducer"

export const rootReducer = combineReducers({
    servicesReducer,
    announcementReducer,
    profilesReducer,
})