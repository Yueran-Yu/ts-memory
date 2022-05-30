import React from 'react'
import Post from "./Post/Post"
import {useSelector} from "react-redux"
// import useStyles from "../../styles"
import {RootState} from "../../index"


const Posts = () => {
	// const classes = useStyles()
	const posts = useSelector((state: RootState) => state.posts)
	console.log(posts)
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
