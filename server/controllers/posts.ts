import PostMessage from "../models/postMessage"

export const getPosts = async (req: any, res: any) => {
	try {
		// find() takes time, so it is a asynchronous function
		const postMessages = await PostMessage.find()
		res.status(200).json(postMessages)
	} catch (error) {
		res.status(404).json({message: (error as Error).message})
	}
}

export const createPost = async (req: any, res: any) => {
	const post = req.body
	const newPost = new PostMessage(post)
	try {
		await newPost.save()
		res.status(201).json(newPost)
	} catch (error) {
		res.status(409).json({message: (error as Error).message})
	}
}