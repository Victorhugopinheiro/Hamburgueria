"use client"
import Image from "next/image";

import hamb1 from "../../../../public/hamb-1.png"
import header from "../../../../public/bg.png"
import { useSession, signIn, signOut } from "next-auth/react";
import { FaSign, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

export function Header() {


    async function login() {

        await signIn()
    }

    async function logout() {

        await signOut()
    }

    const { data: session, status } = useSession()

    const date = new Date
    const horario = date.getHours()

    console.log(session, status)


    return (
        <header className="w-full h-[420px] relative overflow-hidden bg-zinc-900 bg-home bg-cover bg-center" >

            <div className="w-full  flex justify-end pr-10">
                {status === "loading" ? (
                    <></>
                ) : session ?
                    <div className="w-8 h-8 flex gap-2 justify-center items-center">

                        <button className="flex items-center justify-center gap-4" onClick={logout}>
                            <p className="text-white font-bold">Sair</p>
                            <FaSignInAlt color="white" size={18} />
                        </button>
                    </div>
                    : <div className="w-8 h-8 gap-2 flex justify-center items-center">

                        <button className="flex items-center justify-center gap-4" onClick={login}>
                            <p className="text-white font-bold">Entrar</p>
                            <FaSignOutAlt color="white" size={18} />
                        </button>
                    </div>}
            </div>

            <div className="w-full absolute">
                <Image className="object-contain w-full opacity-50" src={header} alt="Imagem header" />
            </div>

            <div className="w-full h-full z-10 flex flex-col justify-center items-center ">
                <Image src={hamb1} alt="logo-dev_burguer" className="w-32 h-32 z-10 rounded-full shadow-lg hover:scale-110 duration-200" />
                <h1 className="text-4xl mt-4 mb-2 font-bold z-10 text-white">Victor Burguers</h1>

                <span className="text-white font-medium z-10">Rua Dev, Sp-Sp</span>

                <div className={`${horario > 13 && horario < 23 ? "bg-green-500" : "bg-red-600"} px-4 py-1 rounded-lg mt-5 z-10 " id="date-span`}>
                    <span className="text-white font-medium z-10">
                        Seg a Dom - 14:00 as 22:00
                    </span>
                </div>
            </div>


        </header>
    )
}