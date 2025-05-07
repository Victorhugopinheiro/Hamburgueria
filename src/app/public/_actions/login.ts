"use server"
import { signIn, signOut,  } from "next-auth/react"


export async function handleRegister(provider:string){

    await signIn(provider)

}