/* eslint-disable react/prop-types */
import { Summary } from "./Summary";
import { BuyerCard } from "./BuyerCard";
import { useEffect, useState } from "react";
import { Rupiah } from "../../utils/Rupiah";

export function SaleCard({data}){
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        const sumPrice = data.reduce((acc, curVal) => acc + Number(curVal.price * curVal.pieces), 0)
        setTotalIncome(sumPrice)
    }, [data])

    return(
        <>
        <div className="w-full mt-5 rounded-lg px-4 py-4 bg-neutral-50 flex flex-col">
                        <div className="w-full  flex items-center justify-between">
                            <div>
                                <h1 className="font-semibold">Cireng</h1>
                                <p className="text-xs text-neutral-600 mt-1">25 April 2024</p>
                            </div>
                            <h1 className="font-semibold text-lg">{Rupiah(totalIncome)}</h1>
                        </div>
                        <div className="flex flex-col my-4">
                            {
                                data ?
                                data.map((dt, index) => (
                                    <BuyerCard
                                    key={dt.id}
                                    name={dt.name}
                                    no={index + 1}
                                    price={dt.price * dt.pieces}
                                    pieces={dt.pieces}
                                    buyerPrice={dt.price * dt.pieces}
                                    isDone={dt.isDone === "sudah" ? true : false} 
                                    />
                                ))
                                : 
                                <h1>Data Belum Ada</h1>
                            }
                        </div>
                        <div className="flex">
                            <Summary
                            title={"Sudah Dibayar"}
                            color={"blue"}
                            />
                            <Summary
                            title={"Belum Dibayar"}
                            color={"yellow"}
                            />
                        </div>
                    </div>
        </>
    )
}