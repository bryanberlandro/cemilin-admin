/* eslint-disable react/prop-types */
export function Summary({title, color}){
    return(
        <>
        <div className="pt-4 w-1/2">
            <h1 className={`font-semibold text-${color}-600 text-sm`}>{title}</h1>
            <div className="text-sm mt-1 space-y-1 text-neutral-600">
                <p>Pembeli : 10</p>
                <p>Total Produk : 24</p>
                <p className="text-black font-medium">Total Harga : Rp 48.000</p>
            </div>
        </div>
        </>
    )
}