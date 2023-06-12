import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/customers`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/types`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findByName = async (name)=>{
    try {
        let rs = await axios.get(`http://localhost:8000/customers?name_like=${name}`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (customer)=>{
    try {
        await axios.post(`http://localhost:8000/customers`,{ ...customer })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/customers/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update =async (customer)=>{
    try {
        await axios.put(`http://localhost:8000/customers/${customer.id}`,{ ...customer })
    }catch (e) {
        console.log(e)
    }
}