'use client'
import PantonePaper from "@/components/PantonePaper";
import PantoneSelector from "@/components/pantoneSelector";
import { useState, useEffect } from "react";


export default function Home() {
  const [colors, setColors] = useState({topLeft:"Color: Top Left", bottomRight: "Color: Bottom Right" });
  
  const [topLeft, settopLeft]= useState("rgb(249, 0, 76)");
  const [bottomRight, setbottomright]= useState("rgb(0, 255, 0)");

  useEffect(()=>{
    settopLeft(topLeft)

  },[topLeft, bottomRight])


  const updateColors = (colors: {topLeft: string;bottomRight: string;}, bottomRight: string, topLeft: string)=>{
    setColors(colors);
    settopLeft(topLeft);
    setbottomright(bottomRight);
  }
 
  
  return (
    <main className="bg-white h-screen w-screen flex flex-col ">
      <div className="">
        <h1 className=" text-pantone200"> Select two colors</h1>
        <form className="grid w-fit grid-cols-2 gap-1">
          <PantoneSelector onSelectorChange={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} ></PantoneSelector>
        </form>
      </div>
      <PantonePaper 
        colors={colors} 
        topLeft={topLeft} 
        bottomRight={bottomRight}></PantonePaper>
    </main>
  )
}
