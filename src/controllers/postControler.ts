import express, { Router, Request, Response }  from "express"
import NewPostDTO from "../DTO/newPost"
import PostService from "../sevices/postService"
import Post from "../models/post"
import { getFileData, saveFileData } from "../config/fileDataLayer"

const router:Router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const result: Post[] = await getFileData<Post>("posts") as Post[]
        if(!result) throw new Error("Cent get data from file")
        res.status(200).json({
            err: false,
            message: "here is all the posts",
            data: result
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: err,
            data: null
        })
    }
})

// protected rout
router.post("/", async (
    req: Request<any, any, NewPostDTO>,
        res: Response): Promise<void> => {
    try {
        const result = await PostService.createNewPost(req.body)
        if(!result) throw new Error("Cant Save New User to the file")
        res.status(200).json({
            err: false,
            message: "Post saved succefuly",
            data: req.body
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: err,
            data: null
        })
    }
})

// query params: ?titel=x&data=23/04/24
router.get("/search", async (req: Request, res: Response): Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        })
    }
})

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const usersArray: Post[] = await getFileData<Post>("posts") as Post[]
        const result: Post = usersArray.find(p => p.id == req.params.id) as Post
        if(!result) throw new Error("Post not found");
        res.status(200).json({
            err: false,
            message: "Here is the post you wonted",
            data: result
        })       
    } catch (err) {
        console.log(err);
        
        res.status(400)
        res.json({
            err: true,
            message: err,
            data: null
        })
    }
})

// protected rout
router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const usersArray: Post[] = await getFileData<Post>("posts") as Post[]
        const postIndex: number = usersArray.findIndex(p => p.id == req.params.id)
        if(postIndex === -1) throw new Error("Post not found")
        const newPost:Post = {
            ...usersArray[postIndex],
            ...req.body
        }
        const isSaved: boolean = await saveFileData<Post>("posts", usersArray)
        if(!isSaved) throw new Error("could not save shanges");
        res.status(200).json({
            err: false,
            message: "changes saved",
            data: newPost
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: err,
            data: null
        })
    }
})

// protected rout
router.patch("/like/:id", async (
    req:Request<any, any, {postId:string, userId:string}>,
    res:Response
    ):Promise<void> => {
    try {
        const {postId, userId} = req.body
        const posts = await getFileData('posts') as Post[]
        const post:Post = posts.find(p => p.id == postId) as Post
        let opperationType:string
        if (post.likedBy.includes(userId)) {
            post.likedBy = post?.likedBy.filter(u => u != userId)
            opperationType = 'unlike'
        } else {
            post?.likedBy.push(userId)
            opperationType = 'like'
        }
        res.status(200).json({
            err: false,
            message: `You've successfully ${opperationType}d that post!`,
            data: undefined
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        })
    }
})

// protected rout
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const usersArray: Post[] = await getFileData<Post>("posts") as Post[]
        const post: Post = usersArray.find(p => p.id == req.params.id) as Post
        if(!post) throw new Error("the post you wonted to delete dosent exists")
        const UpdatedUsersArray: Post[] = usersArray.filter(p => p.id != req.params.id)
        const isSaved: boolean = await saveFileData<Post>("posts", UpdatedUsersArray)
        if(!isSaved) throw new Error("could not save shanges");
        res.status(200).json({
            err: false,
            message: `${post.id} was deleted successfully`,
            data: post
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: err,
            data: null
        })
    }
})

export default router