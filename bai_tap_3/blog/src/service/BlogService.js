import axios from "axios";

export const findAll  = async (title)=>{
    try {
        let rs = await axios.get(`http://localhost:8000/blog`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (blog)=>{
    try {
        await axios.post(`http://localhost:8000/blog`,{ ...blog })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
      return (await axios.get(`http://localhost:8000/blog/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/blog/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const update = async (blog)=>{
    try {
        await axios.put(`http://localhost:8000/blog/${blog.id}`,{ ...blog })
    }catch (e) {
        console.log(e)
    }
}
 export const findByName = async (title)=>{
     try {
        let rs = await axios.get(`http://localhost:8000/blog?title_like=${title}`)
         return rs.data
     }catch (e) {
         console.log(e)
    }
 }