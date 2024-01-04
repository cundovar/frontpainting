import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../pages/Posts";


const Single=()=>{

   const {id}= useParams();
   const [post,setPost]=useState({})
   useEffect(()=>{
    let url=  `http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/posts/${id}`
    axios.get(url).then(res=>{
        console.log('res',res)
        setPost(res.data)
    }).catch((err)=>{
        console.log('error:',err.message)
    })
   },[])

    return(
        <>
        <div>
        single post {id}

        </div>
      {Object.keys(post).length ? (
       <div className="p-5">
        <div>
      

        </div>
        <div>
            <h1 className="text-2xl font-bold">{post.title.rendered} </h1>
        </div>
      
        <div dangerouslySetInnerHTML={{__html:post.content.rendered}}>

        </div>
       </div>
      ):("loading...")}
        </>
    )
}

export default Single