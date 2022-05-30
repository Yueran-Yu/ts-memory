import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {configureStore} from '@reduxjs/toolkit'
import thunk, {ThunkDispatch} from "redux-thunk"
import App from "./App"
import {AnyAction} from "redux"
import {rootReducer} from "./reducers/rootReducer"


const store = configureStore({reducer: rootReducer, middleware: [thunk]})
export type State = typeof store
export type AppDispatch = ThunkDispatch<State, any, AnyAction>
export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root') as HTMLElement)



