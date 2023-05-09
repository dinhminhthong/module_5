import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/employees`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/employeeTypes`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (employee) => {
    try {
        await axios.post(`http://localhost:8000/employees`, {...employee })
    } catch (e) {
        console.log(e)
    }
}