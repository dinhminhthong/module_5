import axios from "axios";

export const postLogin = async (request) => {
    try {
        let rs = await axios.post(`http://localhost:8080/api/public/login`, request);
        return rs.data
    } catch (e) {
        console.log(e)
    }
}