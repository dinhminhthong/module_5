import axios from "axios";
const BOOK_URL = "http://localhost:8000/book";
export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/book`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async () =>{
    try {
        let result = await axios.get(`http://localhost:8000/bookType`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export  const save = async (book)=>{
  return axios.post(`${BOOK_URL}/books`,book);
};