import NewUserDTO from "../DTO/newUser"
import fs from "fs/promises"
import User from "../models/user"

class userService {
    public static async createNewUser(newUser: NewUserDTO): Promise<void>{
        // create a new user() object
        const {username, password, email, birthday, avatarUrl} = newUser
        const user: User = new User(
            username, password, email, birthday, avatarUrl
        )

        // aad it to the user file
            // get the file as an array of objects

            // push

            // save the array back to the file
    }
}

