import * as api from "../API/index"
import {AppDispatch} from "../index"

export type MAction =
	{ type: "FETCH_ALL", payload: [] }
	| { type: "CREATE", payload: [] }


// Action Creators is a function return an action, an action is just an object that has the type and payload , this is the way use thunk
export const getPosts = () => async (dispatch: AppDispatch) => {
	try {
		const {data} = await api.fetchPosts()
		dispatch({type: "FETCH_ALL", payload: data})
	} catch (error) {
		console.log((error as Error).message)
	}
}