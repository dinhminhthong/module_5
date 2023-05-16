import {useEffect, useState} from "react";
import * as musicService from "../service/MusicService"
function MusicList() {
    const [musics, setMusic] = useState([]);
    const [types ,setTypes] = useState([]);
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await musicService.findAll();
            setMusic(rs)
        }
        const getAllType = async ()=>{
            let rs = await musicService.findAllType()
             setTypes(rs)
        }
        getAll();
        getAllType();
    },[]);
    const handleMusic = async (id)=>{
        await musicService.remove(id);
        let rs = await musicService.findAll();
        setMusic(rs);
    };
    return (
        <>
        <h1 className='text-center'>List Music</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AUTHOR</th>
                    <th>TYPE</th>
                </tr>
                </thead>
                <tbody>
                {
                    musics?.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.author}</td>
                            <td>
                                {
                                    types?.filter(mu => mu.id == value.musicType)[0]?.type
                                }
                            </td>
                            <td>
                                <a className='btn btn-danger' onClick={()=>handleMusic(value.id)}>DELETE</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default MusicList;