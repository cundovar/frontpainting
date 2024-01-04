import React, { useState } from "react";


const Hello=(props)=>{
    const  [fname,setFname]=useState('');
    console.log({fname,setFname})
   


console.log(props.name)

    return(
        <>

        <h1>hello {props.name} </h1>
        <p>{fname} </p>
        <input type="text" onChange={(e)=> setFname(e.target.value) }/>
        </>
          

    )
}

export default Hello