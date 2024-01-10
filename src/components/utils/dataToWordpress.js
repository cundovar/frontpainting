import axios from "axios";


export const DataToWordpress=async(formdata)=>{

    try{
        const response = await axios.post('/wp-admin/admin-ajax.php', {
            action: 'handle_contact_form_submission',
            ...formdata
        });
        console.log("data form",response.data)
    }catch(e){
        console.error('erreur envoie formulaire',e)
    }
}