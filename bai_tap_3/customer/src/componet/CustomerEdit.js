import {Formik,Form,Field,ErrorMessage} from "formik";
import * as customerService from '../service/CustomerService';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as Yup from 'yup'
function CustomerEdit() {
    const [types,setTypes] = useState([])
    const [findById,setFindById] =useState(null)
    let navigate = useNavigate();
    let param = useParams()

  useEffect(()=>{
      const getId = async ()=>{
          let rs = await customerService.findById(param.id)
          setFindById(rs)
      }
      getId()
  },[param.id])

    useEffect(()=>{
        const getTypeUpdate = async() =>{
            let result = await customerService.findAllType()
            setTypes(result)
        }
        getTypeUpdate()
    },[]);
    if (!findById){
        return null
    }
    return(
        <>
            <h1 className='text-center'>Customer Edit</h1>
            <Formik initialValues={{
                id:findById?.id,
                name:findById?.name,
                date:findById?.date,
                typeCustomer:findById?.typeCustomer
            }}
                    validationSchema={Yup.object({
                        name:Yup.string().required('khong duoc de trong')
                    })}
                    onSubmit={async (value)=>{
                      await customerService.update(value)
                        alert('thanh cong')
                        navigate('/')
                    }}
            >
                <Form>
                    <Field name='id' type='hidden'/>
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
export default CustomerEdit;