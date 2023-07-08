import pantonejs from "@/out.json"

interface PortalProps{
    colorSelection: (colors: {topLeft: string;bottomRight: string;},topLeft: string,
        bottomRight: string)=> void;
    colorProps: {topLeft: string,bottomRight: string}
    topLeft: string,
    bottomRight: string,
    onClose: () => void,
    id: string
}



export default function Portal({onClose, colorSelection,  colorProps, bottomRight,topLeft, id } : PortalProps){
    
    const pantoneClickChange = (e: React.MouseEvent<HTMLDivElement>) =>{
    e.preventDefault();

    const currentTarget = e.currentTarget;
    const colors = structuredClone(colorProps)
    let colorSelectorTopLeft = topLeft;
    let colorSelectorBottomRight = bottomRight;

    if (currentTarget.id === "topLeft"){
        colors.topLeft = currentTarget.innerText;
        colorSelectorTopLeft = currentTarget.style.background;
    }

    if (e.currentTarget.id === "bottomRight"){
        colors.bottomRight = currentTarget.innerText;
        colorSelectorBottomRight = currentTarget.style.background;
    }

    colorSelection(colors, colorSelectorBottomRight,colorSelectorTopLeft);
    onClose();
}

    
    
    
    
    return (
        <div className="grid z-1 modal h-screen w-screen bg-white  ">
            {/* <button className="h-10" onClick={onClose}><img src="close.png" className="h-10"></img></button> */}
            <div className="flex flex-row flex-wrap  gap-1 " >
                {pantonejs.map((pantone)=>(
                <div className="h-20 w-40 " id={id} style={{"background": pantone.color}} onClick={pantoneClickChange} key={pantone.pantoneId}>{pantone.pantoneId}</div>))
                }
            </div>
        </div>
    );
}