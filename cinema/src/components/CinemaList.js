import {useEffect, useState} from "react";

import * as cinemaService from "../service/CinemaService";

function CinameList() {
        const [cinemas,setCinemas] =useState([])
        const [movie,setMovie] = useState([])
    useEffect( ()=>{
        const getAll =async () =>{
            const result = await  cinemaService.findAll()
            setCinemas(result)
            return  cinemas
        }
        const getMovie = async () =>{
            const result = await cinemaService.findAllMoive()
            setMovie(result)
            return movie
        }
        getAll();
        getMovie();
    },[])
    return (
        <>
            <h1>List Cinema</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th className='col'>#</th>
                    <th className='col'>Name</th>
                    <th className='col'>NAMEmOVIE</th>
                    <th className='col'>PRICE</th>
                </tr>
                </thead>
                <tbody>
                {
                    cinemas.map( ( cinema,index) =>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{cinema.name}</td>
                            <td>{cinema.price}</td>
                            <td>
                                {
                                    movie.filter(ci =>ci.id ===cinema.nameMovieId)[0]?.name
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
export default CinameList;