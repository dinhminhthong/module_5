import axios from "axios";
export const findAll = async () =>{
    try {
        let result = await  axios.get(`http://localhost:8000/customer`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let result =await axios.get(`http://localhost:8000/customerType`)
    }catch (e) {
        console.log(e)
    }
}