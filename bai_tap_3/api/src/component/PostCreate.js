import {Formik, Form, Field} from "formik";
import * as postsService from "../service/PostsService";
import {useNavigate} from "react-router";

function PostsCreate() {
    let navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                title: '',
                thumbnail_url: '',
                slug: '',
                category: ''
            }}
                    onSubmit={async (values)=>{
                        await postsService.save(values);
                        alert('thanh cong')
                        navigate('/')
                    }}
            >
                  <Form>
                      <div className='col-3'>
                          <div className='form-group'>
                              <label htmlFor='title'>title</label>
                              <Field name='title' type='text' className ='form-control'/>
                          </div>
                      </div>

                      <div className='col-3'>
                          <div className='form-group'>
                              <label htmlFor='thumbnail_url'>thumbnail_url</label>
                              <Field name='thumbnail_url' type='text' className ='form-control'/>
                          </div>
                      </div>


                      <div className='col-3'>
                          <div className='form-group'>
                              <label htmlFor='slug'>slug</label>
                              <Field name='slug' type='text' className ='form-control'/>
                          </div>
                      </div>


                      <div className='col-3'>
                          <div className='form-group'>
                              <label htmlFor='category'>category</label>
                              <Field name='category' type='text' className ='form-control'/>
                          </div>
                      </div>
                      <button type='submit' className='btn btn-primary'>Submit</button>
                  </Form>
            </Formik>
        </>
    )
}

export default PostsCreate