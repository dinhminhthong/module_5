import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import * as phoneService from '../service/PhoneService'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function PhoneCreate() {
    const [type, setType] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const getType = async () => {
            let rs = await phoneService.findAllType();
            setType(rs)
        }
        getType()
    }, [])
    return (
        <>
            <Formik initialValues={
                {
                    name: '',
                    color: '',
                    quantity: '',
                    typePhone: 1
                }
            }
                    validationSchema={Yup.object({
                        name: Yup.string().required('khoong duoc de trong'),
                        quantity: Yup.number().required("khong duoc nhap chu")
                    })}
                    onSubmit={async (value) => {
                        await phoneService.save(value);
                        alert('them moi thanh cong');
                        navigate('/')
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' id='name' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='color'>Color</label>
                            <Field name='color' id='color' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='color' id='color' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Quantity</label>
                            <Field name='quantity' id='quantity' type='number' className='form-control'/>
                        </div>
                        <ErrorMessage name='quantity' id='quantity' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type Phone</label>
                            <Field name='typePhone' id='typePhone' component='select' className='form-control'>
                                {
                                    type.map( (ph,index)=>(
                                        <option key={index} value={ph.id}>
                                            {ph.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default PhoneCreate