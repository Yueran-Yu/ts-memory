import React, {ChangeEvent, FormEvent, useState} from 'react'
import {TextField, Button, Typography, Paper} from "@material-ui/core"
import useStyles from "./form.styles"
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux"
import {createPost} from "../../actions/posts.action"
import {AppDispatch} from "../../index"

const Form = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [postData, setPostData] = useState<PostType>({
		title: "",
		message: "",
		creator: "",
		tags: [],
		selectedFile: ""
	})
	const classes = useStyles()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(createPost(postData))
	}

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const {value, name} = e.currentTarget
		console.log("name")
		console.log(name)
		if (name === "tags") {
			setPostData({...postData, [name]: value.split(",")})
		} else {
			setPostData({...postData, [name]: value})
		}
	}

	const clear = () => {

	}

	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root}  ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">Post a Story</Typography>
				<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
									 onChange={handleChange}/>
				<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
									 onChange={handleChange}/>
				<TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}
									 onChange={handleChange}/>
				<TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}
									 onChange={handleChange}/>
				<div className={classes.fileInput}>
					<FileBase type="file" multiple={false}
										onDone={({base64}: any) => setPostData({...postData, selectedFile: base64})}/>
				</div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"
								fullWidth>Submit</Button>
				<Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear}
								fullWidth>Clear</Button>
			</form>
		</Paper>
	)
}

export default Form
