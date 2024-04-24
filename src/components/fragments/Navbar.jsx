/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    function handleShowSidebar(){
        setShowSidebar(!showSidebar);
    }


    return(
        <>
        <div className="w-full fixed z-50 bg-white flex justify-between py-4 px-[5%] border-b-2 font-semibold border-neutral-200 items-center">
            <h1>CEMILIN</h1>
            <div>
                <IoMenu
                onClick={handleShowSidebar}
                className="cursor-pointer"
                />
            </div>
        </div>
        <Sidebar showSidebar={showSidebar}/>
        </>
    )
}