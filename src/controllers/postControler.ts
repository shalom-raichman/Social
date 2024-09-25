import express, { Router, Request, Response }  from "express"
import NewPostDTO from "../DTO/newPost"
import PostService from "../sevices/postService"
import Post from "../models/post"
import { getFileData } from "../config/fileDataLayer"

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
        if(!result) throw new Error("Cant Save New User to the file");
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

// protected rout
router.patch("/like/:id", async (req: Request, res: Response): Promise<void> => {
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


export default router