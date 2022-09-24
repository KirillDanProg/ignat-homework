import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import { legacy_createStore as createStore} from 'redux'

const RootReducer = combineReducers({
    main: mainReducer
})

export type RootType = ReturnType<typeof store.getState>

export const store = createStore(RootReducer)
