import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/post`)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}