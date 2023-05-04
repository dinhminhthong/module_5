import axios from "axios";

export const findAll = async ()=>{
  try {
      let  result = await axios.get(`http://localhost:8000/student`)
      return result.data
  }catch (e) {
      console.log(e)
  }
}
export const findAllClass = async ()=>{
    try {
        let  result = await axios.get(`http://localhost:8000/class`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (student)=>{
    await axios.post(`http://localhost:8000/student ${student}`)
}