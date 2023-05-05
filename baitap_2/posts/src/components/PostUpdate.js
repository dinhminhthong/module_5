import {Formik, Form, ErrorMessage, Field} from "formik";
import * as postService from "../service/PostServie"
import {useNavigate, useParams} from "react-router";
import * as Yup from "yup"
import React from "react";
function PostCreate() {
    let navigate = useNavigate();
    let param = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await postService.findById(param.id);
            setPost(result);
        };
    return(
        <>
            <Formik initialValues={{title:'',slug:'',category:'',content:'',updateAt:''}}
                    validationSchema={Yup.object({
                        title :Yup.string().required('không được để trống'),
                        slug:Yup.string().required(('không được để trống')),
                        category:Yup.string().required(('không được để trống')),
                        content:Yup.string().required(('không được bỏ trống')),
                        updateAt:Yup.string().required(('không được bỏ trống'))
                    })}
                    onSubmit={(value) => {
                        const create = async () => {
                            await postService.edit(value)
                            alert('chỉnh sửa thành công')
                            navigate('/')
                        }
                        create();
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Field type="text"
                                   className="form-control" name="title"
                                   id="title" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='title'/>
                    </div>

                    <div className='col-3'>
                        <div>
                            <label htmlFor="slug">Slug</label>
                            <Field type="text"
                                   className="form-control" name="slug"
                                   id="slug" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='slug'/>
                    </div>

                    <div className='col-3'>
                        <div>
                            <label htmlFor="category">Category</label>
                            <Field type="text"
                                   className="form-control" name="category"
                                   id="category" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='category'/>
                    </div>

                    <div className='col-3'>
                        <div>
                            <label htmlFor="content">Content</label>
                            <Field type="text"
                                   className="form-control" name="content"
                                   id="content" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='content'/>
                    </div>

                    <div className='col-3'>
                        <div>
                            <label htmlFor="updateAt">Content</label>
                            <Field type="text"
                                   className="form-control" name="updateAt"
                                   id="updateAt" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='updateAt'/>
                    </div>
                    <button className="btn btn-outline-secondary " type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </>
    )
}
export default PostCreate;