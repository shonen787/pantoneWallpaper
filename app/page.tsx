'use client'
import PantonePaper from "@/components/PantonePaper";
import PantoneSelector from "@/components/pantoneSelector";
import { useState, useEffect } from "react";
import domtoimage from 'dom-to-image';
import { createPortal } from "react-dom"
import Portal from "@/components/Portal";

export default function Home() {
  const [colors, setColors] = useState({topLeft:"Pantone 314", bottomRight: "Pantone 2747" });
  
  const [topLeft, settopLeft]= useState("rgb(0,130,155)");
  const [bottomRight, setbottomright]= useState("rgb(28,20,107)");

  const [topLeftModal, setTopLeftShowModal] = useState(false);
  const [bottomRightModal, setBottomRightShowModal] = useState(false);

   useEffect(()=>{},[topLeftModal,bottomRightModal])

  useEffect(()=>{


  },[topLeft, bottomRight])

  const updateColors = (colors: {topLeft: string;bottomRight: string;}, bottomRight: string, topLeft: string)=>{
    setColors(colors);
    settopLeft(topLeft);
    setbottomright(bottomRight);
  }
 
  const updateModal = (edge: string) => {
    if(edge ==="topLeft"){
      setTopLeftShowModal(true)
      return;
    }

    setBottomRightShowModal(true)
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
    <main className="bg-white h-screen wscreen flex flex-col" style={{zIndex: 0}}>

      <div className="p-2 bg-pantone5565  panponteselector">
        {/* <form className="flex gap-2 w-fit grid-cols-2">
          <PantoneSelector onSelectorChange={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} ></PantoneSelector>
        </form> */}
        <button onClick={tojpeg} className="bg-pantone587 rounded-md w-16">Save</button>
      </div>
      
      <PantonePaper 
        colors={colors} 
        topLeft={topLeft} 
        bottomRight={bottomRight}
        updateModal={updateModal}
      />

         {topLeftModal && createPortal(
            <Portal onClose={()=>setTopLeftShowModal(false)} colorSelection={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} id={"topLeft"}/>,
            document.body.querySelector("main") as Element
          )}
        
          {bottomRightModal && createPortal(
            <Portal onClose={()=>setBottomRightShowModal(false)} colorSelection={updateColors} colorProps={colors} topLeft={topLeft} bottomRight={bottomRight} id={"bottomRight"}/>,
            document.body.querySelector("main") as Element
          )}
    </main>
  )
}
