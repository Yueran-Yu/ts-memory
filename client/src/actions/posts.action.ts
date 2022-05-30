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

// dispatch comes from redux-thunk
export const createPost = (post: PostType) => async (dispatch: AppDispatch) => {
	try {
		// make a post request to our backend server
		const {data} = await api.createPost(post)
		dispatch({type: "CREATE", payload: data})
	} catch (error) {
		console.log((error as Error).message)
	}
}