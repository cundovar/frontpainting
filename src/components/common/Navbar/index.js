import React from "react";
import { Link } from "react-router-dom";
import EffectPaint from "../../component_page/home/effectPaint";



const Navbar=()=>{


  // code pour definir la serachbar uniquement pour page posts
 
  // const currentLocation = useLocation();
  // const showSearchBar=currentLocation.pathname==='/posts'

 
 

    return(
      <>
         <div className="p-5 gridNav ">
         <EffectPaint/>
        <div className="title_navbar flex  justify-end">
          <div>
          cundo docun

          </div>
          </div>
         </div>
         <div>
          <div className="absolute w-1/6">
          <ul className=" gap-5  flex flex-col items-center ">
            <li className="li_menu"><Link to='/'>accueil</Link> </li>
            <li className="li_menu"><Link to='/posts'>posts</Link> </li>
            <li className="li_menu"><Link to='/digital'>digital</Link> </li>
            <li className="li_menu"><Link to='/peinture'>peinture</Link> </li>
            <li className="li_menu"><Link to='/contact'>contact</Link> </li>
          </ul>
     

          </div>
         </div>
      
      </>
    )
}


export default Navbar