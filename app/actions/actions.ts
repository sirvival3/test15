"use server"

import {sessionOptions, SessionData, defaultSession} from "@/lib/lib"
import { getIronSession } from "iron-session"
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"
// import { revalidatePath } from "next/cache"

export const getSession = async ()=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    // CHECH THE USER IN THE DB
   

    return session
}



export const login = async (prevState:{error:undefined | string},formData:FormData)=>{
    const session = await getSession()

    const formUsername = formData.get("username") as string
    const formPassword = formData.get("password") as string

    // CHECK USER IN DB
    const res = await fetch('https:/www.bogstav.dk/api/login.php', {
        method: 'POST',
        body: JSON.stringify({
            username: formUsername,
            password: formPassword,
        }),
    });
    const data = await res.json()

    if(data.error){
        return {error:data.error}
    } else if(formUsername!==data.username){
        return {error:"Forkert brugernavn eller koderord."}
    }

    session.userId = data.userid
    session.token = data.token
    session.username = data.username
    session.role = data.role
    session.isLoggedIn = true
    session.isBlocked = data.is_blocked

    await session.save()
    redirect("/dashboard")
}

export const logout = async ()=>{
    const session = await getSession()
    session.destroy()
    redirect("/")
}

// export const changePremium = async ()=>{
//     const session = await getSession()

//     isPro = !session.isPro
//     session.isPro = isPro
//     await session.save()
//     revalidatePath("/profile")
// }

// export const changeUSername = async (formData:FormData)=>{
//     const session = await getSession()

//     const newUsername = formData.get("username") as string

//     session.username = newUsername
//     await session.save()
//     revalidatePath("/profile")
// }