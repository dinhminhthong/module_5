import {Formik,Form,Field,ErrorMessage} from "formik";
import * as bookService from "../service/BookService";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function BookCreate() {
    const [type,setType] = useState([])
    let navigate = useNavigate();
    useEffect( ()=>{
        const getType = async ()=>{
            let rs = await bookService.findAllType();
            setType(rs)
        }
        getType()
    },[]);
    return(
        <>
            <Formik initialValues={{name:'',typeBook:1,author:''}}
                    validationSchema={Yup.object({
                        name:Yup.string().required("không được để trống")
                    })}
                    onSubmit={(value)=>{
                        const create = async ()=>{
                            await bookService.save(value);
                            alert('thêm mới thành công');
                            navigate('/')
                        }
                        create();
                    }}
                    >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' className='form-control' name='name'/>
                        </div>
                        <ErrorMessage name='name' component='span' className="text-bg-danger"/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <Field type='text' className='form-control' name='author'/>
                        </div>
                        <ErrorMessage name='author' component='span' className="text-bg-danger"/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type Book</label>
                            <Field component='select' name='typeBook' className='form-control'>
                                {
                                    type.map( (bo,index)=>(
                                        <option key={index} value={bo.id}>
                                            {bo.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </Formik>
            </>
    )
}
export default BookCreate;