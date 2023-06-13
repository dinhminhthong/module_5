import * as clothingService from "../service/ClothingService";
import {useEffect, useState} from "react";

function ClothingList() {
    const [clothings,setClothings] = useState([])
    const [types,setTypes] = useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await clothingService.findAll();
            setClothings(rs)
        }
        const getAllType = async ()=>{
            let rs = await clothingService.findAllTypes();
            setTypes(rs)
        }
        getAll();
        getAllType();
    },[])
    return (
        <>
            <h1>List Clothing</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Name</th>
                </tr>
                <tbody>
                {
                    clothings.map()
                }
                </tbody>
                </thead>
            </table>
        </>
    )
}

export default ClothingList;