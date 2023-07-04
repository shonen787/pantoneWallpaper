import pantonejs from "@/out.json"
import clsx from "clsx";
import { ChangeEvent } from "react"

interface PantoneProps{
    onSelectorChange: (colors: {topLeft: string;bottomRight: string;},topLeft: string,
        bottomRight: string)=> void;
    colorProps: {topLeft: string,bottomRight: string}
    topLeft: string,
    bottomRight: string,
}

export default function PantoneSelector({onSelectorChange, colorProps, bottomRight,topLeft }: PantoneProps){

const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) =>{
    e.preventDefault();

    const colors = structuredClone(colorProps)
    let colorSelectorTopLeft = topLeft;
    let colorSelectorBottomRight = bottomRight;
    if (e.target.id === "color-top-left"){

        colors.topLeft = e.target.value;
        colorSelectorTopLeft = document.getElementById(e.target.value)?.style.background || " ";
        
    }
    if (e.target.id === "color-bottom-right"){

        colors.bottomRight = e.target.value;
        colorSelectorBottomRight = document.getElementById(e.target.value)?.style.background || " ";
    }

    onSelectorChange(colors, colorSelectorBottomRight,colorSelectorTopLeft);
}




return(
    <>
    <label className="text-amber-900">Color 1</label>
          <select id="color-top-left" className="text-black" onChange={handleFilterChange}>
            {pantonejs.map((pantone) => (
                <option key={pantone.pantoneId} id={pantone.pantoneId} style={{"background": pantone.color}}>{pantone.pantoneId}</option>
            ))}
          </select>
    <label className="text-amber-900">Color 2</label>
        <select id="color-bottom-right" className="text-black" onChange={handleFilterChange}>
            {pantonejs.map((pantone) => (
                <option className="text-black" key={pantone.pantoneId}
                style={{"background":pantone.color}}>{pantone.pantoneId}</option>
            ))}
        </select>
    </>
)

}

