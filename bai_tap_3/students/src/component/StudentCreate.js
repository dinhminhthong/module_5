import {Formik, Form, Field} from "formik";
import * as studentService from '../service/StudentService'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function StudentCreate() {
    const [clas, setClas] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const getClass = async () => {
            let rs = await studentService.findAllClass();
            setClas(rs)
        }
        getClass()
    }, [])
    return (
        <>
            <Formik initialValues={{
                name: '',
                gender: '',
                point: '',
                className: 1
            }}
                    onSubmit={async (values) => {
                        await studentService.save(values)
                        alert('them moi thanh cong')
                        navigate('/')
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <Field name='gender' id='gender' type='text' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='point'>point</label>
                            <Field name='point' id='point' type='text' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Class name</label>
                            <Field name='className' id='className' component='select' className='form-control'>
                                {
                                    clas.map( (stu,index)=>(
                                        <option key={index} value={stu.id}>
                                            {stu.class}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default StudentCreate;