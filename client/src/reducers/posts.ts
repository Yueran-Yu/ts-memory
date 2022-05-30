import {MAction} from "../actions/posts.action"

export const posts = (state = [], action: MAction) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload
		case "CREATE":
			return state
		default:
			return state
	}
}