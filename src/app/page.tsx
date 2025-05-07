"use client"
import Image from "next/image";
import hamb1 from "../../public/hamb-1.png"
import hamb2 from "../../public/hamb-2.png"
import hamb3 from "../../public/hamb-3.png"
import hamb4 from "../../public/hamb-4.png"
import hamb5 from "../../public/hamb-5.png"
import hamb6 from "../../public/hamb-6.png"
import hamb7 from "../../public/hamb-7.png"
import hamb8 from "../../public/hamb-8.png"
import refri1 from "../../public/refri-1.png"
import refri2 from "../../public/refri-2.png"
import header from "../../public/bg.png"
import { FaCartPlus } from "react-icons/fa";
import { CardItem } from "./components/CardItem";
import { ButtonModal } from "./components/buttonModal";
import { useContext } from "react";
import { OrderContext } from "./context/order";
import { PainelItems } from "./components/painelItems";
import { Header } from "./components/header";

export default function Home() {

  const { modalControl } = useContext(OrderContext)

  const data = new Date
  const horario = data.getHours()


  return (
    <section className="relative">
      
      <Header />

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça Nosso Menu
      </h2>


      <div id="menu">
        <main className="grid grid-cols-1 md:grid-cols-2  gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb1} name="Hamburguer-smash" value={30} />
          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb2} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb3} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb4} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb5} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb6} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb7} name="Hamburguer" value={10} />

          <CardItem descricao="Pão levinho de fermentação natural da Trigou, Burguer 160g, queijo prato e maionese da casa" img={hamb8} name="Hamburguer" value={10} />


        </main>

        <div className="mx-auto max-w-7xl px-2 my-2">
          <h2 className="font-bold text-3xl">
            Bebidas
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2  gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16" id="menu">

          <CardItem descricao={""} img={refri1} name="Coca-Cola 300ML" value={10} />

          <CardItem descricao={""} img={refri2} name="Guárana 300ML" value={10} />


        </div>


      </div>



      <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99]  items-center justify-center hidden"
        id="cart-modal">
        <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
          <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
          <div id="cart-items" className="flex justify-between mb-2 flex-col">

          </div>

          <p className="font-bold">Total: <span id="cart-total">0.00</span></p>
          <p className="font-bold mt-4">Endereço de entrega</p>
          <input type="text" placeholder="Digite seu endereço completo " id="address" className="w-full border-2 p-1 rounded my-1" />
          <p className="text-red-500 hidden" id="adress-warn">Digite seu endereço completo</p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button id="close-modal-btn">Fechar</button>
            <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar pedido</button>
          </div>

        </div>
      </div>


      <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
        <ButtonModal />
      </footer>



      {modalControl ? <PainelItems /> : ""}
    </section>
  );
}
