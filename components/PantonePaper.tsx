'use client'
interface paperprops{
    colors: {topLeft: string,bottomRight: string},
    topLeft: string,
    bottomRight: string
}

export default function PantonePaper({colors, topLeft, bottomRight}:paperprops){
    return(
        <div className={` grow flex items-center place-content-center`} style={{background: `linear-gradient(to right bottom,${topLeft} , ${bottomRight})`}} id="pantone-paper">
            <div className="   ">
            {/* <div className="grid grid-cols-12 grid-rows-6 grow "> */}
                <div className="grid  grid-row-3 grid-flow-col border-4 border-solid h-80 w-80 p-2 border-pantone182 " style={{background: `linear-gradient(to right bottom,${topLeft} , ${bottomRight})`}} id="pantone-paper">
                    <p className="text-pantone148 text-left text-xl">{colors.topLeft}</p>
             
                    <div className="flex place-items-end ">
                        <p className="grow text-pantone148 text-right text-xl">{colors.bottomRight}</p> 
                    </div>
                </div>
                
                {/* <div id="pantone-box-1" className="border-2 border-black border-solid col-start-6 col-end-8 row-start-1 row-end-3 pl-3">{colors.topLeft}</div>
                <div id="pantone-box-2" className="border-2 border-black border-solid col-start-6 col-end-8 row-start-2 row-end-4 text-right pr-3">{colors.bottomRight}</div> */}
            </div>
        </div>)
}