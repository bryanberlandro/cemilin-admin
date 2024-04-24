/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function Item({no, name, pcs, price, done}){
    return(
        <>
        <tr>
            <td>{no}</td>
            <td>{name}</td>
            <td>{pcs}</td>
            <td>{price}</td>
            <td>
                {
                    done ?
                    <FaCheck className="text-green-400 mx-auto"/>
                    :
                    <FaX className="text-red-400 mx-auto"/>
                }
            </td>
        </tr>
        </>
    )
}