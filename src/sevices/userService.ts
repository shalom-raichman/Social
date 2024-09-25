import NewUserDTO from "../DTO/newUser"
import User from "../models/user"
import { getFileData, saveFileData } from "../config/fileDataLayer"

export default class userService {
    public static async createNewUser(newUser: NewUserDTO): Promise<boolean>{
        // create a new user() object
        const {username, password, email, birthday, avatarUrl} = newUser
        const user: User = new User(
            username, password, email, birthday, avatarUrl
        )

        // aad it to the user file
            // get the file as an array of objects
        let users: User[] = await getFileData<User>("users") as User[]
        if(!users) users = []
            // push
        users.push(user)
            // save the array back to the file
        return await saveFileData<User>("users", users)
    }
}

