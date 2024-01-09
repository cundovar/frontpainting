import React, { useState } from "react";
import { DataToWordpress } from "../../utils/dataToWordpress";



const Contact=()=>{

    const [data,setData]=useState({
        name:"",
        message:""
    })

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        // Envoyer les données au backend WordPress ici
        DataToWordpress(data)
    }


    return(
        <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="name" value={data.name} onChange={handleChange} />
        </label>
       
        <label>
          Message:
          <textarea name="message" value={data.message} onChange={handleChange} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    )
}

export default Contact