import {Formik, Form, Field, ErrorMessage} from "formik";
import {useNavigate} from "react-router";
import * as blogService from "../service/BlogService";
import * as Yup from "yup"

function BlogCreate() {
    let navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{title: '', slug: '', category: '', thumbnailUrl: ''}}
                    validationSchema={Yup.object({
                        title: Yup.string().required(("không được để trống")),
                        slug: Yup.string().required(("không được để trống")),
                        category: Yup.string().required(("không được để trống")),
                        thumbnailUrl: Yup.string().required(("không được bỏ trống"))
                    })}
                    onSubmit={(value) => {
                        const create = async () => {
                            await blogService.save(value);
                            alert("thêm mới  thành công")
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
                            <label htmlFor="thumbnailUrl">Thumbnail URL</label>
                            <Field type="text"
                                   className="form-control" name="thumbnailUrl"
                                   id="thumbnailUrl" aria-describedby="helpId" placeholder=""
                            />
                        </div>
                        <ErrorMessage component='span' className='text-bg-danger' name='thumbnailUrl'/>
                    </div>
                    <button className="btn btn-outline-secondary " type="submit">
                        Submit
                    </button>

                </Form>
            </Formik>
        </>
    )

}

export default BlogCreate;