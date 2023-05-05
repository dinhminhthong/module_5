import axios from "axios";
import {useAccordionButton} from "react-bootstrap";

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
   try {
       await axios.post(`http://localhost:8000/class`,{ ...student })
   }catch (e) {
       console.log(e)
   }
}