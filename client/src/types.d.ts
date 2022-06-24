interface LikeCountType {
	type: number
	default: number
}

interface CreatedAtType {
	type: Date
	default: Date
}

interface PostType {
	id: number,
	title: string,
	message: string,
	creator: string,
	tags: string[],
	selectedFile: string,
	likeCount?: LikeCountType,
	createdAt?: CreatedAtType
}
