import {useNavigate} from "react-router-dom";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {RotatingLines} from 'react-loader-spinner';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function BookCreate() {
    let navigate = useNavigate();


    return (
        <>
            <Formik
                initialValues={{name: '', author: '', price: ''}}
                validationSchema={Yup.object( {
                    name: Yup.string()
                        .required('Ko được để trống'),
                    price: Yup.number()
                        .required('Nhập giá tiền'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        axios.post(`http://localhost:8000/book`, {...values})
                            .then(() => {
                                setSubmitting(false);
                                toast("thêm thành công!");
                                navigate('/')
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    },500)
                }}
             >
                {({isSubmitting})=>(
                    <Form>
                        <h1>Book Create</h1>
                        <div className='mb-3'>
                            <label htmlFor='bookName' className='form-label'>Name</label>
                            <Field  type ='text' className='form-control' id='bookName'
                                   name='name' />
                            <ErrorMessage name='name' component='span' className='form-err'/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='bookAuthor' className='form-label'>Author</label>
                            <Field type ='text' className='form-control' id='bookAuthor'
                                   name='author'/>
                        </div>

                        <div className='mb-3'>
                        <label htmlFor='bookPrice' className='form-label'>Price</label>
                        <Field type ='number' className='form-control' id='bookPrice'
                               name='price'/>
                        <ErrorMessage name='price' component='span' className='form-err'/>
                    </div>
                        {
                            isSubmitting ?
                                <RotatingLines
                                    strokeColor='grey'
                                    strokeWidth='5'
                                    animationDuration='0.75'
                                    width='50'
                                    visible={true}
                                    />
                                    :
                                <button type='submit' className='btn-primary'>Submit</button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default BookCreate;