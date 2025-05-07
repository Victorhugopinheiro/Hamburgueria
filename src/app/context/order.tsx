"use client"
import { createContext, ReactNode, useState } from "react"



interface DetailOrder {
    addItem: (nameItem: string, amount: number) => void;
    productValue: number,
    totalValue: number
    totalValueFunction: (myValue: number) => void;
    items: Item[] | [],
    openModal: () => void;
    closeModal: () => void;
    modalControl: boolean,
    countItems: number
    removeItem: (index: number, value: number, unicValue: number) => void;
    valida: (endereco:boolean ) => void;
    validaEndereco: boolean
}

interface Item {
    value: number,
    valueUnic: number
    name: string,
    qtd: number
}


export const OrderContext = createContext({} as DetailOrder)


export function OrderProvider({ children }: { children: ReactNode }) {

    const [productValue, setProductValue] = useState<number>(0)
    const [totalValue, setTotalValue] = useState<number>(0)
    const [items, setItems] = useState<Item[]>([])
    const [modalControl, setModalControl] = useState(false)
    const [countItems, setCountItems] = useState<number>(0)
    const [validaEndereco, setValidaEndereco] = useState(false)


    function addItem(name: string, myValue: number) {
        const findItem = items.find((item) => item.name === name)
        const findIndex = items.findIndex((item) => item.name === name)
        if (findItem) {
            findItem.qtd = findItem.qtd + 1

            setItems((prevItems) => {
                return prevItems.map((item, index) =>
                    index === findIndex ? { ...item, qtd: item.qtd, value: item.qtd * myValue } : item
                );
            });



            totalValueFunction(myValue)
            return
        }


        let value = myValue
        let CountItemsArray = items.length + 1
        setCountItems(CountItemsArray)




        setItems([...items, { name, value, qtd: 1, valueUnic: myValue }])



        totalValueFunction(myValue)
        return
    }


    function openModal() {
        setModalControl(true)
    }

    function closeModal() {
        setModalControl(false)
    }


    function totalValueFunction(myvalue: number) {
        const total = items.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.value;
        }, myvalue);

        console.log(total)

        setTotalValue(total)
    }

    function removeItem(index: number, value: number, unicValue: number) {
        const itemForSubstract = items[index]
        const newValue = value / itemForSubstract.qtd

        if (itemForSubstract.qtd === 1) {

            const filtrando = items.filter((item) => {
                return JSON.stringify(item) !== JSON.stringify(itemForSubstract)
            })
            setTotalValue(totalValue - value)
            setItems(filtrando)
            return

        }

        setItems((prevItems) => {
            return prevItems.map((item, myIndex) =>
                myIndex === index ? { ...item, qtd: itemForSubstract.qtd - 1, value: itemForSubstract.value - newValue } : item

            )
        })



        const valorTotalAtual = totalValue - unicValue
        setTotalValue(valorTotalAtual)
        console.log(valorTotalAtual)
        return

    }


    function valida(validation:boolean){
        if(!validation){
            setValidaEndereco(false)
        }
        setValidaEndereco(true)
    }

    return (
        <OrderContext.Provider value={{ addItem, productValue, items, openModal, modalControl, closeModal, totalValueFunction, totalValue, countItems, removeItem, validaEndereco, valida }}>
            {children}
        </OrderContext.Provider>
    )
}