import * as musicService from '../service/MusicService';
import {Formik,Form,Field} from "formik";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
function MusicList() {
    const [musics,setMusics] = useState([]);
    const [types,setType] = useState([]);
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await musicService.findAll()
            setMusics(rs)
        }
        const getAllType = async ()=>{
            let rs = await musicService.findAllType()
            setType(rs)
        }
        getAll();
        getAllType()
    },[])
    const handleDelete = async (id)=>{
        await musicService.remove(id)
        let rs = await musicService.findAll()
        setMusics(rs)
    }
    return(
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <Formik initialValues={{name:''}}
                    onSubmit={(value)=>{
                       const search = async ()=>{
                           let rs = await musicService.searchByName(value.name)
                           setMusics(rs)
                       }
                       search()
                    }}
                    >
                <Form>
                    <Field name='name'
                           type='search'
                           placeholder='search...'/>
                           <button type='submit' className='btn btn-primary'>Search</button>
                </Form>
            </Formik>
            <h1 className='text-center'>Music List</h1>
            <table className='table table-striped'>
                <thead className='table-danger'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Type music</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    musics.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.author}</td>
                            <td>
                                {
                                    types.filter(mu=>mu.id == value.typeMusic)[0]?.type
                                }
                            </td>
                            <td>
                                <button className='btn btn-danger m-2' onClick={()=>handleDelete(value.id)}>Delete</button>

                                <Link to={`edit/${value.id}`}className='btn btn-primary'>Edit</Link>
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