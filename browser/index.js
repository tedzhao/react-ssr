import React from "react"
import ReactDOM from "react-dom"

import { Provider as ReduxProvider } from "react-redux"
import createStore from "../redux/store"

const defaultState = window.__initial_data || {count: 0};
const store = createStore(defaultState)

import { App } from "../components/App"

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById("app"))