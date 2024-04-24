import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export function Sidebar({showSidebar}){
    return(
        <>
        <div className={`w-52 h-dvh border-l-2 fixed right-0 pt-16 transition-all bg-white duration-300 z-40 ${showSidebar ? 'translate-x-0' : 'translate-x-96'}`}>
            <ul className="px-2 pt-2">
                <li className="py-4 px-4 w-full rounded-md hover:bg-neutral-100">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="py-4 px-4 w-full rounded-md hover:bg-neutral-100">
                    <Link to={'/notes'}>Notes</Link>
                </li>
                <li className="py-4 px-4 w-full rounded-md hover:bg-neutral-100">
                    <a href="">Income</a>
                </li>
            </ul>
        </div>
        </>
    )
}