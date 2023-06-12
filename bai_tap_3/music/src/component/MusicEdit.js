import {Formik, Field, Form, ErrorMessage} from "formik";
import * as musicService from '../service/MusicService';
import * as Yup from 'yup';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

function MusicEdit() {
    const [type, setType] = useState([])
    const [findById,setFindById] = useState();
    let navigate = useNavigate();
    let param = useParams()
    useEffect( ()=>{
        const getId = async ()=>{
            let rs = await musicService.findById(param.id)
            setFindById(rs)
        }
        getId()
    },[param.id])

    useEffect(() => {
        const getTypeId = async () => {
            let rs = await musicService.findAllType();
            setType(rs)
        }
        getTypeId()
    }, []);
    if (!findById){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id:findById?.id,
                name:findById?.name,
                author:findById ?.author,
                typeMusic:findById?.typeMusic
            }}
                    validationSchema={Yup.object({
                        name:Yup.string().required('không được để trống')
                    })}
                    onSubmit={async (value) => {
                        await musicService.update(value)
                        alert('thêm mới thành công')
                        navigate('/')
                    }}
            >
                <Form>
                    <Field type='hidden' name ='id' id='id'/>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' id='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <Field name='author' id='author' type='text' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type music</label>
                            <Field name='typeMusic' id='typeMusic' component='select' className='form-control'>
                                {
                                    type.map( (mu,index)=>(
                                        <option key={index} value={mu.id}>
                                            {mu.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>

                </Form>
            </Formik>
        </>
    )
}

export default MusicEdit;