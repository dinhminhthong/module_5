import {useEffect, useState} from "react";
import * as tiviService from "../TiviService/TiviSerivice";

function TiviList() {
    const [tivis,setTivis] =useState([])
    const [types,setType] = useState([])
    useEffect( () =>{
        const getAll = async ()=>{
            const result = await tiviService.findAll();
            setTivis (result)
            return tivis;
        }
        const getType = async () =>{
            const result = await tiviService.findAllType()
            setType (result)
            return types
        }
        getAll();
        getType();
    },[])
    return (
        <>
            <h1>List tivi</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Tivi type</th>
                    <th>Producer</th>
                </tr>
                </thead>
                <tbody>
                {
                    tivis.map( (value,index) =>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.producer}</td>
                            <td>
                                {
                                    types?.filter(ti=>ti.id ===value.tiviTypeId)[0]?.type
                                }
                            </td>

                        </tr>
                    ))
                }

                </tbody>
            </table>
            </>
    )

}
export  default TiviList;