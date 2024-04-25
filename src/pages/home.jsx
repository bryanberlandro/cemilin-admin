import { useState } from "react";
import { ProductTable } from "../components/fragments/ProductTable";
import { InfoCard } from "../components/fragments/InfoCard";

export default function HomePage(){
    const productData = JSON.parse(localStorage.getItem("product"))
    const [data, setData] = useState(productData)


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
                price={"0"}
                />
            </div>
            <div className="mt-5">
                <h1 className="font-semibold text-lg ">Daftar Item</h1>
                <p className="text-neutral-700 text-sm">Daftar barang yang sudah dan belum di beli</p>
            </div>
            {
                data ? 
                <ProductTable data={data}/>
                : 
                <div className="text-center pt-10">
                    <h1 className="font-bold text-neutral-400">Belum ada data</h1>
                </div>
            }
        </div>
        </>
    )
}