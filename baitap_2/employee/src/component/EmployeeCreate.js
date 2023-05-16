import {Formik,Form,Field,ErrorMessage} from "formik";
import * as employeeService from "../service/EmployeeService";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function EmployeeCreate() {
    const [level,setLevel] = useState([])
    let navigate = useNavigate();
    useEffect( ()=>{
        const getLevel =  async ()=>{
            let result = await employeeService.findAllLevel();
            setLevel(result)
        }
        getLevel()
    },[])
    return(
        <>
            <h1 className='text-center'>Create Employee</h1>
            <Formik initialValues={{name:'',contract:'',levelEmployee:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required()
                    })}
                    onSubmit={ (value)=>{
                        const create = async ()=>{
                            await employeeService.save(value);
                            alert("thêm mới thành công")
                            navigate('/')
                        }
                        create()
                    }}
                    >
                <Form>
                    <div className='col-3'>
                        <div className='form-gruop'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-gruop'>
                            <label htmlFor='contract'>Name</label>
                            <Field name='contract' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='contract' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Level</label>
                            <Field component='select' name='levelEmployee'>
                                {
                                    level.map( (em,index)=>(
                                        <option key={index} value={em.id}>
                                            {em.level}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </Formik>
            </>
    )
}
export default EmployeeCreate;