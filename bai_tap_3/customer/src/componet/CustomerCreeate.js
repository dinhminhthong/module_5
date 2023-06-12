import {Formik,Form,Field,ErrorMessage} from "formik";
import * as customerService from '../service/CustomerService';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as Yup from 'yup'
function CustomerCreate() {
    const [types,setTypes] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        const getType = async() =>{
            let result = await customerService.findAllType()
            setTypes(result)
        }
        getType()
    },[])
    return(
        <>
            <h1 className='text-center'>Customer Create</h1>
            <Formik initialValues={{
                name:'',
                date:'',
                typeCustomer:1
            }}
                    validationSchema={Yup.object({
                        name:Yup.string().required('khong duoc de trong')
                    })}
                    onSubmit={async (value)=>{
                        await customerService.save(value)
                        alert('thanh cong')
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
                            <label htmlFor='date'>Date</label>
                            <Field name='date' id='date' type='date' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type Customer</label>
                            <Field name='typeCustomer' id='typeCustomer' component='select' className='form-control'>
                                {
                                    types.map((values,index)=>(
                                        <option key={index} value={values.id}>
                                            {values.type}
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
export default CustomerCreate;