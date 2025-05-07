"use client"
import { OrderContext } from "@/app/context/order";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { PainelItems } from "../painelItems";

export function ButtonModal() {

    const{openModal, modalControl, countItems, items} = useContext(OrderContext)


    return (
        <>
            <button onClick={openModal} className="flex items-center gap-2 text-white font-bold" id="cart-btn">
                (<span id="cart-count">{items.length}</span>)
                Veja Meu carrinho
                <FaCartPlus />
            </button>

            
        </>
    )
}