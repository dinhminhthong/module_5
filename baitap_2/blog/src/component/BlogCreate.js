import React, {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import * as blogService from "../service/BlogService"
import {useNavigate} from "react-router";

function BlogCreate() {
    const [type, setType] = useState()
    let navigate = useNavigate();
    useEffect(() => {
        const getTypeBLog = async () => {
            let result = await blogService.findAllType();
            setType(result)
        }
        getTypeBLog()
    }, [])

    return (
        <>
            <h1 className='text-center'>Blog Create</h1>
            <Formik initialValues={{title: '', content: '', type: ''}}
                    validationSchema={Yup.object({
                        title: Yup.string().required(("không được bỏ trống")),
                        content: Yup.string().required(("không được bỏ trống")),
                    })}
                    onSubmit={(value) => {
                        const create = async () => {
                            await blogService.save(value)
                            alert("thêm mới thành công")
                            navigate('/')
                        }
                        create()
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor="title">Title</label>
                            <Field type="text"
                                   className="form-control" name="title" id="title" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <div>
                            <ErrorMessage name="title" component="span" className="text-bg-danger"/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor="content">Content</label>
                            <Field type="text"
                                   className='form-control' name="content" id="content" aria-describedby="helpId"
                                   placehoder=""/>
                        </div>
                        <div>
                            <ErrorMessage name="content" component="span" className="text-bg-danger"/>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className='form-group'>
                            <label htmlFor="type">Type</label>
                            <Field >
                                {
                                    type.map((types) => (
                                        <option key={types.id} value={types.id}>
                                            {types.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default BlogCreate;