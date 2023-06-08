import {Formik, Form, Field,ErrorMessage} from "formik";
import * as blogService from "../service/BlogService"
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as Yup from 'yup'
function BlogEdit() {
    let navigate = useNavigate();
    let param = useParams();
    const [blogUpdate, setBlogUpdate] = useState();
    useEffect(() => {
        const getBlogDetail = async () => {
            const postDetail = await blogService.findById(param.id);
            setBlogUpdate(postDetail);
        };
        getBlogDetail();
    }, [param.id]);

    if(!blogUpdate){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id:blogUpdate?.id,
                title:blogUpdate?.title,
                category:blogUpdate?.category,
                time:blogUpdate?.time
            }}
                    validationSchema={Yup.object({
                        title:Yup.string().required('ko đươc để trống')
                    })}
                    onSubmit={async (values)=>{
                        try {
                            await blogService.update(values)
                            alert("update thanh cong")
                            navigate("/")
                        }catch (e) {
                            console.log(e)
                        }
                    }}>
                <Form>
                    <Field type='hidden' name ="id"/>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field type="text"
                                   className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="Nhập title" />
                        </div>
                        <ErrorMessage name='title' id='title' className='text-bg-danger'/>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <Field type="text"
                                   className="form-control" name="category" id="category" aria-describedby="helpId" placeholder="Nhập category" />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <Field type="text"
                                   className="form-control" name="time" id="time" aria-describedby="helpId" placeholder="Nhập time" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </Form>
            </Formik>
        </>
    )
}
export default BlogEdit;