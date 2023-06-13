import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import * as phoneService from '../service/PhoneService'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

function PhoneEdit() {
    const [type, setType] = useState([]);
    const [findById,setFindById] = useState(null);
    let navigate = useNavigate();
    let param = useParams();

    useEffect(()=>{
        const getId = async ()=>{
            let result = await phoneService.findById(param.id)
            setFindById(result)
        }
        getId()
    },[param.id])

    useEffect(() => {
        const getTypeUpdate = async () => {
            let rs = await phoneService.findAllType();
            setType(rs)
        }
        getTypeUpdate()
    }, []);
    if (!findById){
        return null
    }
    return (
        <>
            <Formik initialValues={
                {
                    id:findById?.id,
                    name:findById?.name,
                    color:findById?.color,
                    quantity:findById?.quantity,
                    typePhone:findById?.typePhone
                }
            }
                    validationSchema={Yup.object({
                        name: Yup.string().required('khoong duoc de trong'),
                        quantity: Yup.number().required("khong duoc nhap chu")
                    })}
                    onSubmit={async (value) => {
                        await phoneService.update(value);
                        alert('update thanh cong');
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
                            <Field name='quantity' id='quantity' type='text' className='form-control'/>
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

export default PhoneEdit;