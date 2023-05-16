import {Formik, Form, Field, ErrorMessage} from "formik";
import * as musicService from "../service/MusicService";
import * as Yup from "yup"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function MusicCreata() {
    const [type,setType] = useState([])
    let navigate = useNavigate();
    useEffect( ()=>{
        const getType = async ()=>{
            let result = await musicService.findAllType();
            setType (result)
        }
        getType()
    },[])
    return(
        <>
            <Formik initialValues={{name:'',author:'',musicType:1}}
                    validationSchema={Yup.object({
                        name: Yup.string().required("không được để trống"),
                        author:Yup.string().required("không được để trống"),
                    })}
                    onSubmit={ (value)=>{
                        const create = async() =>{
                            await musicService.save(value);
                            alert('thêm mới thành công');
                            navigate("/")
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
                        <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <Field type='text' className='form-control' name='author'/>
                        </div>
                        <ErrorMessage name='author'  component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type music</label>
                            <Field component='select' name='musicType'>
                                {
                                    type.map( (mus,index)=>(
                                        <option key={index} value={mus.id}>
                                            {mus.type}
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
export default MusicCreata;