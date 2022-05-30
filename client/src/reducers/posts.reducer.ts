import {MAction} from "../actions/posts.action"

type InitialState = PostType[]
export const postsReducer = (state: InitialState = [], action: MAction) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload
		case "CREATE":
			return [...state, action.payload]
		default:
			return state
	}
}