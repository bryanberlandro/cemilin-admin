/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Item } from "../elements/Item";
import { Rupiah } from "../../utils/Rupiah"
import { Loader } from "../elements/Loader";

export function ProductTable({data}){
    const [isLoading, setIsLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCashOut, setTotalCashOut] = useState(0)
    const [totalProduct, setTotalProduct] = useState(0)

    useEffect(() => {
        if(data){
            const sumTotalProduct = data.reduce((acc, curVal) => acc +  Number(curVal.pieces), 0)
            setTotalProduct(sumTotalProduct)
    
            const sumCashOut = data.filter(dt => dt.isDone === "sudah").reduce((acc, curVal) => acc + Number(curVal.price), 0)
            setTotalCashOut(sumCashOut)
    
            const sumPrice = data.reduce((acc, curVal)  => acc + Number(curVal.price), 0);
            setTotalPrice(sumPrice)
    
            setIsLoading(true)
        }
    }, [data])

    if(isLoading){
        return (
            <div className="flex justify-center pt-10">
                <Loader/>
            </div>
        )
    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Pcs</th>
                    <th>Harga</th>
                    <th>Beli</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dt, index) => (
                        <Item
                        key={dt.id}
                        no={index + 1}
                        name={dt.name}
                        pcs={dt.pieces}
                        price={dt.price}
                        done={dt.isDone === "sudah" ? true : false}
                        /> 
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={2}>Total Barang</th>
                    <td colSpan={3}>{totalProduct}</td>
                </tr>
                <tr>
                    <th colSpan={2}>Uang Keluar</th>
                    <td colSpan={3}>{Rupiah(totalCashOut)}</td>
                </tr>
                <tr>
                    <th colSpan={2}>Total Harga</th>
                    <td colSpan={3}>{Rupiah(totalPrice)}</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}