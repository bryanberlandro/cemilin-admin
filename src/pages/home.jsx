import { useState } from "react";
import { ProductTable } from "../components/fragments/ProductTable";

export default function HomePage(){
    const productData = JSON.parse(localStorage.getItem("product"))
    const [data, setData] = useState(productData)

    return(
        <>
        <div className="pt-20 px-[5%] flex flex-col gap-5">
            <div>
                <h1 className="font-semibold text-lg ">Daftar Item</h1>
                <p className="text-neutral-700 text-sm">Daftar barang yang sudah dan belum di beli</p>
            </div>
            <ProductTable data={data}/>
        </div>
        </>
    )
}