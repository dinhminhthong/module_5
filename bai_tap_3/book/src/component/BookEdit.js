import {Formik, Form, Field, ErrorMessage} from "formik";
import * as bookService from "../service/BookService";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
function BookEdit() {
    const [types, setTypes] = useState([]);
    const [findById, setFindById] = useState();
    let navigate = useNavigate();
    let param = useParams();

    useEffect(() => {
        const getId = async () => {
            let rs = await bookService.findById(param.id)
            debugger
            setFindById(rs)
        }
        getId()
    }, [param.id]);

    useEffect(() => {
        const getTypeBook = async () => {
            let result = await bookService.findAllType();

            setTypes(result)
        }
        getTypeBook()
    }, []);

    if (!findById) {
        return null
    }
    return (
        <>
            <h1 className='text-center'>Book Update</h1>
            <Formik initialValues={{
                id: findById?.id,
                name: findById?.name,
                authur: findById?.authur,
                typeBook: findById?.typeBook
            }}

                    onSubmit={async (values) => {
                        await bookService.update(values)
                        // console.log(values)
                        alert("thành coong");
                        navigate('/')
                    }}
            >
                <Form>
                    <Field type='hidden' name="id"/>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' id='name' className='text-bg-danger' component='span'
                                     />
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='authur'>Authur</label>
                            <Field name='authur' id='authur' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='authur' id='authur' className='text-bg-danger' component='span'
                                    />
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type Book</label>
                            <Field name='typeBook' id='typeBook' component='select' className='form-control'>
                                {
                                    types.map((book, index) => (
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

export default BookEdit;