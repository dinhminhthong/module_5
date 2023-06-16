import {Formik, Form, Field, ErrorMessage} from "formik";
import * as productService from '../service/ProdcutService'
import * as Yup from "yup"
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";

function ProductCreate() {
    let navigate = useNavigate();
    const [type, setType] = useState([])
    useEffect(() => {
        const getType = async () => {
            let rs = await productService.findAllType()
            setType(rs)
        }
        getType();
    }, []);
    return (
        <>
            <Formik initialValues={{code: '', name: '', moTa: '', typeProduct: '', price: '', quantity: '', date: ''}}
                    validationSchema={Yup.object({
                        code: Yup.string().required("nhập mã sản phẩm"),
                        name: Yup.string().required('không được để trống'),
                        moTa: Yup.string().required('không được để trống'),
                        typeProduct: Yup.string().required('phải chọn thể loại'),
                        price: Yup.string().required("phải nhập"),
                        quantity: Yup.number().min(0).required('lớn hơn 0'),
                        date: Yup.string().required()
                    })}
                    onSubmit={async (values) => {
                        await productService.save({
                            ...values,
                            typeProduct: +values.typeProduct
                        });
                        alert("thêm mới thành công");
                        navigate('/')
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='code'>Mã sản phẩm</label>
                            <Field type='text' name='code' className='form-control'/>
                        </div>
                        <ErrorMessage name='code' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' name='name' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='moTa'>Mô tả</label>
                            <Field type='text' name='moTa' className='form-control'/>
                        </div>
                        <ErrorMessage name='moTa' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Thể loại</label>
                            <Field component='select' name='typeProduct' className='form-control'>
                                <option value={""}>---Chọn---</option>
                                {
                                    type.map((pro, index) => (
                                        <option key={index} value={pro.id}>
                                            {pro.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <ErrorMessage name='typeProduct' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='price'>Giá sản phẩm</label>
                            <Field type='text' name='price' className='form-control'/>
                        </div>
                        <ErrorMessage name='price' component='span' className='text-bg-danger'/>
                    </div>


                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Số lượng</label>
                            <Field type='number' name='quantity' className='form-control'/>
                        </div>
                        <ErrorMessage name='quantity' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='date'>ngày nhập</label>
                            <Field type='text' name='date' className='form-control'/>
                        </div>
                        <ErrorMessage name='date' component='span' className='text-bg-danger'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>

                </Form>
            </Formik>               
        </>
    )
}

export default ProductCreate;