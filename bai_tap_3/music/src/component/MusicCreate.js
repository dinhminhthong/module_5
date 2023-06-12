import {Formik, Field, Form, ErrorMessage} from "formik";
import * as musicService from '../service/MusicService';
import * as Yup from 'yup';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function MusicCreate() {
    const [type, setType] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const getType = async () => {
            let rs = await musicService.findAllType();
            setType(rs)
        }
        getType()
    }, [])
    return (
        <>
            <Formik initialValues={{
                name: '',
                author: '',
                typeMusic: 1
            }}
                    validationSchema={Yup.object({
                        name:Yup.string().required('không được để trống')
                    })}
                    onSubmit={async (value) => {
                        await musicService.save(value)
                        alert('thêm mới thành công')
                        navigate('/')
                    }}
            >
                <Form>
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

export default MusicCreate;