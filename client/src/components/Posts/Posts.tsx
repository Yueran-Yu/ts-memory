import React from 'react'
import Post from "./Post/Post"
import {useSelector} from "react-redux"
import useStyles from "../../styles"
import {RootState} from "../../reducers/rootReducer"

const Posts = () => {
	const classes = useStyles()
	const posts = useSelector((state:RootState) => state.posts)
	return (
		<>
			<h1>Posts</h1>
			<Post/>
			<Post/>
			<Post/>
		</>
	)
}

export default Posts
