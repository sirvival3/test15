"use server"

import {sessionOptions, SessionData, defaultSession} from "@/lib/lib"
import { getIronSession } from "iron-session"
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

let isPro = true
let isBlocked = true

export const getSession = async ()=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    // CHECH THE USER IN THE DB
    session.isBlocked = isBlocked
    session.isPro = isPro

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

    // console.log("data from server:")
    // console.log(data)

    if(formUsername!==data.username){
        return {error:"Wrong Credentials!"}
    }

    session.userId = data.userid
    session.username = data.username
    session.isPro = isPro
    session.isLoggedIn = true

    await session.save()
    redirect("/")
}

export const logout = async ()=>{
    const session = await getSession()
    session.destroy()
    redirect("/")
}

export const changePremium = async ()=>{
    const session = await getSession()

    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/profile")
}

export const changeUSername = async (formData:FormData)=>{
    const session = await getSession()

    const newUsername = formData.get("username") as string

    session.username = newUsername
    await session.save()
    revalidatePath("/profile")
}