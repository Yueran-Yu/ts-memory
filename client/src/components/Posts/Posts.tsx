import React from 'react';
import { Post } from "./Post/Post";
import {Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import useStyles from "./posts.styles";
import {RootState} from "../../index";


const Posts = () => {
	// const classes = useStyles()
	const posts = useSelector((state: RootState) => state.posts)  as PostType[];
	const classes = useStyles();

	console.log(posts)
	return (
		!posts.length ? <CircularProgress /> :
		(<Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
			 {posts.map(post=> (
				<Grid key={post.id} item xs={12} sm={6}>
				<Post post={post}/>

				</Grid>
			 ))}

		</Grid>)

	)
}

export default Posts
