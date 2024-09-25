import { v4 } from "uuid"

class User{
    public id: string
    public followeres: string[] = []
    public following: string[] = []
    public isLockedAccount: boolean = false
    constructor(
        public username: string,
        public password: string,
        public email:    string,
        public birthday: Date
    ) {
        this.id = v4()
    }
}
