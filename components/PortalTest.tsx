import { useState } from "react"
import { createPortal } from "react-dom"
import Portal from "./Portal"


export default function PortalTest(){
    const [showModal, setShowModal] = useState(false);
    return(<>
    <button onClick={()=>setShowModal(true)}>
        Show modal Using a portal
    </button>
    {showModal && createPortal(
        <Portal onclose={()=>setShowModal(false)} />,
        document.body.querySelector("main") as Element
    )}
        



    </>)
}