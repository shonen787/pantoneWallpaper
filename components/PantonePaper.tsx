interface paperprops{
    colors: {topLeft: string,bottomRight: string},
    topLeft: string,
    bottomRight: string
    updateModal: (edge: string)=>void,
}

export default function PantonePaper({colors, topLeft, bottomRight, updateModal}:paperprops){
    return(
        <div className={` grow flex  items-center place-content-center pantonepaper`} style={{background: `linear-gradient(to right bottom,${topLeft} , ${bottomRight})`}} id="pantone-paper">
                <div className="grid grid-rows-2 grid-cols-2 rounded-md" style={{background: `linear-gradient(to right bottom,${topLeft} , ${bottomRight})`}}>
                    <div className="grid items-center border-0 border-solid h-40 w-60 p-2 border-white rounded-md border-t-0 border-l-0  hover:bg-black" id="pantone-paper" onClick={()=>updateModal("topLeft")}>
                        <p className="text-pantone148 text-center  text-xl" >{colors.topLeft}</p>
                        <p className="text-pantone148 text-center  text-xl">{topLeft}</p>
                    </div>
                    <div className="col-start-1 col-end-2"></div>

                    <div className=" grid items-center border-0 border-solid h-40 w-60 p-2 border-white rounded-md  border-b-0 border-r-0 hover:bg-black"  id="pantone-paper" onClick={() =>updateModal("bottomRight")}>
                        <p className="text-pantone148 text-center  text-xl">{colors.bottomRight}</p>
                        <p className="text-pantone148 text-center  text-xl">{bottomRight}</p>
                    </div>
                    <div></div>
                </div>
                

        </div>)
}