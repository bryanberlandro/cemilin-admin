import { Summary } from "./Summary";
import { BuyerCard } from "./BuyerCard";

export function SaleCard(){
    return(
        <>
        <div className="w-full mt-5 rounded-lg px-4 py-4 bg-neutral-50 flex flex-col">
                        <div className="w-full  flex items-center justify-between">
                            <div>
                                <h1 className="font-semibold">Cireng</h1>
                                <p className="text-xs text-neutral-600 mt-1">25 April 2024</p>
                            </div>
                            <h1 className="font-semibold text-lg">Rp 150.000</h1>
                        </div>
                        <div className="flex flex-col my-4">
                            <BuyerCard
                            name={"Aldio"}
                            no={"1."}
                            price={10000}
                            pieces={10}
                            buyerPrice={10000}
                            isDone={false}
                            />
                        </div>
                        <div className="flex">
                            <Summary
                            title={"Sudah Dibayar"}
                            color={"blue"}
                            />
                            <Summary
                            title={"Belum Dibayar"}
                            color={"yellow"}
                            />
                        </div>
                    </div>
        </>
    )
}