
import axios from 'axios';
 export async function getAllManufacturers() {
    try{
        const res=await axios.get("http://localhost:8080/manufactor")
        return res.data;
    }catch (e){
        return [];
    }
 }