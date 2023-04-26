import axios from 'axios'
const BOOK_URL ="http://localhost:8000";

export const findAll = async () =>{
    try {
        let  result = await axios.get(`http://localhost:8000/books`)
        return result.data
    }catch (e) {
        console.log(e)
    }
};
export const findAllType = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/typeBook`)
        return result.data
    }catch (e) {
        console.log(e)
    }
};
export const createBook = (book) =>{
    return axios.post(`${BOOK_URL}/books`,book);
};