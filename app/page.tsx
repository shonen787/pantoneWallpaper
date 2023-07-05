'use client'
import PantonePaper from "@/components/PantonePaper";
import PantoneSelector from "@/components/pantoneSelector";
import { useState, useEffect } from "react";
import domtoimage from 'dom-to-image';

export default function Home() {
  const [colors, setColors] = useState({topLeft:"Pantone 314", bottomRight: "Pantone 2747" });
  
  const [topLeft, settopLeft]= useState("rgb(0,130,155)");
  const [bottomRight, setbottomright]= useState("rgb(28,20,107)");

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
        link.download = 'pantone-wallpaper.jpeg';
        link.href = dataUrl;
        link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }
  }

  
  return (
    <main className="bg-white h-screen wscreen flex flex-col ">
      <div className="p-2 bg-pantone5565 ">

        <form className="flex gap-2 w-fit grid-cols-2 gap-1">
          <PantoneSelector onSelectorChange={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} ></PantoneSelector>
        </form>
        <button onClick={tojpeg} className="bg-pantone587 rounded-md w-16">Save</button>
      </div>
      <PantonePaper 
        colors={colors} 
        topLeft={topLeft} 
        bottomRight={bottomRight}></PantonePaper>
    </main>
  )
}
