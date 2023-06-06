import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import * as bookService from "../service/BookService";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function BookCreate() {
    const [types,setTypes] = useState([])
    let navigate = useNavigate();
    useEffect( ()=>{
        const getType = async ()=>{
            let result = await bookService.findAllType();
            setTypes(result)
        }
        getType()
    },[])
    return(
        <>
            <h1 className='text-center'>Book Create</h1>
            <Formik initialValues={{name:'',authur:'',typeBook:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required('không được để trống'),
                        authur:Yup.string().required("không được để trống")
                    })}
                    onSubmit={ (values)=>{
                        const crate = async ()=>{
                            await bookService.save(values)
                            alert("thêm mới thành công")
                            navigate('/')
                        }
                        crate()
                    }}
                    >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' type='text' className ='form-control'/>
                        </div>
                        <ErrorMessage name='name' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='authur'>Authur</label>
                            <Field name='authur' type='text' className ='form-control'/>
                        </div>
                        <ErrorMessage name='authur' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type Book</label>
                            <Field name='typeBook' component='select' className ='form-control'>
                                {
                                    types.map((book,index)=>(
                                        <option key={index} value={book.id}>
                                            {book.type}
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
export default BookCreate