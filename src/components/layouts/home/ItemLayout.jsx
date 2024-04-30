import { ProductTable } from "../../fragments/ProductTable";

export function ItemLayout({data, setCashOut}){
    
    return(
        <>
        <div className="flex flex-col gap-4">
                <div className="mt-5">
                    <h1 className="font-semibold text-lg ">Daftar Item</h1>
                    <p className="text-neutral-700 text-sm">Daftar barang yang sudah dan belum di beli</p>
                </div>
                {
                    data ? 
                    <ProductTable data={data} setCashOut={setCashOut}/>
                    : 
                    <div className="text-center pt-10">
                        <h1 className="font-bold text-neutral-400">Belum ada data</h1>
                    </div>
                }
            </div>
        </>
    )
}