import { useState } from "react";
import { InfoCard } from "../components/fragments/InfoCard";
import { ItemLayout } from "../components/layouts/home/ItemLayout";
import { SoldItemLayout } from "../components/layouts/home/SoldItemLayout";
import { NoteList } from "../components/layouts/home/NoteList";




export default function HomePage(){
    const productData = JSON.parse(localStorage.getItem("product"))
    const [data, setData] = useState(productData)
    const [cashOut, setCashOut] = useState(0)

    return(
        <>
        <div className="pt-20 px-[5%] flex flex-col gap-5">
            <div className="w-full rounded-lg flex divide-x-2">
                <InfoCard
                title={"Pemasukan"}
                price={"0"}
                />
                <InfoCard
                title={"Pengeluaran"}
                price={cashOut}
                />
            </div>
            <ItemLayout
            data={data}
            setCashOut={setCashOut}
            />

            <SoldItemLayout/>
            <NoteList/>
        </div>
        </>
    )
}