/* eslint-disable react/prop-types */
import { FaCheck, FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function ListNote({no, name, price, isDone, onClick}){
    return(
        <>
        <div className="border-b-2 py-4 px-4">
                <div className="text-sm flex items-center gap-5 justify-end">
                    {
                        isDone === "sudah" ?
                        <FaCheck className="text-emerald-500"/>
                        :
                        <FaX className="text-red-500"/>
                    }
                    <FaTrash onClick={onClick} className="text-neutral-500"/>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-2">
                        <h1>{no} </h1>
                        <div>
                            <h1>{name}</h1>
                            <p className="text-sm text-neutral-500">5 pcs</p>
                        </div>
                    </div>
                    <h1>{price}</h1>
                </div>
            </div>
        </>
    )
}