import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as productService from '../service/ProductSerivce'
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";

function ProductEdit() {
    let navigate = useNavigate();
    let param = useParams();
    const [type, setType] = useState([]);
    const [findById,setFindById]= useState(null);

    useEffect(()=>{
        const getId = async ()=>{
            let rs = await productService.findById(param.id)
            setFindById(rs)
        }
        getId()
    },[param.id])

    useEffect(() => {
        const getTypeEdit = async () => {
            let rs = await productService.findAllType();
            setType(rs)
        }
        getTypeEdit()
    }, []);
    if(!findById){
        return null;
    }
    return (
        <>
            <h1 className='text-center'>Product Edit</h1>
            <Formik initialValues={{
                id:findById?.id,
                name:findById?.name,
                color:findById?.color,
                quantity:findById?.quantity,
                date:findById?.date,
                typeProduct:findById?.typeProduct
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("ko duoc de trong"),
                        quantity: Yup.number().required("khong duoc dien chu"),
                        date: Yup.string().matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/, 'Ngày không hợp lệ')
                    })}
                    onSubmit={async (value) => {
                        await productService.update(value)
                        alert("update thành công");
                        navigate('/')
                    }}
            >
                <Form>
                    <Field type='hidden' name='id'/>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' id='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='color'>Color</label>
                            <Field name='color' id='color' type='text' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Quantity</label>
                            <Field name='quantity' id='quantity' type='number' className='form-control'/>
                        </div>
                        <ErrorMessage name='quantity' id='quantity' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='date'>Date</label>
                            <Field name='date' id='date' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='date' id='date' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>TypeProduct</label>
                            <Field name='typeProduct' id='typeProduct' component='select' className='form-control'>
                                {
                                    type.map((pro,index)=>(
                                        <option key={index} value={pro.id}>
                                            {pro.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-danger'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default ProductEdit;