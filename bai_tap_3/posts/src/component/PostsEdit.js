import {Formik, Form, Field} from "formik";
import * as postsService from "../service/PostsService"
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";

function PostsEdit() {
    let navigate = useNavigate();
    let param = useParams();
    const [postUpdate, setPostUpdate] = useState();
    useEffect(() => {
        const getPostDetail = async () => {
            const postDetail = await postsService.findById(param.id);
            setPostUpdate(postDetail.data);
        };
        getPostDetail();
    }, [param.id]);
    if(!postUpdate){
        return null;
    }
    return (
       <>
            <Formik initialValues={{
                id:postUpdate?.id,
                title:postUpdate?.title,
                category:postUpdate?.category,
                time:postUpdate?.time
            }}
                    onSubmit={async (values)=>{
                      try {
                          await postsService.update(values)
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
export default PostsEdit;