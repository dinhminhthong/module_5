import axios from "axios";

export const deleteBook = async (id)=>{
    await axios.delete(`http://localhost:8000/book/${id}`)
        .catch(err => {
            console.log(err)
        })
}



export const findById=async (id)=>{
    try {
        const book= await axios.get(`http://localhost:8000/book/${id}`);
        console.log(book)
        return book;
    }catch (e) {
        console.log(e)
    }
}

export const editBook =async (book)=>{
    try {
        await axios.patch(`http://localhost:8000/book/${book.id}`,{ ...book })
    }catch (e) {
        console.log(e)
    }
}