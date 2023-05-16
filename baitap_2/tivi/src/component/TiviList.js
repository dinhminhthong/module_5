import * as tiviService from "../service/TiviService";
import {useEffect, useState} from "react";

function TiviList() {
    const [tivis, setTivis] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let rs = await tiviService.findAll();
            setTivis(rs)
        }
        const getAllType = async () => {
            let rs = await tiviService.findAllType();
            setTypes(rs)
        }
        getAll()
        getAllType()
    }, []);
    const handleDelete = async (id)=>{
        await tiviService.remove(id)
        let result  = await tiviService.findAll();
        setTivis(result)
    }
    return (
        <>
            <h1 className='text-center'>List Tivi</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>TYPES</th>
                </tr>
                </thead>
                <tbody>
                {
                    tivis.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.date}</td>
                            <td>
                                {
                                    types.filter(ti =>ti.id == value.tiviType)[0]?.type
                                }
                            </td>
                            <td>
                                <a className='btn btn-danger' onClick={()=>handleDelete(value.id)}>DELETE</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default TiviList;