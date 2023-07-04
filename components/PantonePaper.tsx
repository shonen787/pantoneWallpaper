'use client'
interface paperprops{
    colors: {topLeft: string,bottomRight: string},
    topLeft: string,
    bottomRight: string
}

export default function PantonePaper({colors, topLeft, bottomRight}:paperprops){
    return(
        <div className={`border-2 border-black border-solid grow flex items-center`} style={{background: `linear-gradient(to right bottom,${topLeft} , ${bottomRight})`}}>
            <div className="grid grid-cols-12 grid-rows-6 grow ">
                <div id="pantone-box-1" className="border-2 border-black border-solid col-start-6 col-end-8 row-start-1 row-end-3 pl-3">{colors.topLeft}</div>
                <div id="pantone-box-2" className="border-2 border-black border-solid col-start-6 col-end-8 row-start-2 row-end-4 text-right pr-3">{colors.bottomRight}</div>
            </div>
        </div>)
}