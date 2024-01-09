import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {Flip} from "gsap/Flip";

const Effectpaint2=()=>{


    useEffect(()=>{
        gsap.registerPlugin(Flip)
    })
useEffect(()=>{

    const card=document.querySelectorAll(".all")
    const state=Flip.getState(card)
    Flip.from(state, {
        duration: 0.7,
        scale: true,
        absolute: true,
        ease: "power1.inOut",
        stagger: 0.08,
        onEnter: (elements) =>gsap.to(elements, { opacity: 1, duration: 1 }),
        onLeave: (elements) => gsap.to(elements, { opacity: 0, duration: 1 }),
      });
})

// État pour suivre la couleur sélectionnée
    const [coulleurSelectionne,setCouleurSelectionne]=useState('all')

 // Gestionnaire d'événements pour les cases à cocher
const handleChangeCheck=(color)=>{
    setCouleurSelectionne(color)
}
    return(
        <div>
           <lavel>
            <input  
               type='checkbox'
               checked={coulleurSelectionne==='rouge'}
               onChange={()=>handleChangeCheck('rouge') }
               />
               rouge
           </lavel>
           <lavel>
            <input  
               type='checkbox'
               checked={coulleurSelectionne==='bleu'}
               onChange={()=>handleChangeCheck('bleu') }
               />
               bleu
           </lavel>
           <lavel>
            <input  
               type='checkbox'
               checked={coulleurSelectionne==='all'}
               onChange={()=>handleChangeCheck('all') }
               />
               all
           </lavel>
          <div className="flex">
           <div className="all" style={{display:coulleurSelectionne==='all' || coulleurSelectionne==='rouge' ? 'block' : 'none',color :'red'}}>
            rouge
           </div>
           <div  className="all"style={{display:coulleurSelectionne==='all' || coulleurSelectionne==='bleu' ? 'block' : 'none',color:'blue'}}>
            bleu
           </div>

          </div>



        </div>
    )
}


export default Effectpaint2