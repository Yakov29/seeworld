import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension"
import { servicesReducer } from "./services/reducer"

const rootReducer = combineReducers({
    servicesReducer,
})

const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)

console.log(store.getState())