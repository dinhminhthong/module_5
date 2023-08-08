import axios from "axios";


export const getCart = async (cart)=> {
    await axios.get(`http://localhost:8080/product-detail/addCart/${productId}/${accountId}/${quantity}`)
}