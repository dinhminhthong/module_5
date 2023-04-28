import {useNavigate} from "react-router-dom";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as postsService from "../service/PostsService";
import {ToastContainer, toast} from 'react-toastify'
import {RotatingLines} from 'react-loader-spinner'
function PostCreate() {
    let navigate = useNavigate();
    return (
        <>
            <h1>CREATE POSTS</h1>
            <Formik initialValues={{
                title: "",
                category: "",
                time: ""
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().require("không được để trống"),
                        category: Yup.string().require("không được để trống"),
                        time: Yup.string().require("không được bỏ trống")
                    })}
                    onSubmit={
                        (value, {setSubmitting}) => {
                            setTimeout(() => {
                                console.log(value);
                                const create = async () => {
                                    await postsService.save(value)
                                    setSubmitting(false);
                                    toast("thêm mới thành công");
                                    navigate('/')
                                }
                                create();
                            }, 500)
                        }
                    }
            >
                {({isSubmitting})=>(
                    <Form>
                        <h1> Post Create</h1>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>TITLE</label>
                            <Field type='text' className='form-control' id='title' name='title' />
                            <ErrorMessage name='title' component='span' className='form-err'/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='category' className='form-label'>TITLE</label>
                            <Field type='text' className='form-control' id='category' name='category' />
                            <ErrorMessage name='category' component='span' className='form-err'/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='time' className='form-label'>TITLE</label>
                            <Field type='text' className='form-control' id='time' name='time' />
                            <ErrorMessage name='time' component='span' className='form-err'/>
                        </div>
                        {
                            isSubmitting ?
                                <RotatingLines
                                    strokeColor='grey'
                                    strokeWidth='5'
                                    animationDuration='0,75'
                                    width='50'
                                    visible={true}
                                    />
                                    :
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        }
                    </Form>

                )}
            </Formik>
        </>
    )

}

export default PostCreate;