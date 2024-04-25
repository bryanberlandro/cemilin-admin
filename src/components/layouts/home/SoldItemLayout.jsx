import { useEffect, useState } from "react";
import { SaleCard } from "../../fragments/SaleCard";

const btn = [
    {
        value: "Online",
        index: 0
    },
    {
        value: "Offline",
        index: 1
    }
]

export function SoldItemLayout(){
    const salesData = JSON.parse(localStorage.getItem("sales"));
    const [data, setData] = useState(salesData)
    const [curTab, setCurTab] = useState(0)
    const [transform, setTransform] = useState("")
    const [loading, setIsLoading] = useState(true)

    function handleTab(index){
        setCurTab(index)
    }

    useEffect(() => {
        if(data){
            setIsLoading(false)
        }
    }, [data])
    console.log(data)

    useEffect(() => {
        if(curTab == 0){
            setTransform("translate-x-0")
        } else {
            setTransform("translate-x-full")
        }
    }, [curTab])

    return(
        <>
        <div className="mt-5">
                <h1 className="text-lg font-semibold">Penjualan</h1>
                <p className="text-sm text-neutral-600">Penjualan product sampai hari ini</p>
                <div className="flex flex-col mt-5"> 
                    <div className="flex w-max rounded-full bg-neutral-100 relative overflow-hidden">
                        {
                            btn.map(bt => (
                            <button 
                            key={bt.index} 
                            onClick={() => handleTab(bt.index)}
                            className={`px-7 py-2 rounded-full text-xs z-10 ${curTab == bt.index ? 'text-white' : 'text-neutral-400' }`}>
                                {bt.value}
                            </button>
                            ))
                        }
                        <div className={`absolute transition-all duration-300 bg-blue-600 w-1/2 h-full rounded-full ${transform}`}></div>
                    </div>
                    {
                        loading ?
                        <h1>loading...</h1>
                        :
                        <SaleCard data={data}/>
                    }
                </div>
            </div>
        </>
    )
}