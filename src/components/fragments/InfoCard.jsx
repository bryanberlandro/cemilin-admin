export function InfoCard({title, price}){
    return(
        <>
        <div className="text-sm text-neutral-600 space-y-1 w-1/2 text-center">
            <h1>{title}</h1>
            <h1 className="font-medium text-black text-xl">Rp {price}</h1>
        </div>
        </>
    )
}