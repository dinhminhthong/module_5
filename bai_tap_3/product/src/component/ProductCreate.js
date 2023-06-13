import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as productService from '../service/ProductSerivce'
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

function ProductCreate() {
    let navigate = useNavigate();
    const [type, setType] = useState([]);
    useEffect(() => {
        const getType = async () => {
            let rs = await productService.findAllType();
            setType(rs)
        }
        getType()
    }, [])
    return (
        <>
            <h1 className='text-center'>Product Create</h1>
            <Formik initialValues={{
                name: '',
                color: '',
                quantity: '',
                date: '',
                typeProduct: 1
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("ko duoc de trong"),
                        quantity: Yup.number().required("khong duoc dien chu"),
                        date: Yup.string().matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/ ).required('không đúng định dạng ngày tháng năm')
                    })}
                    onSubmit={async (value) => {
                        await productService.save(value)
                        alert("thêm mới thành công");
                        navigate('/')
                    }}
            >
            <Form>
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
export default ProductCreate;