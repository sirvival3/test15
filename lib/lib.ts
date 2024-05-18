import { SessionOptions } from "iron-session"

export interface SessionData {
    userId?:string
    token?:string
    username?:string
    role?:string
    // img?:string
    // isPro?:boolean
    isLoggedIn:boolean
    isBlocked:boolean
}

export const defaultSession:SessionData = {
    isLoggedIn:false,
    isBlocked:false
}

export const sessionOptions: SessionOptions ={
    password: process.env.SECRET_KEY!,
    cookieName: "lama-session",
    cookieOptions:{
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production"
    }
}