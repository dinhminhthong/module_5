import {Field,Form,Formik,ErrorMessage} from "formik";
import * as Yup from "yup";
import * as tiviService from "../service/TiviService";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function TiviCreate() {
    const [type,setType] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{
        const getType = async ()=>{
            let result = await tiviService.findAllType();
            setType(result)
        }
        getType()
    },[])
    return(
        <>
            <h1 className='text-center'>Create Tivi</h1>
            <Formik initialValues={{name:'',date:'',tiviType:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required("không được để trống"),
                        date:Yup.date().required()
                    })}
                    onSubmit={(value)=>{
                        const create = async ()=>{
                            await tiviService.save(value);
                            alert("theem moi thanh cong");
                            navigate('/')
                        }
                        create()
                    }}
                    >
                    <Form>
                        <div className='col'>
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <Field name='name' type='text' className='form-control'/>
                            </div>
                            <ErrorMessage name='name' className='text-bg-danger' component='span'/>
                        </div>

                        <div className='col'>
                            <div className='form-group'>
                                <label htmlFor='date'>Date</label>
                                <Field name='date' type='date' className='form-control'/>
                            </div>
                            <ErrorMessage name='date' className='text-bg-danger' component='span'/>
                        </div>

                        <div className='col'>
                            <div className='form-group'>
                                <label htmlFor=''>Type tivi</label>
                                <Field component='select' name='tiviType' className='form-control'>
                                    {
                                        type.map( (tivi,index)=>(
                                            <option key={index} value={tivi.id}>
                                                {tivi.type}
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
export default TiviCreate;