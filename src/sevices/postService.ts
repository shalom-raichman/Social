import NewPostDTO from "../DTO/newPost"
import Post from "../models/post"
import { getFileData, saveFileData } from "../config/fileDataLayer"

export default class PostService {
    public static async createNewPost(newPost: NewPostDTO): Promise<boolean>{
        // create a new Post() object
        const {aoutorId, content, hashtags, ref} = newPost
        const post: Post = new Post(
            aoutorId, content, hashtags, ref
        )

        // aad it to the Post file
            // get the file as an array of objects
        let posts: Post[] = await getFileData<Post>("posts") as Post[]
        if(!posts) posts = []
            // push
        posts.push(post)
            // save the array back to the file
        return await saveFileData<Post>("posts", posts)
    }
}

