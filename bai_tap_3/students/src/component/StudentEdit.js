import {Formik, Form, Field} from "formik";
import * as studentService from '../service/StudentService'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

function StudentEdit() {
    const [clas, setClas] = useState([])
    const [findById,setFindById] = useState(null)
    let navigate = useNavigate();
    let param = useParams();
    useEffect(()=>{
        const getId = async ()=>{
            let rs = await studentService.findById(param.id)
            setFindById(rs)
        }
        getId()
    },[param.id])

    useEffect(() => {
        const getClassEidt = async () => {
            let rs = await studentService.findAllClass();
            setClas(rs)
        }
        getClassEidt()
    }, []);
    if (!findById){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id:findById?.id,
                name: findById?.name,
                gender:findById?.gender,
                point:findById?.point,
                className:findById?.className
            }}
                    onSubmit={async (values) => {
                        await studentService.update(values)
                        alert('update thanh cong')
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

export default StudentEdit;