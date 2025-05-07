"use client"
import { OrderContext } from "@/app/context/order";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";


interface ItemsCard {
    img: StaticImageData
    name: string
    value: number
    descricao:string | null | undefined
}

export function CardItem({ img, name, value, descricao }: ItemsCard) {

    const { addItem } = useContext(OrderContext)

    function adicionandoITem() {
        addItem(name, value)
    }

    return (
        <>
            <div className="flex gap-2">
                <Image src={img} alt="Guaraná lata" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <p className="text-sm">{descricao}</p>

                    <div className="w-full">
                        <p className="font-bold">{name}</p>

                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold text-lg">R${value}</p>
                            <button onClick={adicionandoITem} className="bg-gray-900 px-5 rounded add-to-cart-btn">
                                <FaCartPlus color="white" size={22} />
                            </button>
                        </div>
                    </div>
                </div>
                </>
                )
}