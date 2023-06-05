import {Formik,Form,Field,ErrorMessage} from "formik";
import * as postsService from "../service/PostsService"
import * as Yup from "yup";
import {useNavigate} from "react-router";
import React from "react";
function PostsCreate() {
        let navigate = useNavigate();
        return(
            <>
                <Formik initialValues={{title:"",category:"",time:""}}
                        validationSchema={Yup.object({
                             title: Yup.string().required('không được để trống'),
                             category:Yup.string().required('trường này phải nhập'),
                             time:Yup.string().required('không được để trống')
                        })}
                        onSubmit={ (value)=>{
                                const create = async ()=>{
                                        await postsService.save(value);
                                        alert('thêm mới thành công');
                                        navigate('/')
                                }
                                create();
                        }}
                        >
                        <Form>
                                <div className='col-3'>
                                        <div className='form-group'>
                                                <label htmlFor='title'>Title</label>
                                                <Field type='text' name='title' className='form-control'/>
                                        </div>
                                        <ErrorMessage name='title' component='span' className='text-bg-danger'/>
                                </div>

                                <div className='col-3'>
                                        <div className='form-group'>
                                                <label htmlFor='category'>Category</label>
                                                <Field type='text' name='category' className='form-control'/>
                                        </div>
                                        <ErrorMessage name='category' component='span' className='text-bg-danger'/>
                                </div>

                                <div className='col-3'>
                                        <div className='form-group'>
                                                <label htmlFor='time'>Time</label>
                                                <Field type='text' name='time' className='form-control'/>
                                        </div>
                                        <ErrorMessage name='time' component='span' className='text-bg-danger'/>
                                </div>
                                        <button type='submit' className='btn btn-danger'>Submit</button>
                        </Form>
                </Formik>
                </>
        )
}
export default PostsCreate;