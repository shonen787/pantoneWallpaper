'use client'
import PantonePaper from "@/components/PantonePaper";
import PantoneSelector from "@/components/pantoneSelector";
import { useState, useEffect } from "react";
import domtoimage from 'dom-to-image';

export default function Home() {
  const [colors, setColors] = useState({topLeft:"Color: Top Left", bottomRight: "Color: Bottom Right" });
  
  const [topLeft, settopLeft]= useState("rgb(249, 0, 76)");
  const [bottomRight, setbottomright]= useState("rgb(0, 255, 0)");

  useEffect(()=>{


  },[topLeft, bottomRight])



  const updateColors = (colors: {topLeft: string;bottomRight: string;}, bottomRight: string, topLeft: string)=>{
    setColors(colors);
    settopLeft(topLeft);
    setbottomright(bottomRight);
  }
 
  function tojpeg() {
    let node = document.getElementById('pantone-paper');
    console.log(node)
    if (node != null){
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }
  }

  
  return (
    <main className="bg-white h-screen w-screen flex flex-col ">
      <div className="">
        <h1 className=" text-pantone200"> Select two colors</h1>
        <form className="grid w-fit grid-cols-2 gap-1">
          <PantoneSelector onSelectorChange={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} ></PantoneSelector>
        </form>
        <button onClick={tojpeg}>Save as Image</button>
      </div>
      <PantonePaper 
        colors={colors} 
        topLeft={topLeft} 
        bottomRight={bottomRight}></PantonePaper>
    </main>
  )
}
