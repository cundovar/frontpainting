import React from "react";
import { Link } from "react-router-dom";



const Navbar=()=>{


  // code pour definir la serachbar uniquement pour page posts
 
  // const currentLocation = useLocation();
  // const showSearchBar=currentLocation.pathname==='/posts'

 
 

    return(
      <>
         <div className="p-5 flex justify-end bg-red-400 h-full ">
        <div className="title_navbar">cundo docun</div>
         </div>
         <div>
          <div className="absolute">
          <ul className=" gap-5 bg-stone-500 w-56 flex flex-col items-center ">
            <li className="li_menu"><Link to='/'>accueil</Link> </li>
            <li className="li_menu"><Link to='/posts'>posts</Link> </li>
            <li className="li_menu"><Link to='/digital'>digital</Link> </li>
            <li className="li_menu"><Link to='/peinture'>peinture</Link> </li>
          

        
          
            <li className="li_menu">contact</li>
          </ul>
     

          </div>
         </div>
      
      </>
    )
}


export default Navbar