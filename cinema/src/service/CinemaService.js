import axios from "axios";

export const findAll = async () =>{
    try {
        let result = await axios.get(`http://localhost:8000/cinema`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllMoive = async ()=>{
    try {
        let  result = await axios.get(`http://localhost:8000/movie`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}