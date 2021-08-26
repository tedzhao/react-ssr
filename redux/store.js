import { createStore } from "redux"
import { countReducer } from "./reducer"

export default ( initialState ) => createStore( countReducer, initialState )