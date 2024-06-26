import { useEffect, useState } from "react";
import { ListNote } from "../components/fragments/ListNote";
import { Rupiah } from "../utils/Rupiah";
import { GenerateRandomId } from "../utils/GenerateRandomId";

export default function NotesPage(){
    const productData = JSON.parse(localStorage.getItem('product'))
    const [data, setData] = useState(productData)
    
    function handleSendData(){
        const name = document.getElementById("prodName").value;
        const pieces = document.getElementById("prodPcs").value;
        const price = document.getElementById("prodPrice").value;
        const isDone = document.getElementById("prodDone").value;
        const id = GenerateRandomId()

        const updateData = {
            name: name,
            pieces: pieces,
            price: price,
            isDone: isDone,
            id: id
        }

        if(data == null){
            setData([updateData])
        } else {
            setData([...data, updateData]);
        }
    }

    function handleRemoveData(dt){
        const deleteData = data.filter(d => d.id !== dt.id)
        setData(deleteData)
    }

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(data))
        console.log(data)
    }, [data])

    return( 
        <>
        <div className="px-[5%] pt-20 pb-5">
        <div>
            <div className="flex flex-col gap-5 px-10 rounded-lg border-2 py-6 ">
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="prodName">Nama Barang</label>
                    <input 
                    type="text" 
                    placeholder="Masukkan nama barang"
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
                    <label htmlFor="prodDone">Sudah Dibeli ?</label>
                    <select name="prodDone" id="prodDone" className="py-2 rounded-md border-2 outline-none px-4 text-sm">
                        <option value="sudah">Sudah</option>
                        <option value="belum">Belum</option>
                    </select>
                </div>
            </form>
                <button 
                className="py-2 bg-sky-500 rounded-md text-white"
                onClick={handleSendData}
                >Tambahkan Data</button>
            </div>

        </div>
        <div className="flex flex-col px-[5%] mt-5">
            <h1 className="font-semibold text-lg">List Data</h1>
            {
                data?.map((dt, index) => (
                    <ListNote
                    key={dt.id}
                    name={dt.name}
                    no={index + 1}
                    price={Rupiah(dt.price)}
                    isDone={dt.isDone}
                    onClick={() => handleRemoveData(dt)}
                    />
                ))
            }
            
        </div>
        </div>
        </>
    )
}