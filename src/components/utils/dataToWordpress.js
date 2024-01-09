import axios from "axios";


export const DataToWordpress=async(formdata)=>{

    try{
        const response=await axios.post('http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/contact-form')
        console.log("data form",response.data)
    }catch(e){
        console.error('erreur evoir formulaire',e)
    }
}