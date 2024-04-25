/* eslint-disable react/prop-types */
import { FaCheck, FaClock } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Rupiah } from "../../utils/Rupiah";
import { useEffect, useState } from "react";

export function BuyerCard({no, name, price, pieces, buyerPrice, isDone}){
    const [showDetails, setShowDetails] = useState(false)
    const [isPay, setIsPay]  = useState("")

    function handleShowDetails(){
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        if(isDone){
            setIsPay("Sudah Dibayar")
        } else {
            setIsPay("Belum Dibayar")
        }
    }, [isDone])

    return(
        <>
        <div className="flex flex-col border-b-2 py-4 text-sm">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 font-medium">
                    <h1>{no}</h1>
                    <h1>{name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <h1>{Rupiah(price)}</h1>
                    {
                        isDone ?
                        <FaCheck className="text-emerald-500"/> 
                        :
                        <FaClock className="text-yellow-500"/> 
                    }
                    <IoInformationCircleOutline onClick={handleShowDetails}/>
                </div>
            </div>
            <div className={`px-4 text-xs text-neutral-600 mt-1 space-y-0.5 ${showDetails ? "block" : "hidden"}`}>
                <p>item : {pieces} pcs</p>
                <p>harga : {Rupiah(buyerPrice)}</p>
                <p className={`${isDone ? "text-emerald-600" : "text-yellow-600"}`}>{isPay}</p>
            </div>
        </div>
        </>
    )
}