"use client"
import { OrderContext } from "@/app/context/order";
import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";


export function PainelItems() {

    const { createMercadoPagoCheckout } = useMercadoPago()

    const { items, closeModal, totalValue, countItems, removeItem, addItem} = useContext(OrderContext)

    const { data: session, status } = useSession()



    function formEndereco(formData: FormData) {
        const endereco = formData.get("endereco")
      
        const email = session?.user?.email
        if (status === "unauthenticated") {
            
            signIn()
            return
        }
        if (!endereco) {
            return
        }

        

        if (endereco && email) {
            createMercadoPagoCheckout({
                testeId: "123",
                userEmail: `${session?.user?.email}`,
                totalValue: `${totalValue}`
            })
        }

       
        
    }


    return (
        <section className="h-svh w-full  fixed flex justify-center items-center top-0 z-30 bg-transparent p-2 ">
            <div className="w-10/12 z-40 p-2 flex flex-col items-center rounded-md bg-slate-200 h-fit md:w-8/12 lg:w-6/12 xl:w-5/12">
                <div className="flex w-full justify-end p-1">
                    <button onClick={closeModal} className="text-end"><CgClose color="red" size={28} /></button>
                </div>
                <h1 className="text-center text-2xl font-bold">Carrinho</h1>

                {items.length !== 0 ? (
                    <div className="w-10/12 flex flex-col gap-8">
                        <div className="w-full justify-center items-center flex flex-col gap-8">
                            {items.map((item, index) => (
                                <div key={index} className="w-full  rounded-md  flex justify-between">
                                    <div className="">
                                        <strong>{item.name}</strong>
                                        <div className="flex gap-3">
                                            <p>Qtd:{item.qtd} </p>
                                            <strong>R${item.value}</strong>
                                        </div>

                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <button onClick={() => addItem(item.name, item.valueUnic)}><GrAddCircle size={24} color="green" /></button>
                                        <button onClick={() => removeItem(index, item.value, item.valueUnic)}><GrSubtractCircle size={24} color="red" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full">
                            <strong>Total: R${totalValue}</strong>
                        </div>

                        <div className="w-full">
                            <strong>Endereço de Entrega</strong>

                            <form action={formEndereco} className="w-full flex flex-col justify-start gap-3">
                                <input name="endereco" className="w-full border-slate-500 border-2 p-1  rounded-md" placeholder="Digite seu endereço"></input>

                                <div className="w-full flex justify-center">
                                    <button type="submit" id="finishButton" className="py-2 px-4 w-4/12 bg-black rounded-md text-white">Finalizar Pedido</button>


                                </div>
                            </form>
                        </div>



                    </div>
                ) : (<div className="w-10/12 flex flex-col gap-8 p-6">
                    <div className="w-full h-fit py-4  justify-center items-center my-12 flex flex-col gap-8">
                        <h1 className="font-bold font-serif text-3xl text-gray-600">Seu Carrinho Está vazio...</h1>
                    </div>



                    <div className="w-full flex justify-center items-center ">
                        <button className="font-black w-6/12 px-4 py-2 bg-slate-400 rounded-md text-black" onClick={closeModal}>Voltar</button>
                    </div>



                </div>)}
            </div>
        </section>
    )
}