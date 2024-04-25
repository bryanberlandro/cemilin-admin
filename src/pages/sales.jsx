import { useEffect, useState } from "react";
import { GenerateRandomId } from "../utils/GenerateRandomId";

export default function SalesPage(){
    const buyerData = JSON.parse(localStorage.getItem("sales"))
    const [data, setData] = useState(buyerData)

    function handleAddData(){
        const name = document.getElementById("prodName").value;
        const pieces = document.getElementById("prodPcs").value;
        const price = document.getElementById("prodPrice").value;
        const isDone = document.getElementById("prodDone").value;
        const id = GenerateRandomId()

        const updateData = {
            name: name,
            id: id,
            pieces: pieces,
            price: price,
            isDone: isDone,
        }

        if(data == null){
            setData([updateData])
        } else {
            setData([...data, updateData])
        }
    }

    useEffect(() => {
        localStorage.setItem("sales", JSON.stringify(data))
    }, [data])

    return(
        <>
        <div className="pt-20 px-[5%]">
        <div className="flex flex-col gap-5 px-10 rounded-lg border-2 py-6 ">
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="prodName">Nama Pembeli</label>
                    <input 
                    type="text" 
                    placeholder="Masukkan nama pembeli"
                    name="prodName"
                    id="prodName"
                    className="border-2 rounded-md px-4 text-sm py-2 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prodPcs">Jumlah Barang</label>
                    <input 
                    type="text" 
                    placeholder="Masukkan jumlah barang"
                    name="prodPcs"
                    id="prodPcs"
                    className="border-2 rounded-md px-4 text-sm py-2 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prodPrice">Harga Barang</label>
                    <input 
                    type="text" 
                    placeholder="Masukkan harga barang"
                    name="prodPrice"
                    id="prodPrice"
                    className="border-2 rounded-md px-4 text-sm py-2 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="prodDone">Sudah Dibayar ?</label>
                    <select name="prodDone" id="prodDone" className="py-2 rounded-md border-2 outline-none px-4 text-sm">
                        <option value="sudah">Sudah</option>
                        <option value="belum">Belum</option>
                    </select>
                </div>
            </form>
                <button 
                className="py-2 bg-sky-500 rounded-md text-white"
                onClick={handleAddData}
                >Tambahkan Data</button>
            </div>
        </div>
        </>
    )
}