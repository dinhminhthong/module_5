import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/posts`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}